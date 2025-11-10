

document.addEventListener('DOMContentLoaded', () => {
  // Forms
  const signinForm = document.getElementById('signin-form');
  const forgotForm = document.getElementById('forgot-form');
  const signupForm = document.getElementById('signup-form');

  // Sections
  const sectionSignin = document.getElementById('signin-section');
  const sectionForgot = document.getElementById('forgot-section');
  const sectionSignup = document.getElementById('signup-section');

  // Links that switch sections
  const elLinkForgot = document.getElementById('link-forgot');
  const elLinkSignup = document.getElementById('link-signup');
  const elBackFromForgot = document.getElementById('back-to-signin-from-forgot');
  const elBackFromSignup = document.getElementById('back-to-signin-from-signup');

  function showSection(section) {
    // hide all
    if (sectionSignin) sectionSignin.style.display = 'none';
    if (sectionForgot)  sectionForgot.style.display  = 'none';
    if (sectionSignup)  sectionSignup.style.display  = 'none';
    // show requested
    if (section) section.style.display = 'block';
  }

  // Initialize: show sign-in
  showSection(sectionSignin);

  /* ---------------- Sign In ---------------- */
  if (signinForm) {
    signinForm.addEventListener('submit', (ev) => {
      ev.preventDefault();

      // Use browser constraint API
      if (!signinForm.checkValidity()) {
        signinForm.reportValidity();
        alert('Please fill in all required fields correctly.');
        return;
      }

      // Optional extra checks
      const emailEl = document.getElementById('signin-email');
      const passwordEl = document.getElementById('signin-password');

      const email = emailEl ? emailEl.value.trim() : '';
      const password = passwordEl ? passwordEl.value.trim() : '';

      if (!email || !password) {
        alert('Please enter both email and password.');
        return;
      }

      // clear inputs
      signinForm.reset();

      // redirect to 404 (per requirement)
      window.location.href = './404.html';
    });
  }

  /* ---------------- Forgot Password ---------------- */
  if (forgotForm) {
    forgotForm.addEventListener('submit', (ev) => {
      ev.preventDefault();

      // HTML5 validation (type="email" + required)
      if (!forgotForm.checkValidity()) {
        forgotForm.reportValidity();
        alert('Please enter a valid email address.');
        return;
      }

      const forgotEmailEl = document.getElementById('forgot-email');
      const email = forgotEmailEl ? forgotEmailEl.value.trim() : '';

      if (!email) {
        alert('Please enter your email address.');
        return;
      }

      // clear the form inputs
      forgotForm.reset();

      // redirect to 404
      window.location.href = './404.html';
    });
  }

  /* ---------------- Sign Up ---------------- */
  if (signupForm) {
    signupForm.addEventListener('submit', (ev) => {
      ev.preventDefault();

      if (!signupForm.checkValidity()) {
        signupForm.reportValidity();
        alert('Please fill all required fields correctly.');
        return;
      }

      const nameEl = document.getElementById('signup-name');
      const emailEl = document.getElementById('signup-email');
      const pwdEl = document.getElementById('signup-password');
      const confirmEl = document.getElementById('signup-confirm');

      const name = nameEl ? nameEl.value.trim() : '';
      const email = emailEl ? emailEl.value.trim() : '';
      const pwd = pwdEl ? pwdEl.value.trim() : '';
      const confirm = confirmEl ? confirmEl.value.trim() : '';

      if (!name || !email || !pwd || !confirm) {
        alert('Please fill all fields.');
        return;
      }

      if (pwd !== confirm) {
        alert('Passwords do not match.');
        return;
      }

      // clear all fields
      signupForm.reset();

      // redirect to 404
      window.location.href = './404.html';
    });
  }

  /* -------------- Section Links (switch UI) -------------- */
  if (elLinkForgot) {
    elLinkForgot.addEventListener('click', (e) => {
      e.preventDefault();
      showSection(sectionForgot);
    });
  }
  if (elLinkSignup) {
    elLinkSignup.addEventListener('click', (e) => {
      e.preventDefault();
      showSection(sectionSignup);
    });
  }
  if (elBackFromForgot) {
    elBackFromForgot.addEventListener('click', (e) => {
      e.preventDefault();
      showSection(sectionSignin);
    });
  }
  if (elBackFromSignup) {
    elBackFromSignup.addEventListener('click', (e) => {
      e.preventDefault();
      showSection(sectionSignin);
    });
  }

});
