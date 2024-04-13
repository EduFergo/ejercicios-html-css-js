const timer = document.querySelector(`.timer`);

const hoursUp = document.querySelector(`.hours .up`);
const hoursDown = document.querySelector(`.hours .down`);

const minutesUp = document.querySelector(`.minutes .up`);
const minutesDown = document.querySelector(`.minutes .down`);

const secondsUp = document.querySelector(`.seconds .up`);
const secondsDown = document.querySelector(`.seconds .down`);

const play_btn = document.querySelector(`.play`);
const stop_btn = document.querySelector(`.stop`);
const refresh_btn = document.querySelector(`refresh`);

let hours = 0;
let minutes = 0;
let seconds = 0;

function updateTimer(){
    timer.textContent = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
    console.log();
}

function addHour(){
    if(hours==99){
        hours=0;       
    }else{
        hours++;
    }  
    updateTimer();
}

function subsHour(){
    if(hours==0){
        hours=99;       
    }else{
        hours--;
    }  
    updateTimer();
}

hoursUp.addEventListener('click', addHour);
hoursDown.addEventListener("click", subsHour);

function addMinute(){
    if(minutes==59){
        minutes=0;       
    }else{
        minutes++;
    }  
    updateTimer();
}

function subsMinute(){
    if(minutes==0){
        minutes=59;       
    }else{
        minutes--;
    }  
    updateTimer();
}

minutesUp.addEventListener('click', addMinute);
minutesDown.addEventListener("click", subsMinute);

function addSecond(){
    if(seconds==59){
        seconds=0;       
    }else{
        seconds++;
    }  
    updateTimer();
}

function subsSecond(){
    if(seconds==0){
        seconds=59;       
    }else{
        seconds--;
    }  
    updateTimer();
}

secondsUp.addEventListener('click', addSecond);
secondsDown.addEventListener("click", subsSecond);

