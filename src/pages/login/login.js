const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  if (email === "email@email.com" && password === "password") {
    alert("You have successfully logged in.");
    window.location.href = "../../../index.html";
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});
