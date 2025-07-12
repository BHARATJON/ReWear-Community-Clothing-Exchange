const featuredItems = [
  {
    title: "Denim Jacket",
    image: "assets/images/Denim Jacket.webp",
    size: "M",
    condition: "Good",
  },
  {
    title: "Floral Dress",
    image: "assets/images/Floral Dress.webp",
    size: "S",
    condition: "Excellent",
  },
  {
    title: "Hoodie",
    image: "assets/images/Hoodie.webp",
    size: "L",
    condition: "Like New",
  }
];

const container = document.getElementById("featuredItems");

featuredItems.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("item-card");
  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}" />
    <h3>${item.title}</h3>
    <p>Size: ${item.size}</p>
    <p>Condition: ${item.condition}</p>
  `;
  container.appendChild(card);
});
