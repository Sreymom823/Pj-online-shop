let toCreateProduct = document.querySelector("#addProduct");
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

let information = [
    {
        // nameProduct:"Jeans",
        image:"/img/T-shirt1.webp",
        Price:"$49",
        
    },
    {   
        // nameProduct:"Jeans",
        image:"/img/T-shirt1.webp",
        Price:"$69",

    },
    {
        // nameProduct:"Jeans",
        image:"/img/T-shirt1.webp",
        Price:"$19",

    },
    {
        // nameProduct:"Jeans",
        image:"/img/T-shirt1.webp",
        Price:"$19",

    },
    {
        // nameProduct:"Jeans",
        image:"/img/T-shirt1.webp",
        Price:"$19",

    },
] ;
console.log(information.img)
function create (event){
    let getnamePrduct = document.querySelector("#name-Product").value;
    let getPrice = document.querySelector("#price").value;
    // let getColors = document.querySelector("#color").value;
    // let getSize = document.querySelector("#size").value;
    // let getpurches = document.querySelector("#purches").value; 
    let getimg = document.querySelector("#image").value;
    // for (let index = 0; index < foods.length; index++) {
    //     let food = information[index];

    let Data = document.querySelector("#data");

    let namePro = document.createElement("div");
    namePro.id = "Tshirt";
    // Data.appendChild(namePro);

    let header = document.createElement("div");
    header.id= "header";
    // header.textContent = "Jeans"


    let btns = document.createElement("button");
    btns.textContent = getnamePrduct;
    btns.textContent = "T-shirt"
  

    let allCard = document.createElement("div");
    allCard.id ="allCard";

    for (let i =0 ;i < (information.length); i++){   
        let informations=information[i]
        let groupCard = document.createElement("div");
        groupCard.id = "groupCard";
        // groupCard.dataset.i = i;
        
        let img=document.createElement("div");
        img.id = "img "
    
        let imgs = document.createElement("img");
        imgs.style.height = "350px"
        imgs.src =  informations.image ;


    
        let btn = document.createElement("button");
        btn.id = "forPrice"; 
        btn.style.width = "100%"
        btn.textContent = informations.Price;
    
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
        img.appendChild(btn);
        console.log(img)
        groupCard.appendChild(img);
        groupCard.appendChild(icon);
        allCard.appendChild(groupCard);
    }
    namePro.appendChild(header);
    namePro.appendChild(allCard);
    header.appendChild(btns);
    // }


    Data.appendChild(namePro);
    clearDialog()
    hide(dialog_info);

}
create()

// toCreate(information)

function toCancel(){
    hide(dialog_info)
}

function deleteCard(event) {
    // 1- Check the event if raised on the button delete
    if (event.target.className == "trush"){
      event.target.parentElement.parentElement.remove()
    }
   //  2  if yes, get the parent and remove it from the  bookList
}

// let toDelete = document.querySelector(".trush")
// console.log(toDelete);

let toEdite = document.querySelector(".edite");

toDelete.addEventListener("click", deleteCard)


let cancelBtn = document.querySelector("#cancel");
let createBtn = document.querySelector("#create");

cancelBtn.addEventListener("click", toCancel)
// createBtn.addEventListener("click", toCreate)