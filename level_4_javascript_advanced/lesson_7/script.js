let product_state = [
    {
      id: "P1",
      img_url: "./pic/birthday-cake.webp",
      title: "Crunchy 1",
      rate: 4.4,
    },
    {
      id: "P2",
      img_url: "./pic/birthday-cake.webp",
      title: "Crunchy 2",
      rate: 4.2,
    },
    {
      id: "P3",
      img_url: "./pic/birthday-cake.webp",
      title: "Crunchy 3",
      rate: 4.7,
    },
  ];
  
  //write a function that will take the data of a product
  //and return the htlm elements needed to display the product
  
  //in    product_data
  //cal   Create the html elements(<div>) document.createElement()
  //      Add the other html elements inside this element
  //          productCard.innerHTML = `...`
  //      Add the classes for the new element
  //out   html elements(<div>, <h2>, ...)
  
  function getProductCardElement(product_data) {
    //1.Create productCard
    let productCard = document.createElement("div");
    //2.Add content
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
  
    //3.Add Classes
    // border border-2 boder-info mx-1 d-flex flex-column align-items-center position-relative
    productCard.classList.add("border");
    productCard.classList.add("border-2");
    productCard.classList.add("boder-info");
    productCard.classList.add("mx-1");
    productCard.classList.add("d-flex");
    productCard.classList.add("flex-column");
    productCard.classList.add("align-items-center");
    productCard.classList.add("position-relative");
  
    //4.Return productCard
    return productCard;
  }
  
  function updateProductUI(product_data_state) {
    let productsContainer = document.querySelector("#product-container");
    productsContainer.innerHTML = ""; //fshi cdo element ne kontenier
    for (let i = 0; i < product_data_state.length; i++) {
      const product_data = product_data_state[i];
      const newProductCard = getProductCardElement(product_data);
      productsContainer.append(newProductCard);
    }
  }
  updateProductUI(product_state);
  
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
    //Change state
    product_state = resultArray;
    //Update UI
    updateProductUI(product_state);
  }
  