const form = document.querySelector("#form");

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmedPassword = document.querySelector("#password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmedPasswordValue = confirmedPassword.value.trim();

  //username
  if (usernameValue === "") {
    displayError(username, "Username cannot be blank");
  } else {
    displaySuccess(username);
  }

  //email
  if (emailValue === "") {
    displayError(email, "Email cannot be blank");
  } else {
    displaySuccess(email);
  }

  //password
  if (passwordValue === "") {
    displayError(password, "Password cannot be blank");
  } else if (passwordValue.length < 8) {
    displayError(password, "Password must be longer than 8 characters");
  } else {
    displaySuccess(password);
  }

  if (confirmedPasswordValue === "") {
    displayError(confirmedPassword, "Password cannot be blank");
  } else if (confirmedPasswordValue !== passwordValue) {
    displayError(confirmedPassword, "Password does not match");
  } else {
    displaySuccess(confirmedPassword);
  }
}

function displayError(input, message) {
  const parentInput = input.parentElement;
  const errorMessage = parentInput.querySelector(".form-message");

  errorMessage.innerText = message;
  parentInput.classList.add("error");
}

function displaySuccess(input) {
  const parentInput = input.parentElement;
  parentInput.classList.add("success");
}
