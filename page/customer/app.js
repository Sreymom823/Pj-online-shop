let homePage = document.querySelector(".homePage");
// console.log(homePage);
const toBuy = document.querySelector("#buy");
const dialog_info = document.querySelector("#dialog-info");

// let toCreateProduct = document.querySelector("#addProduct");
// console.log(toCreateProduct);

let home = document.querySelector("#home");
let search = document.querySelector("#search");
let view = document.querySelector("#view");
// console.log(homeBtn);
// console.log(viewBtn);
let page = document.querySelector(".page");
let dataShow = document.querySelector("#data-show");
let viewBtn = document.querySelector("#viewBtn");

// console.log(dataShow);
let searchBtn = document.querySelector("#searchBtn");

function hide(element){
    element.style.display = "none";
};
function show(element){
    element.style.display = "block";
};

hide(dialog_info);

home.addEventListener("click", function(){
    hide(searchBtn);
    hide(viewBtn);
    show(page);
})
search.addEventListener("click",function(){
    hide(page);
    hide(viewBtn);
    show(searchBtn);
} );


// function toSearchPage(event){
//     hide(page);
//     hide(viewBtn);
//     show(searchBtn);
// };
// function toHomePage(event){
//     hide(page);
//     hide(viewBtn);
//     show(searchBtn);
// };

// function toViewPage(event){
//     hide(page);
//     hide(searchBtn);
//     show(dataShow)

// }
// // hide(page);
// // show(page)


// // function toBuySomething(){
// //     show(dialog_info);
// // }
// function showdialogTocreate(event){
//     show(dialog_info)
// }

// viewBtn.addEventListener("click", toViewPage)
// homeBtn.addEventListener("click",toHomePage);
// searchBtn.addEventListener("click", toSearchPage);
// // toBuy.addEventListener("click", toBuySomething)
// toCreateProduct.addEventListener("click", showdialogTocreate )

// // to create and cancel 
// function toCancel (event){
//     console.log("cancel")

// }
// function toCreate (event){
//     // console.log("create")
//     let getnamePrduct = document.querySelector("#name-Product").value;
//     console.log(getnamePrduct);

//     let getPrice = document.querySelector("#price").value;
//     console.log(getPrice);

//     let getColors = document.querySelector("#color").value;
//     console.log(getColors);

//     let getSize = document.querySelector("#size").value;
//     console.log(getSize);

//     let getpurches = document.querySelector("#purches").value;
//     console.log(getpurches);
    
//     let getimg = document.querySelector("#image").value;
//     console.log(getimg)
// }
// let cancelBtn = document.querySelector("#cancel");
// let createBtn = document.querySelector("#create");

// cancelBtn.addEventListener("click", toCancel)
// createBtn.addEventListener("click", toCreate)
// console.log(cancelBtn);
// console.log(createBtn);