const box = document.getElementById("contenido");
const list = ["blue", "red", "yellow", "green", "pink", "purple"];
let i = 0;

function changeColor() {
    box.style.backgroundColor = list[i];
    i++;
    if (i === list.length) {
        i = 0;
    }
}

const setChangeColor = setInterval(changeColor, 1000);