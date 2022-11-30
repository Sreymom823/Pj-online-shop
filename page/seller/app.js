let toCreateProduct = document.querySelector("#addProduct");
let container = document.querySelector("#container");
// console.log(toCreateProduct);

let dialog_info = document.querySelector("#dialog-info");
// console.log(dialog_info)

function hide(element){
    element.style.display = "none";
};
function show(element){
    element.style.display = "block";
};

hide(dialog_info);

function showdialogTocreate(){
    show(dialog_info)
}

toCreateProduct.addEventListener("click",showdialogTocreate )

function clearDialog(){
    let getnamePrduct = document.querySelector("#name-Product");
    getnamePrduct.textContent = "";
    let getPrice = document.querySelector("#price");
    getPrice.textContent = "";
}

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
    
        let imgTrush = document.createElement("img");
        imgTrush.className = "trush";
        imgTrush.src = "/img/trash.png" ;
        imgTrush.addEventListener("click", deleteCard)
    
        let imgEdit = document.createElement("img");
        imgEdit.className = "edite";
        imgEdit.src = "/img/edite.png";
        imgEdit.style.width ="30px" ;
        imgEdit.style.height ="35px" ;
        imgEdit.addEventListener("click", toEiteProduct);
    
        icon.appendChild(imgTrush);
        icon.appendChild(imgEdit);

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

    hide(dialog_info);
    // saveInformation();


}

function toCreate (event){
    let getPrice = document.querySelector("#price").value;
    let getImg = document.querySelector("#image").value;
    let getnamePrduct = document.querySelector("#name-Product").value;

    let newInformation = {
        nameProduct:getnamePrduct,
        image : getImg,
        Price:getPrice,
    }
    information.push(newInformation);
    hide(dialog_info);
    // loadProduct(); 
    console.log(information);
    saveInformation();
    rederProduct();

}

function deleteCard(event) {

    let index = event.target.parentElement.parentElement.dataset.index;
    information.splice(index, 1)

    saveInformation();
    rederProduct();
}

// loadInformation();
rederProduct();
let toEdite = document.querySelector(".edite");
let cancelBtn = document.querySelector("#cancel");
let createBtn = document.querySelector("#create");

cancelBtn.addEventListener("click", function(){
    hide(dialog_info);
});
createBtn.addEventListener("click", toCreate);


storeEditInformation = information.length;
function toEiteProduct(event){
    createBtn = document.querySelector("#create").textContent = "Edit";
    let index = event.target.parentElement.parentElement.dataset.index;
    let informations=information[index]
    storeEditInformation = index;
    document.querySelector("#name-Product").value = informations.nameProduct;
    document.querySelector("#price").value = informations.Price;
    document.querySelector("#image").value = informations.image;
    // saveInformation();
    information.splice(index,1);
    show(dialog_info);
}

 