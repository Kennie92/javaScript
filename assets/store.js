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
    console.log(productArray)
  });

console.log(localStorage)




function pushCart(clickedId) {
  cart.classList.add("active");
  console.log(clickedId);

  if (localStorage.length !== 0) {
    Object.keys(localStorage).forEach(function (key) {
      productObject = JSON.parse(localStorage.getItem(key));
      completeProduct = productObject;

      if (completeProduct[5] == clickedId) {
        let cartPrice = document.createElement("p");
        let cartTitle = document.createElement("p");
        let cartImage = document.createElement("img");

        createCart.appendChild(cartPrice);
        createCart.appendChild(cartImage);
        createCart.appendChild(cartTitle);

        cartPrice.setAttribute("class", "cart-price")
        cartTitle.setAttribute("class", "cart-title");
        cartImage.setAttribute("src", completeProduct[2]);
        cartImage.setAttribute("width", "75");
        cartImage.setAttribute("height", "75");

        cartTitle.innerHTML = completeProduct[0];
        cartPrice.innerHTML = "$" + completeProduct[3];

        console.log(cartPrice);
        console.log(cartTitle);
      }
    })
  }
};

function loadApi() {
  for (let i = 0; i < productArray.length; i++) {
    output += `
              <div class="card">
              <div class="card-image-box">
              <img class="pImg" src="${productArray[i][2]}" alt="product image">
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
  console.log(productArray);
};

let button = document.getElementsByClassName("bx bx-shopping-bag");



let createCart = document.querySelector(".createCart")


let removeBtn = document.getElementById("removebutton").addEventListener('click', emptyCart);
let buyBtn = document.getElementById("buyBtn").addEventListener('click', buyProducts);

function emptyCart() {
  removeCart = window.confirm("Are you sure you want to remove added products from your cart?");
  if (removeCart) {
    createCart.innerHTML = "";
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
  .then((response) => response.json()) // hÃ¤r blir Json-stringen till objekt
  .then((json) => console.log(json));

  let data2 = fetch(urlAllProducts)
  .then((response) => response.json())
  .then((json) => console.log(json));

  let data3 = fetch(urlAllProducts)
  .then((response) => response.json())
  .then((json) => {
    json.forEach(element => {
    //   console.log(element)
    });
  });

  fetch(urlAllProducts, {
    method: "POST",
    body: JSON.stringify({
      title: "Baseball cap",
      price: 20,
      description: "A beautiful description about a baseball cap",
      category: "men's clothing",
      image: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      id: 21,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

    fetch("https://fakestoreapi.com/products/10",{
            method:"PUT",
            body:JSON.stringify(
                {
                    id:10,
                    title:'Nike sneakers',
                    price: 199.99,
                    category:"men's clothing",
                    description:'Description about some nike sneakers',
                    image:'https://images.pexels.com/photos/4490019/pexels-photo-4490019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
             .then(json=>console.log("deleted product" + json));