let data  = [
    {
        product_id : 1000,
        product_name: "Library Stool Chair",
        product_image: "./assets/Imagechair1.png",
        price: "$20",
        quantity: 0
    }
    ,
    {
        product_id : 1001,
        product_name: "Library Stool Chair",
        product_image: "./assets/Imagechair2.png",
        price: "$20",
        quantity: 0
    }
    ,
    {
        product_id : 1002,
        product_name: "Library Stool Chair",
        product_image: "./assets/Imagechair3.png",
        price: "$20",
        quantity: 0
    }
    ,
    {
        product_id : 1003,
        product_name: "Library Stool Chair",
        product_image: "./assets/Imagechair4.png",
        price: "$20",
        quantity: 0
    }
    ,
    {
        product_id : 1004,
        product_name: "Library Stool Chair",
        product_image: "./assets/Imagechair5.png",
        price: "$20",
        quantity: 0
    }
    ,
    {
        product_id : 1005,
        product_name: "Library Stool Chair",
        product_image: "./assets/Imagechair6.png",
        price: "$20",
        quantity: 0
    }
    ,
    {
        product_id : 1006,
        product_name: "Library Stool Chair",
        product_image: "./assets/Imagechair7.png",
        price: "$20",
        quantity: 0
    }
    ,
    {
        product_id : 1007,
        product_name: "Library Stool Chair",
        product_image: "./assets/Imagechair8.png",
        price: "$20",
        quantity: 0
    }
]


let productContainerDiv = document.getElementById("productcontainer");
let cartContainerDiv = document.getElementById("cart_container");


data.map(({product_id,product_name,product_image,price}) => {
    productContainerDiv.innerHTML +=`
         
    <div class="productcard" id=${product_id}>
    <div class="imgdiv">
        <img src=${product_image} alt="">
    </div>
    <div class="detailsdiv">
        <div class="left">
            <h4>${product_name}</h4>
            <h5>${price}</h5>
        </div>
        <div class="right">
        <button onclick="addProductToCart(${product_id})" class="btn">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
       </button>
        </div>
    </div>
</div>
    `
});


let cartId = document.getElementById("cart");
let cartSummaryId = document.getElementById(".cart_summary");

let ItemsinCart = []
let numberOfItemsinCart = 0;
function addProductToCart(e){
    console.log(e);
    let clickedItem = data.find((item)=>{
         return item.product_id == e;
    });
    
    // if(numberOfItemsinCart>=100){
    //     console.log("Cart has exceeded it's limit...");
    //     return;
    // }

    //  if(ItemsinCart.includesOf(clickedItem.product_id)){
    //      numberOfItemsinCart++;
    //        return;
    //  }
    cartId.innerHTML +=`
    <div class="productcard" id=${clickedItem.product_id}>
    <div class="imgdiv">
        <img src=${clickedItem.product_image} alt="">
    </div>
    <div class="detailsdiv">
        <div class="left">
            <h4>${clickedItem.product_name}</h4>
            <h5>${clickedItem.price}</h5>
        </div>
        <div class="right">
        <button onclick="removeProductFromCart(${clickedItem.product_id})" class="btn">
        <i class="fa fa-times" aria-hidden="true"></i>
        </button>

    `;
    clickedItem.quantity+=1;
    ItemsinCart.push(clickedItem.product_id); 
    console.log(ItemsinCart);
    numberOfItemsinCart++;
    }


function removeProductFromCart(e){
    let itemTobeRemoved = data.find((item)=>{
        return item.product_id == e;
   });

   cartId.remove(itemTobeRemoved.product_id);
   console.log(ItemsinCart);
}

let average = document.getElementById("avg_price");
let total = document.getElementById("total_price");
function getAverageProductPrice(ItemsinCart){
    let totalSum = 0;
    for(let i=0;i<ItemsinCart.length;i++){
        totalSum+=20;
    }
    return totalSum/ItemsinCart.length;
}

function getTotalProductPrice(ItemsinCart){
    let totalSum = 0;
    for(let i=0;i<ItemsinCart.length;i++){
        totalSum+=20;
    }
    return totalSum;
}


   






