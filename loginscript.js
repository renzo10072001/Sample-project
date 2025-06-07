// Show and hide forms
function showSignUp() {
  document.getElementById('login-container').classList.add('hidden');
  document.getElementById('signup-container').classList.remove('hidden');
}

function showLogin() {
  document.getElementById('signup-container').classList.add('hidden');
  document.getElementById('login-container').classList.remove('hidden');
}

// Handle Sign Up
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('signup-username').value.trim();
  const password = document.getElementById('signup-password').value;

  if (localStorage.getItem(username)) {
    document.getElementById('signup-error-msg').innerText = 'Username already exists!';
  } else {
    localStorage.setItem(username, password);
    alert('Account created successfully!');
    showLogin();
  }
});

// Handle Login
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value;

  const storedPassword = localStorage.getItem(username);
  if (storedPassword && storedPassword === password) {
    alert('Login successful!');
    document.getElementById('login-error-msg').innerText = '';
  } else {
    document.getElementById('login-error-msg').innerText = 'Invalid username or password!';
  }
});
