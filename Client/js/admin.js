document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert(`Action: ${btn.innerText}`);
  });
});
const tableBody = document.getElementById("adminItemsTable");

mockItems.forEach(item => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><img src="${item.image}" alt="${item.title}" style="width: 60px; border-radius: 6px;" /></td>
    <td>${item.title}</td>
    <td>${item.uploader}</td>
    <td><span class="badge ${item.status === "Available" ? "green" : "gray"}">${item.status}</span></td>
    <td>
      <button class="btn small approve">Approve</button>
      <button class="btn small reject">Reject</button>
      <button class="btn small danger">Delete</button>
    </td>
  `;

  // Add event listeners to each row's buttons
  row.querySelector(".approve").addEventListener("click", () => {
    alert(`✅ ${item.title} approved.`);
  });
  row.querySelector(".reject").addEventListener("click", () => {
    alert(`⚠️ ${item.title} rejected.`);
  });
  row.querySelector(".danger").addEventListener("click", () => {
    row.remove();
    alert(`❌ ${item.title} deleted.`);
  });

  tableBody.appendChild(row);
});
