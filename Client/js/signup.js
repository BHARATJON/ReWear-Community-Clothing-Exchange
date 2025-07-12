const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = signupForm.name.value.trim();
    const email = signupForm.email.value.trim();
    const password = signupForm.password.value;

    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    alert(`🎉 Account created for ${name}!`);
    window.location.href = "login.html"; // Redirect after signup
  });
}
