/*window.alert("welcome from first session js");
document.getElementById("dimo").innerHTML="web devolobment";
console.log("hallo from console");*/

let title = document.getElementById('title')
let price = document.getElementById('price')
let category = document.getElementById('category')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discound = document.getElementById('discound')
let total = document.getElementById('total')
let count = document.getElementById('count')
let submit = document.getElementById('submit')
let search = document.getElementById('search')



let mood = 'create';
let temp;






//get totale
function getTotal() {
    if (price.value != '') {
        let result = (+price.value + +taxes.value + +ads.value) - +discound.value

        total.innerHTML = result
        total.style.background = '#040'

    } else {
        total.innerHTML = '';
        total.style.background = '#a00d02'
    }

}

// create 
let products;
if (localStorage.productList != null) {
    products = JSON.parse(localStorage.productList)
    displayData()
} else {
    products = []
}
submit.onclick = function () {

    let product =
    {
        title: title.value,
        price: price.value,
        category: category.value,
        taxes: taxes.value,
        ads: ads.value,
        discound: discound.value,
        total: total.innerHTML,
        count: count.value,

    }

   if (title.value !='' &&price.value !='' && category.value !='' && product.count < 100 ) {
    if (mood === 'create') {
        if (product.count > 1) {
            for (let i = 0; i < product.count; i++) {
                products.push(product);
            }
        } else {
            products.push(product);
        }
    } else {
        products[temp] = product
        mood = 'create'
        submit.innerHTML = 'Create'
        count.style.display = 'block'

    }
    clearData();
   } 


    localStorage.setItem('productList', JSON.stringify(products));
    
    displayData();
    



}


// clear inputs 
function clearData() {

    // for (let i = 0; i < inputs.length; i++) {
    //     inputs[i].value = '';
    // }

    title.value = '',
        price.value = '',
        category.value = '',
        taxes.value = '',
        ads.value = '',
        discound.value = '',
        total.innerHTML = '',
        count.value = ''


}


//show data 

function displayData() {
    let table = '';

    for (var i = 0; i < products.length; i++) {
        table += `<tr>
        <td>${i+1}</td>
        <td>${products[i].title}</td>
        <td>${products[i].price}</td>
        <td>${products[i].taxes}</td>
        <td>${products[i].ads}</td>
        <td>${products[i].discound}</td>
        <td>${products[i].total}</td>
        <td>${products[i].category}</td>
        <td><button id="update" onclick="update(${i})">update</button></td>
        <td><button onclick="delateProduct(${i})" id="delete">delete</button></td>
        </tr>`;
    }
    document.getElementById('tableBody').innerHTML = table

    let btnDelete = document.getElementById('deleteAll')

    if (products.length > 0) {
        btnDelete.innerHTML = `
         
      <button id="deleteAll" onclick="delateAll()" > Delete All  ( ${products.length} )</button>
        `
    } else {
        btnDelete.innerHTML = ''
    }
}

// delete product
function delateProduct(index) {
    products.splice(index, 1);
    localStorage.setItem('productList', JSON.stringify(products))
    displayData()
}
//delete all
function delateAll() {
    localStorage.clear()
    products.splice(0);
    displayData()
}

//update prouduct
function update(i) {

    title.value = products[i].title;
    price.value = products[i].price;
    category.value = products[i].category;
    taxes.value = products[i].taxes;
    ads.value = products[i].ads;
    discound.value = products[i].discound;
    getTotal()
    count.style.display = 'none'
    submit.innerHTML = "uptade "
    mood = 'update'
    scroll({
        top: 0,
        behavior: "smooth"

    })
    temp = i;
}

function updateProduct() {
    // alert(currentIndex)
    let product =
    {
        title: title.value,
        price: price.value,
        category: category.value,
        taxes: taxes.value,
        ads: ads.value,
        discound: discound.value,
        total: total.innerHTML,
        count: count.value,

    }
    products[currentIndex] = product;
    addBtn.innerHTML = "Add Product"
    localStorage.setItem('productList', JSON.stringify(products));

}

//search
let searchMood = 'title';
function getSearchMood(id) {

    if (id == 'searchTitle') {
        searchMood = 'title';
        search.placeholder = "Search By Title"
    } else {
        searchMood = 'category'
        search.placeholder = "Search By Category"
    }
    search.focus()
    console.log(searchMood);
}


