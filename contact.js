const hamburger = document.querySelector(".hamburger");
const navBar    = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});










  const form = document.getElementById('contactForm');
  const sendBtn = document.getElementById('sendBtn');
  const errorMessageDiv = document.getElementById('errorMessage');

  sendBtn.addEventListener('click', () => {
    // Clear previous error message
    errorMessageDiv.textContent = '';

    // Use Constraint Validation API to check form validity
    if (!form.checkValidity()) {
      // Show generic error, you can show per field if you like
      errorMessageDiv.textContent = 'Please fill in all required fields with valid details.';
      // Trigger built-in browser error display (optional)
      form.reportValidity();
      return;  // do not proceed
    }

    // All fields valid => proceed with redirect + clear form
    form.reset();              // clear all inputs
    window.location.href = './404.html';
  });






/* auto clear section */
// const form = document.getElementById('contactForm');
// const sendBtn = document.getElementById('sendBtn');

// sendBtn.addEventListener('click', () => {
  
//     window.location.href = './404.html';
    

//     form.reset();
// });