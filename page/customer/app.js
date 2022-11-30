let homePage = document.querySelector(".homePage");
// console.log(homePage);
let toBuy = document.querySelector("#buy");

let toCancel = document.querySelector("#cancels");
let order = document.querySelector("#order");
let dialog_buy = document.querySelector("#dialog-buy");
let customerInfo = [];

let home = document.querySelector("#home");
let search = document.querySelector("#search");
let view = document.querySelector("#view");

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

hide(dialog_buy);

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
view.addEventListener("click", function(){
    hide(page);
    hide(searchBtn);
    show(viewBtn);
})

toBuy.addEventListener("click", function(){
    show(dialog_buy);
})
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

let information = [
    {
        nameProduct:"T-shirt",
        image:"/img/T-shirt1.webp",
        Price:"$49",
        
    },
    {
        nameProduct:"Suit",
        image:"/img/suit3.jpg",
        Price:"$15",

    },
    {
        nameProduct:"Suit",
        image:"/img/duit4.png",
        Price:"$15",

    },
    {
        nameProduct:"T-shirt",
        image:"/img/T-shirt1.webp",
        Price:"$25",

    },
    {
        nameProduct:"Dress",
        image:"/img/dress1.webp",
        Price:"$36",

    },
    {
        nameProduct:"Suit",
        image:"/img/suit2.webp",
        Price:"$15",

    },
    {
        nameProduct:"Dress",
        image:"/img/dress2.webp",
        Price:"$15",

    },
    {
        nameProduct:"Suit",
        image:"/img/suit1.jpg",
        Price:"$15",

    },
    {
        nameProduct:"Dress",
        image:"/img/dress2.webp",
        Price:"$15",

    },
];

//  LOCAL STORAGE ---------------------------------------------------------
function saveInformation() {
    localStorage.setItem("information", JSON.stringify(information));
} 
function loadInformation() {
    let infoStorage = JSON.parse(localStorage.getItem("information"));
    if (infoStorage !== null) {
        information = infoStorage;
    }
}
function rederProduct (event){  
    // loadInformation();
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
        groupCard.id = "groupCard";
        groupCard.dataset.index = index
        // console.log(groupCard[i])
        
        let img=document.createElement("div");
        img.id = "img "
    
        let imgs = document.createElement("img");
        imgs.style.height = "350px"
        imgs.src =  informations.image ;
        
        let text = document.createElement("h1");
        text.textContent = informations.nameProduct;

        let btn = document.createElement("button");
        btn.id = "forPrice"; 
        btn.style.width = "100%";
        btn.style.textAlign = "center";


        btn.textContent = informations.Price ;
        // + ": " + informations.Price ;
        let icon = document.createElement("div");
        icon.id = "icon";
    
        let imgStar = document.createElement("img");
        imgStar.className = "star";
        imgStar.src = "/img/star.webp" ;
        imgStar.style.width = "15%"
    
    
        // let imgEdit = document.createElement("img");
        // imgEdit.className = "edite";
        // imgEdit.src = "/img/edite.png";
        // imgEdit.style.width ="30px" ;
        // imgEdit.style.height ="35px" ;
    
        icon.appendChild(imgStar);
        icon.appendChild(imgStar);

        img.appendChild(imgs);
        img.appendChild(text);
        img.appendChild(btn);
        groupCard.appendChild(img);
        groupCard.appendChild(icon);
        allCard.appendChild(groupCard);
    }
    namePro.appendChild(header);
    namePro.appendChild(allCard);
    header.appendChild(btns);
    // }


    Data.appendChild(namePro);
    // container.appendChild(Data);
    saveInformation();
    // loadInformation();

}
rederProduct();





/* to search title */

let btnSearch = document.querySelector("#search-input")
function searchBar(){
    let word = btnSearch.value.toUpperCase;
    let wordInCard = document.querySelector("groupCard").ElementChild[1].toUpperCase;
    if (word.indexOf (information.length) >-1){
        wordInCard.style.display = "none";
    }else {
        wordInCard.style.display = "Block";

    }

}
// function myFunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }













/* create product to show */
// let information = [
//     {
//         nameProduct:"T-shirt",
//         image:"/img/T-shirt1.webp",
//         Price:"$49",
        
