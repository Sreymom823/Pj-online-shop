let toCreateProduct = document.querySelector("#addProduct");
const container = document.querySelector("#container")
// console.log(toCreateProduct);

const dialog_info = document.querySelector("#dialog-info");
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



// function clearDialog(){
//     let getnamePrduct = document.querySelector("#name-Product");
//     getnamePrduct.textContent = "";
//     let getPrice = document.querySelector("#price");
//     getPrice.textContent = "";
//     let getColors = document.querySelector("#color");
//     getColors.textContent = "";
//     let getSize = document.querySelector("#size");
//     getSize.textContent = "";
//     let getpurches = document.querySelector("#purches");
//     getpurches.textContent = "";
//     let getimg = document.querySelector("#image");
//     getimg.textContent = "";
// }

// let information = [
//     {
//         img:"/img/T-shirt.webp",
//         Price:"$49",
        
//     },
//     {
//         img:"/img/T-shirt.webp",
//         Price:"$49",

//     },
//     {
//         img:"/img/T-shirt.webp",
//         Price:"$49",

//     },
// ] ;
// function toCreate (event){
//     let getnamePrduct = document.querySelector("#name-Product").value;
//     let getPrice = document.querySelector("#price").value;
//     // let getColors = document.querySelector("#color").value;
//     // let getSize = document.querySelector("#size").value;
//     // let getpurches = document.querySelector("#purches").value; 
//     let getimg = document.querySelector("#image").value;
//     // for (let index = 0; index < foods.length; index++) {
//     //     let food = information[index];

//     let Data = document.querySelector("#data");

//     let namePro = document.createElement("div");
//     namePro.id = "Tshirt";
//     Data.appendChild(namePro);

//     let header = document.createElement("div");
//     header.id= "header";


//     let btns = document.createElement("button");
//     btns.textContent = getnamePrduct;
  

//     let allCard = document.createElement("div");
//     allCard.id ="allCard";

//     for (let i =0 ;i < information.length; i++){   
//         let informations=information[i]
//         let groupCard = document.createElement("div");
//         groupCard.id = "groupCard";
//         // groupCard.dataset.i = i;
        
//         let img=document.createElement("div");
//         img.id = "img "
    
//         let imgs = document.createElement("img");
//         imgs.src = informations.img;
    
//         let btn = document.createElement("button");
//         btn.id = "forPrice"; 
//         btn.textContent = informations.Price;
    
//         let icon = document.createElement("div");
//         icon.id = "icon";
    
//         let imgTrush = document.createElement("img");
//         imgTrush.className = "trush";
//         imgTrush.src = "/img/trash.png" ;
    
//         let imgEdit = document.createElement("img");
//         imgEdit.className = "edite";
//         imgEdit.src = "/img/edite.png";
//         imgEdit.style.width ="30px" ;
//         imgEdit.style.height ="35px" ;
    
//         img.appendChild(imgs);
//         img.appendChild(btn);
//         icon.appendChild(imgTrush);
//         icon.appendChild(imgEdit);
//         groupCard.appendChild(icon);
//         groupCard.appendChild(img);
//         allCard.appendChild(groupCard);
//     }
//     namePro.appendChild(allCard);
//     namePro.appendChild(header);
//     header.appendChild(btns);
//     // }


//     Data.appendChild(namePro);
//     clearDialog()
//     hide(dialog_info);

// }

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

function loadProduct (event){
    
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

    for (let i =0 ;i < (information.length); i++){   
        let informations=information[i]
        let groupCard = document.createElement("div");
        groupCard.id = "groupCard";
        
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
        console.log(btn)
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
    // container.appendChild(Data);
    hide(dialog_info);

}
loadProduct()

function toCreate (event){
    let getPrice = document.querySelector("#price").value;
    let getImg = document.querySelector("#image").value;
    let getnamePrduct = document.querySelector("#name-Product").value;
    // let informations=information
    // getImg.src = informations[i].image


    let newInformation = {
        nameProduct:getnamePrduct,
        img : getImg,
        // image: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=pexels-pixabay-247502.lpg&fm=jpg",
        Price:getPrice,
    }

    
    information.push(newInformation)
    hide(dialog_info);
    loadProduct() 
    console.log(information)
    clearDialog()

}

function deleteCard(event) {
    if (event.target.className == "trush"){
      event.target.parentElement.parentElement.remove()
    }
}

let toEdite = document.querySelector(".edite");

let cancelBtn = document.querySelector("#cancel");
let createBtn = document.querySelector("#create");

cancelBtn.addEventListener("click", function(){
    hide(dialog_info)
})
createBtn.addEventListener("click", toCreate)