function searchData (value) {
if (searchMood=='title') {
    var table = '';

    for (var i = 0; i < products.length; i++) {
        if (products[i].title.toUpperCase().includes(value.toUpperCase()))
            table += `<tr>
            <td>${i}</td>
            <td>${products[i].title}</td>
            <td>${products[i].price}</td>
            <td>${products[i].taxes}</td>
            <td>${products[i].ads}</td>
            <td>${products[i].discound}</td>
            <td>${products[i].total}</td>
            <td>${products[i].category}</td>
            <td><button id="update" onclick="update(${i})">update</button></td>
            <td><button onclick="delateProduct(${i})" id="delete">delete</button></td>
            </tr>`;
    }

    document.getElementById('tableBody').innerHTML = table
}else{

    var table = '';

    for (var i = 0; i < products.length; i++) {
        if (products[i].category.toUpperCase().includes(value.toUpperCase()))
            table += `<tr>
            <td>${i}</td>
            <td>${products[i].title}</td>
            <td>${products[i].price}</td>
            <td>${products[i].taxes}</td>
            <td>${products[i].ads}</td>
            <td>${products[i].discound}</td>
            <td>${products[i].total}</td>
            <td>${products[i].category}</td>
            <td><button id="update" onclick="update(${i})">update</button></td>
            <td><button onclick="delateProduct(${i})" id="delete">delete</button></td>
            </tr>`;
    }

    document.getElementById('tableBody').innerHTML = table
}
   
}






















































































































// let currentIndex = 0;
// let nameAlart = document.getElementById('nameAlart')
// let priceAlart = document.getElementById('priceAlart')
// let categoryAlart = document.getElementById('categoryAlart')

// let productss = [];

// displayData()

// addBtn.onclick = function () {
//     if (addBtn.innerHTML == 'Add Product') {
//         addProduct();
//     }
//     else {
//         updateProduct();
//     }
//     displayData();
//     resetForm()

// }




// function getInfoProduct(index) {
//     currentIndex = index;


//     productNameInput.value = currentProduct.name;
//     productPriceInput.value = currentProduct.price;
//     productCategoryInput.value = currentProduct.category;
//     productDescInput.value = currentProduct.desc;
//     addBtn.innerHTML = "uptade product"
// }

// function updateProduct() {
//     alert(currentIndex)
//     var product =
//     {
//         name: productNameInput.value,
//         price: productPriceInput.value,
//         category: productCategoryInput.value,
//         desc: productDescInput.value
//     }
//     products[currentIndex] = product;
//     addBtn.innerHTML = "Add Product"
//     localStorage.setItem('productList', JSON.stringify(products));

// }





// function resetForm() {
//     for (var i = 0; i < inputs.length; i++) {
//         inputs[i].value = ''
//     }
//     productCategoryInput.classList.remove('is-valid');
//     productNameInput.classList.remove('is-valid');
//     productPriceInput.classList.remove('is-valid');

//     addBtn.disabled = 'true';
// }


// function search(searchTxt) {

//     var table = '';

//     for (var i = 0; i < products.length; i++) {
//         if (products[i].name.toUpperCase().includes(searchTxt.toUpperCase()))
//             table += `<tr>
//         <td>${products[i].name}</td>
//         <td>${products[i].price}</td>
//         <td>${products[i].category}</td>
//         <td>${products[i].desc}</td>
//         <td><button onclick="getInfoProduct(${i})" class='btn btn-outline-warning'>update</button></td>
//         <td><button onclick="delateProduct(${i})" class='btn btn-outline-danger'>delate</button></td>
//         </tr>`;
//     }


//     document.getElementById('tableBody').innerHTML = table


// }


// productCategoryInput.addEventListener("keyup", cheek)
// productPriceInput.addEventListener("keyup", cheek)
// function cheek() {

//     if (nameRejex() && priceRejex() && categoryRejex()) {
//         addBtn.removeAttribute('disabled')
//     }
//     else {
//         addBtn.disabled = 'true';

//     }
// }





// function nameRejex() {
//     var nameRejex = /^[A-Z][a-z]{2,8}$/;
//     if (nameRejex.test(productNameInput.value)) {

//         productNameInput.classList.add('is-valid');
//         productNameInput.classList.remove('is-invalid');
//         nameAlart.classList.add('d-none')
//         return true;
//     }
//     else {

//         productNameInput.classList.add('is-invalid');
//         productNameInput.classList.remove('is-valid');
//         nameAlart.classList.remove('d-none')
//         return false;
//     }
// }
// function priceRejex() {
//     var priceRejex = /^[1-9]{1,4}$/;
//     if (priceRejex.test(productPriceInput.value)) {
//         productPriceInput.classList.add('is-valid');
//         productPriceInput.classList.remove('is-invalid');
//         priceAlart.classList.add('d-none')
//         return true;
//     }
//     else {
//         productPriceInput.classList.add('is-invalid');
//         productPriceInput.classList.remove('is-valid');
//         priceAlart.classList.remove('d-none')
//         return false;
//     }
// }


// function categoryRejex() {
//     var categoryRejex = /^[A-Z][a-z]{2,8}$/;
//     if (categoryRejex.test(productCategoryInput.value)) {
//         productCategoryInput.classList.add('is-valid');
//         productCategoryInput.classList.remove('is-invalid');
//         categoryAlart.classList.add('d-none')
//         return true;
//     }
//     else {
//         productCategoryInput.classList.add('is-invalid');
//         productCategoryInput.classList.remove('is-valid');
//         categoryAlart.classList.remove('d-none')
//         return false;
//     }
// }









