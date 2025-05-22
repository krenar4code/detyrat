let product_state = [
  {
    id: "P1",
    img_url: "./pic/birthday-cake.webp",
    title: "Crunchy 1",
    rate: 4.4,
    category: "crunchy",
  },
  {
    id: "P2",
    img_url: "./pic/birthday-cake.webp",
    title: "Biscuit 1",
    rate: 4.2,
    category: "biscuits",
  },
  {
    id: "P3",
    img_url: "./pic/birthday-cake.webp",
    title: "New Product 1",
    rate: 4.7,
    category: "new",
  },
];

function getProductCardElement(product_data) {
  let productCard = document.createElement("div");

  productCard.innerHTML = `
      <button id=${product_data.id} class="btn btn-danger position-absolute 
                top-0 end-0 py-1 px-2" onclick="deleteProduct(event)">
        <i class="fa-solid fa-trash"></i>
      </button>
      <img src="${product_data.img_url}" alt="" />
      <p class="text-primary fw-bold">${product_data.title}</p>
      <div class="border border-2 boder-danger mt-2 d-flex">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <span class="text-primary">${product_data.rate}</span>
      </div>
  `;

  productCard.classList.add("border");
  productCard.classList.add("border-2");
  productCard.classList.add("boder-info");
  productCard.classList.add("mx-1");
  productCard.classList.add("d-flex");
  productCard.classList.add("flex-column");
  productCard.classList.add("align-items-center");
  productCard.classList.add("position-relative");

  return productCard;
}

function updateProductUI(product_data_state) {
  let productsContainer = document.querySelector("#product-container");
  productsContainer.innerHTML = "";
  for (let i = 0; i < product_data_state.length; i++) {
    const product_data = product_data_state[i];
    const newProductCard = getProductCardElement(product_data);
    productsContainer.append(newProductCard);
  }
}

// FILTER
function filterProducts(category) {
  if (category === "all") {
    updateProductUI(product_state);
  } else {
    const filtered = product_state.filter(
      (product) => product.category === category
    );
    updateProductUI(filtered);
  }
}

// Set Event Listeners to Filter Buttons
document.querySelectorAll(".filter-btns button").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // Remove active class from all buttons
    document.querySelectorAll(".filter-btns button").forEach((b) =>
      b.classList.remove("active")
    );

    // Add active class to clicked button
    btn.classList.add("active");

    // Get category from data-filter attribute
    const category = btn.getAttribute("data-filter");
    filterProducts(category);
  });
});

// DELETE
function deleteProduct(event) {
  let idToBeDeleted = event.target.id;
  if (!idToBeDeleted) {
    idToBeDeleted = event.target.parentElement.id;
  }
  let resultArray = [];
  for (let i = 0; i < product_state.length; i++) {
    const product_data = product_state[i];
    if (product_data.id != idToBeDeleted) {
      resultArray.push(product_data);
    }
  }
  product_state = resultArray;
  updateProductUI(product_state);
}

// Initial render
updateProductUI(product_state);
