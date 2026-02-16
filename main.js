let users = [];

function SignUp() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please enter both email and password.");
    return;
  }

  users.push({ email, password });
  alert("Email: " + email + "\nPassword: " + password + "\n\nYou are now Registered! ");
  window.location.href = "index.html";
}

function validateLogin() {
  const usernameInput = document.getElementById('username').value.trim();
  const passwordInput = document.getElementById('password').value.trim();

  if (usernameInput === "" || passwordInput === "") {
    alert("Please enter both username and password.");
    return;
  }

  const user = users.find(user => user.email === usernameInput && user.password === passwordInput);
  if (user) {
    window.location.href = 'home.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
}
