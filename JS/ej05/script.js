const timer = document.querySelector(`.timer`);

const hoursUp = document.querySelector(`.hours .up`);
const hoursDown = document.querySelector(`.hours .down`);

const minutesUp = document.querySelector(`.minutes .up`);
const minutesDown = document.querySelector(`.minutes .down`);

const secondsUp = document.querySelector(`.seconds .up`);
const secondsDown = document.querySelector(`.seconds .down`);

const play_btn = document.querySelector(`.play`);
const stop_btn = document.querySelector(`.stop`);
const refresh_btn = document.querySelector(`.refresh`);

const switch_btn = document.querySelector(`.switch`);

let hours=0;
let minutes=0;
let seconds=0;

let interval_timer;
let interval_time
let alarmMode = false;

updateTime();

switch_btn.addEventListener('click', changeMode);


function changeMode(){
    if(!alarmMode){  
        alarmMode=true; 
        clearInterval(interval_time);
        updateTimer(); 
        hoursUp.addEventListener('click', addHour);
        hoursDown.addEventListener("click", subsHour);
        minutesUp.addEventListener('click', addMinute);
        minutesDown.addEventListener("click", subsMinute);
        secondsUp.addEventListener('click', addSecond);
        secondsDown.addEventListener("click", subsSecond);
        play_btn.addEventListener('click', play);
        stop_btn.addEventListener('click', stop);
        refresh_btn.addEventListener('click', refresh);
    } else{
        alarmMode=false;
        clearInterval(interval_timer);
        updateTime();
        hoursUp.removeEventListener('click', addHour);
        hoursDown.removeEventListener("click", subsHour);
        minutesUp.removeEventListener('click', addMinute);
        minutesDown.removeEventListener("click", subsMinute);
        secondsUp.removeEventListener('click', addSecond);
        secondsDown.removeEventListener("click", subsSecond);
        play_btn.removeEventListener('click', play);
        stop_btn.removeEventListener('click', stop);
        refresh_btn.removeEventListener('click', refresh);
    }    
}



function updateTime(){
   interval_time = setInterval(setTime, 1000);
}

function setTime(){
    const date_now = new Date();
    const hours_now = date_now.getHours();
    const minutes_now = date_now.getMinutes();
    const seconds_now =  date_now.getSeconds();

    const time = `${String(hours_now).padStart(2,'0')}:${String(minutes_now).padStart(2,'0')}:${String(seconds_now).padStart(2,'0')}`

    timer.value = time;
}

function updateTimer(){
    timer.value = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
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



function counter(){
    if(hours==0 && minutes==0 && seconds==0){
        stop();
    }
    if(seconds==0 && minutes==0 && hours > 0){
        hours--;
        minutes=59;
        seconds=59;
    }else if(minutes>0 && seconds==0) {
        minutes--;
        seconds=59;
    }else{
        seconds--;
    }
    updateTimer();
  
}

function play(){
   interval_timer = setInterval(counter, 1000);
}



function stop(){
    clearInterval(interval);
}



function refresh(){
    seconds=0;
    minutes=0;
    hours=0;
    stop();
    updateTimer();
}



