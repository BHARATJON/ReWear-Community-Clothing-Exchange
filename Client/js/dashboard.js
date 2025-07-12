const container = document.querySelector('.items-grid');

if (typeof mockItems !== 'undefined' && container) {
  mockItems.forEach(item => {
    const card = document.createElement('a');
    card.classList.add('item-card');
    card.href = `item.html?id=${item.id}`; // Pass item ID in URL
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <p>Status: ${item.status}</p>
    `;
    container.appendChild(card);
  });
}
