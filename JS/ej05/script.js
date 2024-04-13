const input_hours = document.getElementById(`hours`);
const input_minutes = document.getElementById(`minutes`);
const input_seconds = document.getElementById(`seconds`);

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

const time_container = document.getElementById(`time-container`);
const all_buttons = document.querySelectorAll(`button`);

const all_inputs = document.querySelectorAll(`input`);

let hours=0;
let minutes=0;
let seconds=0;

let interval_timer;
let interval_time
let alarm_mode = false;
let red=true;

let alarm_div = document.createElement("div");
let intervalBlink;

app();

function app(){
    update_time();
    input_hours.disabled = true;
    input_minutes.disabled = true;
    input_seconds.disabled = true;
    switch_btn.addEventListener('click', changeMode);
}

function changeMode(){
    if(!alarm_mode){  
        alarm_mode=true; 
        clearInterval(interval_time);
        update_timer(); 
        addAlarmListeners();       
    } else{
        alarm_mode=false;
        update_time();
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
    play_btn.addEventListener('click', play_timer);
    stop_btn.addEventListener('click', stop_timer);
    refresh_btn.addEventListener('click', refresh_timer);
    input_hours.disabled = false;
    input_minutes.disabled = false;
    input_seconds.disabled = false;
}

function removeAlarmListeners(){
    hours_up.removeEventListener('click', addHour);
    hours_down.removeEventListener("click", subsHour);
    minutes_up.removeEventListener('click', addMinute);
    minutes_down.removeEventListener("click", subsMinute);
    seconds_up.removeEventListener('click', addSecond);
    seconds_down.removeEventListener("click", subsSecond);
    play_btn.removeEventListener('click', play_timer);
    stop_btn.removeEventListener('click', stop_timer);
    refresh_btn.removeEventListener('click', refresh_timer);
    input_hours.disabled = true;
    input_minutes.disabled = true;
    input_seconds.disabled = true;
}

function update_time(){
   interval_time = setInterval(setTime, 1000);
}

function setTime(){
    const date_now = new Date();
    const hours_now = date_now.getHours();
    const minutes_now = date_now.getMinutes();
    const seconds_now =  date_now.getSeconds();

    input_hours.value = format_number(hours_now);
    input_minutes.value = format_number(minutes_now);
    input_seconds.value = format_number(seconds_now);
}

function update_timer(){
    input_hours.value = format_number(hours);
    input_minutes.value = format_number(minutes);
    input_seconds.value = format_number(seconds);
    console.log(input_hours.value)
}

function addHour(){
    if(hours==99){
        hours=0;       
    }else{
        hours++;
    }  
    update_timer();
}

function subsHour(){
    if(hours==0){
        hours=99;       
    }else{
        hours--;
    }  
    update_timer();
}

function addMinute(){
    if(minutes==59){
        minutes=0;       
    }else{
        minutes++;
    }  
    update_timer();
}

function subsMinute(){
    if(minutes==0){
        minutes=59;       
    }else{
        minutes--;
    }  
    update_timer();
}

function addSecond(){
    if(seconds==59){
        seconds=0;       
    }else{
        seconds++;
    }  
    update_timer();
}

function subsSecond(){
    if(seconds==0){
        seconds=59;       
    }else{
        seconds--;
    }  
    update_timer();
}

function counter(){
    if(seconds==0 && minutes==0 && hours == 0){
        alarm();
    } else {
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

        if(alarm_mode){
            update_timer();
        }
    }
}

function alarm(){
    stop_timer();
    hide_timer();
    show_alarm_text(); 

    intervalBlink = setInterval(blink, 250);
    all_buttons.forEach(button => {
        button.addEventListener('click', () => {
            clearInterval(intervalBlink);
            time_container.removeChild(alarm_div);
            reset_app();
            });
        });
}

function set_alarm_mode(){
    if(!alarm_mode){
        changeMode(alarm_mode);
    }  
}

function reset_app(){
   
    all_inputs.forEach(input=>{
        input.classList.toggle("none");   
    });

    if(!alarm_mode){
        changeMode(alarm_mode);
    }  
}

function hide_timer(){
    all_inputs.forEach(input => {
        input.classList.toggle("none");
    })
}

function show_alarm_text(){
    
    alarm_div.textContent= "ALARM!!";
    alarm_div.classList.add("alarm-div");
    time_container.appendChild(alarm_div);
}

function blink(){

    if(!red){
        alarm_div.style.color="black";
    }else{
        alarm_div.style.color="red"; 
    } 
    red = !red;      
}

function play_timer(){
    stop_timer();
    interval_timer = setInterval(counter, 1000);
}

function stop_timer(){
    clearInterval(interval_timer);
}

function refresh_timer(){
    seconds=0;
    minutes=0;
    hours=0;
    stop_timer();
    update_timer();
}

function format_number(number){
    if(number>=0 && number<10){
        number = "0" + number;
        return number;
    }else{
        return number;
    }
}