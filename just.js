function showMessage(input, message, type) {
  // get the small element and set the message
  const msg = input.parentNode.querySelector("small");
  msg.innerText = message;
  // update the class for the input
  input.className = type ? "success" : "error";
  return type;
}
function show() {
  document.querySelector('#image')
          .style.display = "block";
       

  document.querySelector('#submit')
          .style.display = "none";
}

function showError(input, message) {
  return showMessage(input, message, false) ;
}

function showSuccess(input, message) {
  return showMessage(input, message, true);
}
function hasValue(input, message) {
  if (input.value.trim() === "") {
  return showError(input, message);
  }
  return showSuccess(input);
}
function validateEmail(input, requiredMsg, invalidMsg) {
  if (input.value.trim() === "") {
    return showError(input, requiredMsg);
  }
  if (!input.value.includes("@")) {
    return showError(input, invalidMsg);
  }
  return showSuccess(input);
}

const form = document.querySelector("#signup");

const LASTNAME_REQUIRED = "Last name cannot be empty";
const FIRSTNAME_REQUIRED = "First name cannot be empty";
const EMAIL_REQUIRED = "Email cannot be empty";
const EMAIL_INVALID = "Looks like this is not an email";
const PASSWORD_REQUIRED = "Password cannot be empty";

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const lastName = document.querySelector("#lastname");
  const firstName = document.querySelector("#firstname");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

    const isValid1 = hasValue(lastName, LASTNAME_REQUIRED) 
    const isValid2 = hasValue(firstName, FIRSTNAME_REQUIRED) 
    const isValid3 = hasValue(email, EMAIL_REQUIRED) 
    const isValid4 = validateEmail(email, EMAIL_REQUIRED, EMAIL_INVALID) 
    const isValid5 = hasValue(password, PASSWORD_REQUIRED)
  if (isValid1 && isValid2 && isValid3 && isValid4 && isValid5) {
    form.submit();
  }
});

