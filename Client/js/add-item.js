const form = document.getElementById("addItemForm");
const preview = document.getElementById("imagePreview");
const imageInput = document.getElementById("imageUpload");

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

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newItem = {
    id: Date.now(),
    title: document.getElementById("title").value.trim(),
    description: document.getElementById("description").value.trim(),
    category: document.getElementById("category").value,
    type: document.getElementById("type").value.trim(),
    size: document.getElementById("size").value,
    condition: document.getElementById("condition").value,
    tags: document.getElementById("tags").value.split(",").map(tag => tag.trim()),
    uploader: "Rajat Surana",
    status: "Available",
    image: preview.querySelector("img")?.src || ""
  };

  console.log("✅ New item submitted:", newItem);
  alert("🎉 Your item has been listed successfully!");
});
