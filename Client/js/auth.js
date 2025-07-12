// ----------------------
// LOGIN FORM HANDLER
// ----------------------
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    alert(`✅ Logged in as: ${email}`);
    window.location.href = "dashboard.html"; // Redirect to dashboard
  });
}

// ----------------------
// SIGNUP FORM HANDLER
// ----------------------
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
      alert("Please fill out all fields.");
      return;
    }

    alert(`🎉 Welcome, ${name}! Your account has been created.`);
    window.location.href = "login.html"; // Redirect to login
  });
}
