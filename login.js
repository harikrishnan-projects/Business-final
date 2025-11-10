document.addEventListener("DOMContentLoaded", () => {
  const signinForm = document.getElementById("signin-form");
  const forgotForm = document.getElementById("forgot-form");
  const signupForm = document.getElementById("signup-form");

  const sectionSignin = document.getElementById("signin-section");
  const sectionForgot = document.getElementById("forgot-section");
  const sectionSignup = document.getElementById("signup-section");

  function showSection(section) {
    sectionSignin.style.display = "none";
    sectionForgot.style.display = "none";
    sectionSignup.style.display = "none";
    section.style.display = "block";
  }

  // Start by showing sign in
  showSection(sectionSignin);

  /*** Sign In logic with clearing ***/
  signinForm.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const emailEl = document.getElementById("signin-email");
    const passwordEl = document.getElementById("signin-password");

    const email = emailEl.value.trim();
    const password = passwordEl.value.trim();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Clear the inputs
    emailEl.value = "";
    passwordEl.value = "";
    document.getElementById("remember-me").checked = false;

    // Decide redirection (demo logic)
    if (email === "test@example.com" && password === "password") {
      window.location.href = "./dashboard.html";
    } else {
      window.location.href = "./404.html";
    }
  });

  /*** Forgot Password logic with clearing ***/
  forgotForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const forgotEmailEl = document.getElementById("forgot-email");
    const email = forgotEmailEl.value.trim();
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    // Clear the input
    forgotEmailEl.value = "";

    alert("We’ve sent a reset link to " + email + ".");
    showSection(sectionSignin);
  });

  /*** Sign Up logic with clearing ***/
  signupForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const nameEl = document.getElementById("signup-name");
    const emailEl = document.getElementById("signup-email");
    const pwdEl = document.getElementById("signup-password");
    const confirmEl = document.getElementById("signup-confirm");

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const pwd = pwdEl.value.trim();
    const confirm = confirmEl.value.trim();

    if (!name || !email || !pwd || !confirm) {
      alert("Please fill all fields.");
      return;
    }
    if (pwd !== confirm) {
      alert("Passwords do not match.");
      return;
    }

    // Clear inputs
    nameEl.value = "";
    emailEl.value = "";
    pwdEl.value = "";
    confirmEl.value = "";

    alert(`Account created for ${name} (${email})`);
    showSection(sectionSignin);
  });

  // Anchor links to switch sections
  document.getElementById("link-forgot").addEventListener("click", (ev) => {
    ev.preventDefault();
    showSection(sectionForgot);
  });
  document.getElementById("link-signup").addEventListener("click", (ev) => {
    ev.preventDefault();
    showSection(sectionSignup);
  });
  document.getElementById("back-to-signin-from-forgot").addEventListener("click", (ev) => {
    ev.preventDefault();
    showSection(sectionSignin);
  });
  document.getElementById("back-to-signin-from-signup").addEventListener("click", (ev) => {
    ev.preventDefault();
    showSection(sectionSignin);
  });
});
