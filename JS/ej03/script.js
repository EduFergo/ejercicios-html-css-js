const now = document.getElementById(`contenido`);

function setTime(){
    const date_now = new Date();
    const hours = date_now.getHours();
    const minutes = date_now.getMinutes();
    const seconds =  date_now.getSeconds();

    const time = `${hours}:${minutes}:${seconds}`;

    now.innerHTML = time;
}

const updateTime= setInterval(setTime, 1000);