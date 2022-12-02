let information = [
    {
        nameProduct:"T-shirt",
        image:"/img/T-shirt1.webp",
        Price:"$49",
        Color:"orange",
        Size: "M",
        Purches: 1,
        
        
    },
    {
        nameProduct:"Suit",
        image:"/img/suit3.jpg",
        Price:"$15",
        Color:"orange",
        Size: "M",
        Purches: 1,

    },
    {
        nameProduct:"T-shirt",
        image:"/img/T-shirt1.webp",
        Price:"$25",
        Color:"orange",
        Size: "M",
        Purches: 1,

    },
    {
        nameProduct:"Dress",
        image:"/img/dress1.webp",
        Price:"$36",
        Color:"orange",
        Size: "M",
        Purches: 1,

    },
    {
        nameProduct:"Suit",
        image:"/img/suit2.webp",
        Price:"$15",
        Color:"orange",
        Size: "M",
        Purches: 1,

    },
    {
        nameProduct:"Dress",
        image:"/img/dress2.webp",
        Price:"$15",
        Color:"orange",
        Size: "M",
        Purches: 1,

    },
    {
        nameProduct:"Suit",
        image:"/img/suit1.jpg",
        Price:"$15",
        Color:"orange",
        Size: "M",
        Purches: 1,

    },
    {
        nameProduct:"Dress",
        image:"/img/dress2.webp",
        Price:"$15",
        Color:"orange",
        Size: "M",
        Purches: 1,

    },
];
let lenIfor = information.length;

let toCreateProduct = document.querySelector("#addProduct");
let container = document.querySelector("#container");
// console.log(toCreateProduct);
let toEdite = document.querySelector(".edite");
let cancelBtn = document.querySelector("#cancel");
let createBtn = document.querySelector("#create");
let dialog_info = document.querySelector("#dialog-info");

// console.log(dialog_info)

function hide(element){
    element.style.display = "none";
};    
function show(element){
    element.style.display = "block";
};    
// show(dialog)

// hide(dialog_info);

function showdialogTocreate(){
    show(dialog_info)
    lenIfor = index
}    
toCreateProduct.addEventListener("click",showdialogTocreate )

function clearDialog(){
    let getnamePrduct = document.querySelector("#name-Product");
    getnamePrduct.textContent = "";
    let getPrice = document.querySelector("#price");
    getPrice.textContent = "";
}    

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
        groupCard.dataset.index = index;
        groupCard.style.color = "teal";
        groupCard.style.fontWeight = "bold";
        groupCard.style.fontSize = "20px";
        
        console.log(groupCard)
        
        let title = document.createElement("h4");
        title.textContent = informations.nameProduct
        // let title = dco
        
        let img=document.createElement("div");
        img.id = "img "
    
        let imgs = document.createElement("img");
        // imgs.style.height = "350px"
        imgs.style.width = "100%"
        imgs.src =  informations.image ;
        
        // let text = document.createElement("h1");
        // text.textContent = informations.nameProduct;

        let btn = document.createElement("button");
        btn.id = "forPrice"; 
        btn.style.width = "100%";
        btn.style.textAlign = "center";


        btn.textContent = informations.Price ;
        // + ": " + informations.Price ;
        let icon = document.createElement("div");
        icon.id = "icon";
    
        let imgTrush = document.createElement("img");
        imgTrush.className = "trush";
        imgTrush.src = "/img/trash.png" ;
        imgTrush.addEventListener("click", deleteCard)
    
        let imgEdit = document.createElement("img");
        imgEdit.className = "edite";
        imgEdit.src = "/img/edite.png";
        imgEdit.style.width ="30px" ;
        imgEdit.style.height ="35px" ;
        imgEdit.addEventListener("click", toEditeProduct);
    
        icon.appendChild(imgTrush);
        icon.appendChild(imgEdit);

        img.appendChild(imgs);
        img.appendChild(btn);
        groupCard.appendChild(title)
        groupCard.appendChild(img);
        groupCard.appendChild(icon);
        allCard.appendChild(groupCard);
    }
    namePro.appendChild(header);
    namePro.appendChild(allCard);
    header.appendChild(btns);
    // }
    Data.appendChild(namePro);

    hide(dialog_info);
    // saveInformation();
}

function toCreates (event){
    let getPrice = document.querySelector("#price").value;
    let getImg = document.querySelector("#image").value;
    let getnamePrduct = document.querySelector("#name-Product").value;
    let  getColors= document.querySelector("#color").value;
    let getSize = document.querySelector("#size").value;
    let getPurches = document.querySelector("#purches").value;

    let newInformation = {
        nameProduct:getnamePrduct,
        image : getImg,
        Price:getPrice,
        Color:getColors,
        Size: getSize,
        Purches: getPurches,
    }
    information.splice(lenIfor,0,newInformation);
    hide(dialog_info);
    // loadProduct(); 
    // console.log(information);
    saveInformation();
    rederProduct();
}
createBtn.addEventListener("click", toCreates);

// console.log(createBtn);
function deleteCard(event) {
    let index = event.target.parentElement.parentElement.dataset.index;
    information.splice(index, 1)
    saveInformation();
    rederProduct();
}

// loadInformation();
rederProduct();



function toCancels(event){
    hide(dialog_info);
}
// cancelBtn.addEventListener("click", function(){
//     hide(dialog_info);
// });
// cancelBtn.addEventListener("click", toCancels);



let storeEditInformation = null;
function toEditeProduct(event){
    createBtn = document.querySelector("#create").textContent = "Edit";
    let index = event.target.parentElement.parentElement.dataset.index;
    let informations=information[index]
    index = lenIfor
    document.querySelector("#name-Product").value = informations.nameProduct;
    document.querySelector("#price").value = informations.Price;
    document.querySelector("#image").value = informations.image;
    information.splice(informations,1);
    show(dialog_info);
}


 