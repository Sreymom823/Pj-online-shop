let homePage = document.querySelector(".homePage");
let toBuy = document.querySelector("#buy");

let toCancel = document.querySelector("#cancels");
let order = document.querySelector("#order");
let dialog_buy = document.querySelector("#dialog-buy");
let customerInfo = [];

let home = document.querySelector("#home");
let view = document.querySelector("#view");

let page = document.querySelector(".page");
let dataShow = document.querySelector("#data-show");
let viewBtn = document.querySelector("#viewBtn");

let searchBtn = document.querySelector("#searchBtn");

function hide(element){
    element.style.display = "none";
};
function show(element){
    element.style.display = "block";
};

hide(dialog_buy);
// hide(viewBtn);

home.addEventListener("click", function(){
    hide(searchBtn);
    hide(viewBtn);
    show(page);
})
view.addEventListener("click", function(){
    hide(page);
    show(searchBtn);
    show(viewBtn);
})

// toBuy.addEventListener("click", function(){
//     show(dialog_buy);
// })
toCancel.addEventListener("click", function(){
    hide(dialog_buy);
})
order.addEventListener("click", function(){
    let NameProducts= document.querySelector("#name-Product").value;
    let Phones =document.querySelector("#email").value ;
    let Emails =document.querySelector("#p-number").value;
    let Locations =document.querySelector("#location").value;
    let Purchess =document.querySelector("#purches").value;
    console.log(NameProducts)
    getInfor ={
        NameProduct: NameProducts,
        Phone : Phones,
        Email : Emails,
        Location :Locations,
        Purches :Purchess,
    }
    customerInfo.push(getInfor);
    hide(dialog_buy);
    console.log(customerInfo);
});

let information = JSON.parse(localStorage.getItem("information"));
function rederProduct (event){  
    let Data = document.querySelector("#data");
    Data.remove();
    
    Data = document.createElement("div");
    Data.id = "data";
    container.appendChild(Data);
    

    let namePro = document.createElement("div");
    namePro.id = "Tshirt";

    let header = document.createElement("div");
    header.id= "header";

    let btns = document.createElement("button");
    btns.textContent = "All Product"
  
    let allCard = document.createElement("div");
    allCard.id ="allCard";

    for (let index=0; index < information.length; index++){   
        let informations=information[index]
        let groupCard = document.createElement("div");
        groupCard.className = "groupCard";
        groupCard.dataset.index = index;
        // groupCard.textContent = informations.nameProduct ;
        let title = document.createElement("h4");
        title.textContent = informations.nameProduct
              // console.log(groupCard[i])
 
        let img=document.createElement("div");
        img.id = "img "
    
        let imgs = document.createElement("img");
        // imgs.style.height = "350px"
        imgs.style.width = "100%"
        
        imgs.src =  informations.image ;


        let btn = document.createElement("button");
        btn.id = "forPrice"; 
        btn.style.width = "100%";
        // btn.style.textAlign = "center";

        btn.textContent +="Price: " +informations.Price ;
        let icon = document.createElement("div");
        icon.id = "icon";
    
        let imgStar = document.createElement("img");
        imgStar.className = "star";
        imgStar.src = "/img/star.webp" ;
        imgStar.style.width = "15%"
        imgStar.style.cursor = "pointer";

    
    
        let imgShop = document.createElement("img");
        imgShop.className = "shop";
        imgShop.src = "/img/shop.png";
        imgShop.style.width ="30px" ;
        imgShop.style.height ="35px" ;
        imgShop.style.cursor = "pointer";
        imgShop.addEventListener("click", function(){
            show(dialog_buy);
        })
    
        icon.appendChild(imgStar);
        icon.appendChild(imgShop);

        img.appendChild(imgs);
        img.appendChild(btn);
        groupCard.append(title);
        groupCard.appendChild(img);
        groupCard.appendChild(icon);
        allCard.appendChild(groupCard);
    }
    namePro.appendChild(header);
    namePro.appendChild(allCard);
    header.appendChild(btns);


    Data.appendChild(namePro);
    // container.appendChild(Data);
    // saveInformation();
    // loadInformation();

}
rederProduct();

