// Fetch products and display as grid cards using async/await with pagination, loading, url param, and details
const LIMIT = 12;
let currentPage = 1;
let totalPages = 1;

function getPageFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get("page"), 10);
  return isNaN(page) || page < 1 ? 1 : page;
}

function setPageInUrl(page) {
  const params = new URLSearchParams(window.location.search);
  params.set("page", page);
  window.history.pushState({}, "", `${window.location.pathname}?${params}`);
}

async function fetchAndDisplayProducts(page = 1) {
  const loading = document.getElementById("loading");
  const container = document.getElementById("products-container");
  if (loading) loading.style.display = "block";
  if (container) container.innerHTML = "";
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?limit=${LIMIT}&page=${page}`
    );
    const data = await response.json();
    const products = data.data;
    totalPages = data.metadata?.numberOfPages || 1;
    currentPage = data.metadata?.currentPage || 1;
    setPageInUrl(currentPage);
    if (!container) return;
    container.innerHTML = products
      .map(
        (product) => `
      <div class="product-card" data-id="${product.id}">
        <img src="${product.imageCover}" alt="${
          product.title
        }" class="product-image" />
        <div class="product-info">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-desc">${product.description.split("\n")[0]}</p>
          <div class="product-meta">
            <span class="product-price">${product.price} EGP</span>
            <span class="product-rating">⭐ ${product.ratingsAverage}</span>
          </div>
        </div>
      </div>
    `
      )
      .join("");
    renderPagination();
  } catch (err) {
    if (container) container.innerHTML = "<p>Failed to load products.</p>";
    const pagination = document.getElementById("pagination");
    if (pagination) pagination.innerHTML = "";
  } finally {
    if (loading) loading.style.display = "none";
  }
}

function renderPagination() {
  const pagination = document.getElementById("pagination");
  if (!pagination) return;
  let html = "";
  if (totalPages <= 1) {
    pagination.innerHTML = "";
    return;
  }
  html += `<button class="page-btn" ${
    currentPage === 1 ? "disabled" : ""
  } data-page="${currentPage - 1}">Prev</button>`;
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn${
      i === currentPage ? " active" : ""
    }" data-page="${i}">${i}</button>`;
  }
  html += `<button class="page-btn" ${
    currentPage === totalPages ? "disabled" : ""
  } data-page="${currentPage + 1}">Next</button>`;
  pagination.innerHTML = html;
}

document.addEventListener("click", function (e) {
  // Pagination
  if (e.target.classList.contains("page-btn")) {
    const page = Number(e.target.getAttribute("data-page"));
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      fetchAndDisplayProducts(page);
    }
  }
  // Product details
  const card = e.target.closest(".product-card");
  if (card && card.dataset.id) {
    window.location.href = `product.html?id=${card.dataset.id}`;
  }
});

// On load, get page from URL
fetchAndDisplayProducts(getPageFromUrl());
