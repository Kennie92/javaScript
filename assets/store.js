const shopContainer = document.querySelector(".grid");

let productTitle;
let productDescription;
let productImage;
let productPrice;
let productCategory;
let productId;
let productKey = [];
let productArray = [];




let output = "";

const url = "https://fakestoreapi.com/products";


let data = fetch(url)
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      productTitle = data[i].title;
      productDescription = data[i].description;
      productImage = data[i].image;
      productPrice = data[i].price;
      productCategory = data[i].category;
      productId = data[i].id;
      productArray[i] = [
        productTitle,
        productDescription,
        productImage,
        productPrice,
        productCategory,
        productId,
      ];
      productKey[i] = data[i].id;
      localStorage.setItem(productKey[i], JSON.stringify(productArray[i]));

     
    }
    loadApi();
  
  });



function loadApi() {
  for (let i = 0; i < productArray.length; i++) {
    output += `
              <div class="card">
              <div class="card-image-box">
              <img class="pImg" src="${productArray[i][2]}" alt="various products">
              </div>
              <div class="product-details">
              <h2 class="product-title">${productArray[i][0]}</h2>
                  <span class="pPrice">$${productArray[i][3]}</span>
                  <i class="bx bx-shopping-bag productBtn" "data-id="${productId}" onclick="pushCart(${productArray[i][5]})"></i>
                  </div>
                </div>
          `;
  }
  shopContainer.innerHTML = output;
  
};

let button = document.getElementsByClassName("bx bx-shopping-bag");


function pushCart(transferClickedId) {
  cart.classList.add("active");
 

  if (localStorage.length !== 0) {
    Object.keys(localStorage).forEach(function (productKeys) {
      productObject = JSON.parse(localStorage.getItem(productKeys));
      completeProduct = productObject;

      if (completeProduct[5] == transferClickedId) {
        let cartTotal = document.createElement("p");
        let cartTitle = document.createElement("p");
        let cartImage = document.createElement("img");
        let createCart = document.querySelector(".createCart")

        createCart.appendChild(cartTotal);
        createCart.appendChild(cartImage);
        createCart.appendChild(cartTitle);

        cartTotal.setAttribute("class", "cart-total")
        cartTitle.setAttribute("class", "cart-title");
        cartImage.setAttribute("src", completeProduct[2]);
        cartImage.setAttribute("width", "75");
        cartImage.setAttribute("height", "75");

        cartTitle.innerHTML = completeProduct[0];
        cartTotal.innerHTML = "$" + completeProduct[3];

      
        let cartObjects = document.getElementsByClassName('cart-total');
        let sum = 0;

        for (let i = 0; i < cartObjects.length; ++i) {
            let product = cartObjects[i];  
            let price = product.innerText;
            // Get rid of the $ sign and convert it to int
            sum += parseFloat(price.slice(1)); 
         }
      createCart = document.querySelector(".createCart");
      document.getElementById('priceTotal').innerHTML = "Total: $" + (sum).toFixed(2);
    }
    })
  }
};








let removeBtn = document.getElementById("deleteBtn").addEventListener('click', emptyCart);
let buyBtn = document.getElementById("buyBtn").addEventListener('click', buyProducts);

function emptyCart() {
  removeItems = window.confirm("Are you sure you want to remove added products from your cart?");
  if (removeItems) {
    createCart = document.querySelector('.createCart').innerHTML = "";
    cartTotal = document.getElementById('priceTotal').innerHTML = "Total: $0";
  }
}

function buyProducts() {
    shopDone = window.confirm("Are you done with your shopping and ready to checkout?");
  if (shopDone) {
    alert("Thanks for shopping at Megastore, and welcome back!");
    window.location.reload();
  }
}
       
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
  cart.classList.add("active");
};

closeCart.onclick = () => {
  cart.classList.remove("active");
};




const urlOneProduct = "https://fakestoreapi.com/products/1";
const urlAllProducts = "https://fakestoreapi.com/products";
const urlProductSix = "https://fakestoreapi.com/products/6";

let data1 = fetch(urlOneProduct)
  .then((response) => response.json()) 
  .then((json) => console.log(json));

  let data2 = fetch(urlAllProducts)
  .then((response) => response.json())
  .then((json) => console.log(json));

  let data3 = fetch(urlAllProducts)
  .then((response) => response.json())
  .then((json) => {
    json.forEach(element => {
   
    });
  });

  fetch(urlAllProducts, {
    method: "POST",
    body: JSON.stringify({
      title: "Differente Shoes",
      price: 36,
      description: "Latest shoes from Differente",
      category: "men's footwear",
      image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      id: 21,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

    fetch("https://fakestoreapi.com/products/6",{
            method:"PUT",
            body:JSON.stringify(
                {
                    id: 6,
                    title:'Solid Gold Petite Micropave',
                    price: 168,
                    category:"jewelery",
                    description:'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
                    image:'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg'
                }
            ),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

            //  fetch("https:fakestoreapi.com/products/6",{
            //      method:"DELETE",
            //      body:JSON.stringify(
            //          {
            //              id:6,
            //              title:'...',
            //              price:'...',
            //              category:'...',
            //              description:'...',
            //              image:'...'
            //          }
            //      ),
            //      headers: {
            //          "Content-type": "application/json; charset=UTF-8",
            //        },
            //  })
            //      .then(res=>res.json())
            //      .then(json=>console.log("deleted" + json))


                
                fetch('https:fakestoreapi.com/products/6', {
             method: 'DELETE',
            
             })
             .then(res=>res.json())
             .then(json=>console.log("deleted product" , json));