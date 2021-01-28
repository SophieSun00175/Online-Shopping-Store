const productContainer = document.querySelector(".productcontainer"); //productContainer: the dive where shows the products
const searchBar = document.getElementById("searchbar"); //search input not button
let search_item = window.location.search.split('text=')[1]; //get keyword

//function for no keyword
function preloader() {
    displayProducts(products);
};

// decide what to show according to whether there is search keyword
if (search_item.length = 0) {
    window.addEventListener("load", preloader);
} else {
    let filteredProducts = searchProduct(search_item, products);
    displayProducts(filteredProducts);
}

//show the related products while user inputting, rather than finishing and clicking search button
searchBar.addEventListener("keyup", handleSearch);

function handleSearch(e) {
    let userInput = e.target.value;
    //console.log(userInput);
    let filteredProducts = searchProduct(userInput, products);
    displayProducts(filteredProducts);
}

//search function to loop everything in the product array
function searchProduct(value, data) {
    let filteredData = [];
    for (let i = 0; i < data.length; i++) {
        value = value.toLowerCase();
        let heading = data[i].headingContent.toLowerCase();
        let price = data[i].price.toLowerCase();
        if (heading.includes(value) || price.includes(value)) {
            filteredData.push(data[i]);
        }
    }
    return filteredData;
}

//display function
function displayProducts(data) {
    productContainer.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let productCard = `<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 imgbox">
                                <div class="card">
                                    <a href="./product_details.html?id=${data[i].id}"><img src="${data[i].imgUrl}" class="card-img-top" alt="${data[i].imgAlt}"></a>
                                    <div class="card-body">
                                        <a href="./product_details.html?id=${data[i].id}"><p class="card-text">${data[i].headingContent}</p></a>
                                        <img src="${data[i].stars}" alt="" width="30%">
                                        <p>$${data[i].price}</p>
                                    </div>
                                </div>
                            </div>`;
        productContainer.innerHTML += productCard;
    }
}


// get sort buttons, enable sort events
let sortBtns = document.querySelectorAll(".sort .dropdown-item");

for (let sortBtn of sortBtns) {
    sortBtn.addEventListener("click", handleSort);
}

function handleSort(e) {
    let sortBtnLabel = e.target.textContent;
    if (sortBtnLabel == "Price low to high") {
        products.sort(function (a, b) {
            return a.price - b.price;
        });
        displayProducts(products);
    }
    if (sortBtnLabel == "Price high to low") {
        products.sort(function (a, b) {
            return b.price - a.price;
        });
        displayProducts(products);
    }
}
//Select one and deselect the others
$(document).off('click', ".form-check :checkbox").on('click', ".form-check :checkbox", function () {
    var flag = $(this).prop("checked");
    $("input[type='checkbox']").prop("checked", false);
    $(this).prop("checked", flag);
});
// get filter content, enable filter events
let filterCbs = document.querySelectorAll(".filter .form-check-input");
for (let filterCb of filterCbs) {
    filterCb.addEventListener("click", handleFilter);
}

function handleFilter(e) {
    let sortFilterLabel = e.target.getAttribute('id');
    let cbData = [];
    //Perform the corresponding sort
    switch (sortFilterLabel) {
        case "defaultCheck1":
            for (let i = 0; i < products.length; i++) {
                if (products[i].price >= 0 && products[i].price < 19) {
                    cbData.push(products[i]);
                }
            }
            console.log(cbData);
            break;

        case "defaultCheck2":
            for (let i = 0; i < products.length; i++) {
                if (products[i].price >= 20 && products[i].price < 39) {
                    cbData.push(products[i]);
                }
            }
            break;

        case "defaultCheck3":
            for (let i = 0; i < products.length; i++) {
                if (products[i].price >= 40 && products[i].price < 60) {
                    cbData.push(products[i]);
                }
            }
            break;

        case "defaultCheck4":
            for (let i = 0; i < products.length; i++) {
                if (products[i].price >= 60) {
                    cbData.push(products[i]);
                }
            }
            break;
        case "defaultCheck5":
            for (let i = 0; i < products.length; i++) {
                if (products[i].rating == 5) {
                    cbData.push(products[i]);
                }
            }
            break;
        case "defaultCheck6":
            for (let i = 0; i < products.length; i++) {
                if (products[i].rating == 4) {
                    cbData.push(products[i]);
                }
            }
            break;
        case "defaultCheck7":
            for (let i = 0; i < products.length; i++) {
                if (products[i].rating == 3) {
                    cbData.push(products[i]);
                }
            }
            break;
        case "defaultCheck8":
            for (let i = 0; i < products.length; i++) {
                if (products[i].rating == 2) {
                    cbData.push(products[i]);
                }
            }
            break;
        case "defaultCheck9":
            for (let i = 0; i < products.length; i++) {
                if (products[i].rating == 1) {
                    cbData.push(products[i]);
                }
            }
            break;
    }
    displayProducts(cbData);

}