document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  if (email === "masud08eee@gmail.com" && password === "123456") {
    window.location.href = "bank.html";
  } else {
    alert("please use valid login id and password");
  }
});