//     },
//     {
//         nameProduct:"Suit",
//         image:"/img/suit3.jpg",
//         Price:"$15",

//     },
//     {
//         nameProduct:"Suit",
//         image:"/img/duit4.png",
//         Price:"$15",

//     },
//     {
//         nameProduct:"T-shirt",
//         image:"/img/T-shirt1.webp",
//         Price:"$25",

//     },
//     {
//         nameProduct:"Dress",
//         image:"/img/dress1.webp",
//         Price:"$36",

//     },
//     {
//         nameProduct:"Suit",
//         image:"/img/suit2.webp",
//         Price:"$15",

//     },
//     {
//         nameProduct:"Dress",
//         image:"/img/dress2.webp",
//         Price:"$15",

//     },
//     {
//         nameProduct:"Suit",
//         image:"/img/suit1.jpg",
//         Price:"$15",

//     },
//     {
//         nameProduct:"Dress",
//         image:"/img/dress2.webp",
//         Price:"$15",

//     },
// ];

// //  LOCAL STORAGE ---------------------------------------------------------
// function saveInformation() {
//     localStorage.setItem("information", JSON.stringify(information));
// } 
// function loadInformation() {
//     let infoStorage = JSON.parse(localStorage.getItem("information"));
//     if (infoStorage !== null) {
//         information = infoStorage;
//     }
// }
// function rederProduct (event){  
//     // loadInformation();
//     let Data = document.querySelector("#data");
//     Data.remove();
    
//     Data = document.createElement("div");
//     Data.id = "data";
//     container.appendChild(Data);
    

//     let namePro = document.createElement("div");
//     namePro.id = "Tshirt";

//     let header = document.createElement("div");
//     header.id= "header";

//     let btns = document.createElement("button");
//     btns.textContent = "All Product"
  
//     let allCard = document.createElement("div");
//     allCard.id ="allCard";

//     for (let index=0; index < information.length; index++){   
//         let informations=information[index]
//         let groupCard = document.createElement("div");
//         groupCard.id = "groupCard";
//         groupCard.dataset.index = index
//         // console.log(groupCard[i])
        
//         let img=document.createElement("div");
//         img.id = "img "
    
//         let imgs = document.createElement("img");
//         imgs.style.height = "350px"
//         imgs.src =  informations.image ;
        
//         let text = document.createElement("h1");
//         text.textContent = informations.nameProduct;

//         let btn = document.createElement("button");
//         btn.id = "forPrice"; 
//         btn.style.width = "100%";
//         btn.style.textAlign = "center";


//         btn.textContent = informations.Price ;
//         // + ": " + informations.Price ;
//         let icon = document.createElement("div");
//         icon.id = "icon";
    
//         let imgTrush = document.createElement("img");
//         imgTrush.className = "trush";
//         imgTrush.src = "/img/trash.png" ;
//         imgTrush.addEventListener("click", deleteCard)
    
//         let imgEdit = document.createElement("img");
//         imgEdit.className = "edite";
//         imgEdit.src = "/img/edite.png";
//         imgEdit.style.width ="30px" ;
//         imgEdit.style.height ="35px" ;
    
//         icon.appendChild(imgTrush);
//         icon.appendChild(imgEdit);

//         img.appendChild(imgs);
//         img.appendChild(text);
//         img.appendChild(btn);
//         groupCard.appendChild(img);
//         groupCard.appendChild(icon);
//         allCard.appendChild(groupCard);
//     }
//     namePro.appendChild(header);
//     namePro.appendChild(allCard);
//     header.appendChild(btns);
//     // }


//     Data.appendChild(namePro);
//     // container.appendChild(Data);
//     hide(dialog_info);
//     saveInformation();
//     // loadInformation();

// }
// rederProduct()

// function toCreate (event){
//     let getPrice = document.querySelector("#price").value;
//     let getImg = document.querySelector("#image").value;
//     let getnamePrduct = document.querySelector("#name-Product").value;
//     // let informations=information
//     // getImg.src = informations[i].image


//     let newInformation = {
//         nameProduct:getnamePrduct,
//         img : getImg,
//         Price:getPrice,
//     };

    
//     information.push(newInformation);
//     hide(dialog_info);;
//     loadProduct() 
//     console.log(information);
//     // clearDialog();
//     saveInformation();
//     // loadInformation();

// }
