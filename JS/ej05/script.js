const timer = document.querySelector(`.timer`);
const hours_up = document.querySelector(`.hours .up`);
const hours_down = document.querySelector(`.hours .down`);

const minutes_up = document.querySelector(`.minutes .up`);
const minutes_down = document.querySelector(`.minutes .down`);

const seconds_up = document.querySelector(`.seconds .up`);
const seconds_down = document.querySelector(`.seconds .down`);

const play_btn = document.querySelector(`.play`);
const stop_btn = document.querySelector(`.stop`);
const refresh_btn = document.querySelector(`.refresh`);

const switch_btn = document.querySelector(`.switch`);

let hours=0;
let minutes=0;
let seconds=0;

let interval_timer;
let interval_time
let alarm_mode = false;

clock();

function clock(){
    updateTime();
    timer.disabled = true;
    switch_btn.addEventListener('click', changeMode);
}

function changeMode(){
    if(!alarm_mode){  
        alarm_mode=true; 
        clearInterval(interval_time);
        updateTimer(); 
        addAlarmListeners();       
    } else{
        alarm_mode=false;
        updateTime();
        removeAlarmListeners();              
    }    
}

function addAlarmListeners(){
    hours_up.addEventListener('click', addHour);
    hours_down.addEventListener("click", subsHour);
    minutes_up.addEventListener('click', addMinute);
    minutes_down.addEventListener("click", subsMinute);
    seconds_up.addEventListener('click', addSecond);
    seconds_down.addEventListener("click", subsSecond);
    play_btn.addEventListener('click', play);
    stop_btn.addEventListener('click', stop);
    refresh_btn.addEventListener('click', refresh);
    timer.disabled = false;
}

function removeAlarmListeners(){
    hours_up.removeEventListener('click', addHour);
    hours_down.removeEventListener("click", subsHour);
    minutes_up.removeEventListener('click', addMinute);
    minutes_down.removeEventListener("click", subsMinute);
    seconds_up.removeEventListener('click', addSecond);
    seconds_down.removeEventListener("click", subsSecond);
    play_btn.removeEventListener('click', play);
    stop_btn.removeEventListener('click', stop);
    refresh_btn.removeEventListener('click', refresh);
    timer.disabled = true;
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
    if(seconds==0 && minutes==0 && hours == 0){
        timer.value= "ALARM!!";
        stop();
        if(!alarm_mode){
            changeMode(alarm_mode);
        }           
    } else {
        if(seconds==0 && minutes==0 && hours > 0){
            hours--;
            minutes=59;
            seconds=59;
        } else if(minutes>0 && seconds==0) {
            minutes--;
            seconds=59;
        } else{
            seconds--;
        }

        if(alarm_mode){
            updateTimer();
        }
    }
}



function play(){
    stop();
    interval_timer = setInterval(counter, 1000);
}

function stop(){
    clearInterval(interval_timer);
}

function refresh(){
    seconds=0;
    minutes=0;
    hours=0;
    stop();
    updateTimer();
}