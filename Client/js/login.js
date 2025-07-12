const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = loginForm.email.value.trim();
    const password = loginForm.password.value;

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    alert("✅ Logged in successfully!");
    window.location.href = "dashboard.html"; // Redirect after login
  });
}
