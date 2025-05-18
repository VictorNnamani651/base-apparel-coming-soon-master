const email = document.getElementById("email");
const emailButton = document.getElementById("email-submit");
const emailForm = document.getElementById("email-form");
const emailErrorText = document.querySelector(".error.text");
const emailErrorIcon = document.querySelector(".error.icon");

function addErrorStyles() {
  emailForm.classList.add("error");
  emailErrorText.classList.remove("hide");
  emailErrorIcon.classList.remove("hide");
}

function removeErrorStyles() {
  emailForm.classList.remove("error");
  emailErrorText.classList.add("hide");
  emailErrorIcon.classList.add("hide");
}

function validateEmail() {
  const emailInput = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput)) {
    removeErrorStyles();
    alert("Valid email address ✅");
  } else if (emailInput === "") {
    addErrorStyles();
    alert("Please enter an email address ❌");
  } else {
    addErrorStyles();
    alert("Invalid email address ❌");
  }
}