/* to search title */
let allCards = document.querySelector("#allCard");
// console.log(allCards);

let btnSearch = document.querySelector("#search-input");
btnSearch.addEventListener("keyup", searchBar);

function searchBar(){
    let wordSearch = (btnSearch.value.toLocaleLowerCase());
    let myCard = document.querySelectorAll(".groupCard");

    console.log(wordSearch);
    for (let i = 0; i < myCard.length; i++){
        let valueCard = myCard[i];
        let text = valueCard.firstElementChild.textContent.toLocaleLowerCase();
        console.log(text)
        if (text.includes(wordSearch)){
            valueCard.style.display = "block";
        }else {
            valueCard.style.display = "none";
        }  
    }
    // console.log(text)
}


// function searchBar(){
//     let btnSearch = document.querySelector("#search-input").value.toLowerCase();
//     // let allCard  = document.querySelectorAll("#allCard");
//     let card = document.querySelectorAll(".groupCard");
//     // let name = document.getElementsByTagName('h4');

//     // for (var i = 0; i < name.length; i++ ){
//     //     let number = card.getElementsByTagName('h4')[0];
//     //     if (number){
//     //         let value = number.textContent || number.innerHTML;
//     //         if(value.toLowerCase().indexOf(btnSearch) >-1){
//     //             card.style.display = "";
//     //         }else{
//     //             card.style.display = "none"
//     //         }
//     //         console.log(value)
            
//     //     }
//     // }

// }












function createDatatoshow(){
    let page = document.querySelector(".page");


    let gethomePage = document.querySelector(".homePage");
    gethomePage.remove();
    gethomePage =document.createElement("div");
    gethomePage.className = "homePage";

    for (let index=0; index < information.length; index++){   
        let informations=information[index]


        let showImg = document.createElement("div")
        showImg.className = "img";
        let myImg = document.createElement("img");
        myImg.src = informations.image;
        myImg.style.width = "400px";
        // myImg.style.height = "200px";

        showImg.appendChild(myImg);

        let formInfor = document.createElement("div");
        formInfor.className = "form-info";

        let product_name = document.createElement("p");
        product_name.textContent = "Product Name: ";
        let createSpanPN = document.createElement("span");
        createSpanPN.id = "product-nameGet";
        createSpanPN.textContent = informations.nameProduct;
        product_name.appendChild(createSpanPN);

        let createPrices = document.createElement("p");
        createPrices.textContent = "Price: ";
        let createSpanP = document.createElement("span");
        createSpanP.id = "priceGet";
        createSpanP.textContent = informations.Price;
        createPrices.appendChild(createSpanP);

        let createColor= document.createElement("p");
        createColor.textContent = "Color: ";
        let createSpanC = document.createElement("span");
        createSpanC.id ="colorGet";
        createSpanC.textContent = informations.Color;
        createColor.appendChild(createSpanC);

        let createSize = document.createElement("p");
        createSize.textContent = "Size: ";
        let createSpanS = document.createElement("span");
        createSpanS.id = "sizeGet";
        createSpanS.textContent = informations.Size;
        createSize.appendChild(createSpanS);

        let createPurches = document.createElement("p");
        createPurches.textContent = "Product Name: ";
        let createSpanPur = document.createElement("span");
        createSpanPur.id = "purchesGet";
        createSpanPur.textContent = informations.Purches;
        createPurches.appendChild(createSpanPur);

        let createBtnBuy = document.createElement("button");
        createBtnBuy.id = "buy";
        createBtnBuy.textContent = "Buy";
        createBtnBuy.addEventListener("click",  function(){
            show(dialog_buy);
        })
        
        formInfor.appendChild(product_name);
        formInfor.appendChild(createPrices);
        formInfor.appendChild(createColor);
        formInfor.appendChild(createSize);
        formInfor.appendChild(createPurches);
        formInfor.appendChild(createBtnBuy);

        gethomePage.appendChild(showImg);
        gethomePage.appendChild(formInfor)
        // console.log(gethomePage)
    }
    page.appendChild(gethomePage);
    // console.log(page);
}
createDatatoshow()
