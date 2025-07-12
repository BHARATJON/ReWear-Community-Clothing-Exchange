function getItemIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"));
}

const itemId = getItemIdFromURL();
const item = mockItems.find(i => i.id === itemId);

if (item) {
  const container = document.getElementById("itemDetail");
  container.innerHTML = `
    <div class="item-images">
      <img src="${item.image}" alt="${item.title}" />
    </div>
    <div class="item-info">
      <h2>${item.title}</h2>
      <p class="category">Category: ${item.category}</p>
      <p class="type">Type: ${item.type}</p>
      <p class="size">Size: ${item.size}</p>
      <p class="condition">Condition: ${item.condition}</p>
      <p class="tags">Tags: ${item.tags.join(", ")}</p>
      <p class="description">${item.description}</p>
      <div class="uploader-info">
        <p>Uploaded by: <strong>${item.uploader}</strong></p>
      </div>
      <div class="action-buttons">
        <button class="btn primary">Request Swap</button>
        <button class="btn secondary">Redeem with Points</button>
      </div>
    </div>
  `;
} else {
  document.getElementById("itemDetail").innerHTML = `<p>Item not found.</p>`;
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    const action = e.target.innerText;

    if (action === "Request Swap") {
      alert(`Swap request sent for "${item.title}"!`);
      e.target.innerText = "Swap Requested";
      e.target.disabled = true;
    }

    if (action === "Redeem with Points") {
      const confirmRedeem = confirm(`Are you sure you want to redeem "${item.title}" using your points?`);
      if (confirmRedeem) {
        alert(`Item "${item.title}" has been redeemed!`);
        e.target.innerText = "Redeemed";
        e.target.disabled = true;
      }
    }
  }
});
