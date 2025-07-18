// Show product details page
async function fetchProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const loading = document.getElementById("loading");
  const details = document.getElementById("product-details");
  if (!id) {
    details.innerHTML = "<p>Product not found.</p>";
    return;
  }
  if (loading) loading.style.display = "block";
  details.innerHTML = "";
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    const data = await res.json();
    const p = data.data;
    details.innerHTML = `
      <div class="product-details-card">
        <div class="product-details-images">
          ${p.images
            .map((img) => `<img src="${img}" alt="${p.title}" />`)
            .join("")}
        </div>
        <div class="product-details-info">
          <h2>${p.title}</h2>
          <p><strong>Description:</strong> ${p.description.replace(
            /\n/g,
            "<br>"
          )}</p>
          <p><strong>Price:</strong> ${p.price} EGP</p>
          <p><strong>Sold:</strong> ${p.sold}</p>
          <p><strong>Quantity:</strong> ${p.quantity}</p>
          <p><strong>Category:</strong> ${p.category?.name || ""}</p>
          <p><strong>Brand:</strong> ${p.brand?.name || ""}</p>
          <p><strong>Rating:</strong> ⭐ ${p.ratingsAverage} (${
      p.ratingsQuantity
    } reviews)</p>
        </div>
      </div>
    `;
  } catch (err) {
    details.innerHTML = "<p>Failed to load product details.</p>";
  } finally {
    if (loading) loading.style.display = "none";
  }
}

fetchProductDetails();
