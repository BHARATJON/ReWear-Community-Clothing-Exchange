const form = document.getElementById("addItemForm");
const preview = document.getElementById("imagePreview");
const imageInput = document.getElementById("imageUpload");

// Show image preview
imageInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width: 200px; margin-top: 10px; border-radius: 12px;" />`;
    };
    reader.readAsDataURL(file);
  } else {
    preview.innerHTML = "";
  }
});

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newItem = {
    id: Date.now(),
    category: document.getElementById("category").value,
    type: document.getElementById("type").value.trim(),
    size: document.getElementById("size").value,
    condition: document.getElementById("condition").value,
    description: document.getElementById("description").value.trim(),
    image: preview.querySelector("img")?.src || "",
    uploader: "Rajat Surana", // Placeholder (replace with user session later)
    status: "Available"
  };

  console.log("✅ New item submitted:", newItem);
  alert("🎉 Your item has been listed successfully!");

  // Optional: Save to localStorage or redirect to dashboard
  // window.location.href = "dashboard.html";
});
