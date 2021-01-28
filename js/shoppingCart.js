window.onload = function () {
    document.querySelector("#buttonMinus").setAttribute("disabled", "disabled");
    document.querySelector("#buttonPlus").addEventListener("click", plusShop);
    document.querySelector("#buttonMinus").addEventListener("click", minusShop);

    //get product ID
    abc = window.location.search.split('id=')[1];

    //ensure product id isn't empty;luh6hy
    if (abc !== '') {
        //loop through every product
        products.forEach(function (product) {

            //check if current product title has match with search query
            if (product.id == abc) {

                //Add product data to webpage
                document.querySelector('#title').innerHTML = product.title;
                document.querySelector('#price').innerHTML = product.price;
                document.querySelector('#description').innerHTML = product.description;

                //Get the value from the array to display the corresponding star image
                if (product.rating == 1) {
                    document.querySelector('#ratingImg').src = './images/1star.png';
                }
                if (product.rating == 2) {
                    document.querySelector('#ratingImg').src = './images/2star.png';
                }
                if (product.rating == 3) {
                    document.querySelector('#ratingImg').src = './images/3star.png';
                }
                if (product.rating == 4) {
                    document.querySelector('#ratingImg').src = './images/4star.png';
                }
                if (product.rating == 5) {
                    document.querySelector('#ratingImg').src = './images/5star.png';
                }

                //Get the value from the array to display the corresponding product detail images
                document.querySelector('#img1-carousel-item').src = product.imgUrl1;
                document.querySelector('#img2-carousel-item').src = product.imgUrl2;
                document.querySelector('#img3-carousel-item').src = product.imgUrl3;
                document.querySelector('#img4-carousel-item').src = product.imgUrl4;
                document.querySelector('#img5-carousel-item').src = product.imgUrl5;


                // Get product id 
                let queryStr = window.location.search;
                let params = new URLSearchParams(queryStr);
                let id = params.get("id");

                // Ensure product id isnot empty or exist overall product number
                if (!id || id > products.length) {
                    return;
                }
                toys = products[id - 1];
                console.log(toys);

                //Set the initial value
                unitPrice = totalPrice = toys.price;
                document.getElementById("totalPrice").value = totalPrice;
            }
        });
    }
}
var totalPrice = 0;
var quantity = 1;

//A function to calculate the total price
function totalPriceFun() {
    var unitPrice = document.getElementById("price").innerHTML;
    getQuantity = document.getElementById("textQuantity").value;
    totalPrice = unitPrice * getQuantity;
    document.getElementById("totalPrice").value = totalPrice.toFixed(2);
}
//Add shopping cart quantity function
function plusShop() {
    quantity++;
    document.getElementById("textQuantity").value = quantity;
    if (quantity > 1) {
        document.querySelector("#buttonMinus").removeAttribute("disabled");

    }
    totalPriceFun();
}
//Reduce shopping cart quantity function
function minusShop() {
    quantity--;
    document.getElementById("textQuantity").value = quantity;
    if (quantity == 1) {
        // document.querySelector("mbuttonMinus").classList.remove("disabled");
        document.querySelector("#buttonMinus").setAttribute("disabled", "disabled")
    }
    totalPriceFun();
}