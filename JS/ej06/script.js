const add_btn = document.getElementById("add");
const dlt_btn = document.getElementById("delete");

const img_container = document.querySelector(".img-container");

const img_src = [
    "./img/right-arm.jpg",
    "./img/exodia.jpg",
    "./img/left-arm.jpg",
    "./img/right-leg.jpg",
    "./img/left-leg.jpg"
];

add_btn.addEventListener("click", add_img);
dlt_btn.addEventListener("click", dlt_img);


function add_img(){
    if(img_container.children.length<5){
        const img = document.createElement("img");
        img.src = img_src[img_container.children.length];
        img_container.appendChild(img);
    }
}

function dlt_img(){
    img_container.removeChild(img_container.lastElementChild);   
}