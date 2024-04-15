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
let interval_blink;

app();

function app(){
    update_time();
    input_hours.disabled = true;
    input_minutes.disabled = true;
    input_seconds.disabled = true;
    switch_btn.addEventListener('click', change_mode);
}

function change_mode(){
    if(!alarm_mode){  
        alarm_mode=true; 
        clearInterval(interval_time);
        update_timer(); 
        add_alarm_listeners();       
    } else{
        alarm_mode=false;
        update_time();
        remove_alarm_listeners();              
    }    
}

function add_alarm_listeners(){
    hours_up.addEventListener('click', add_hour);
    hours_down.addEventListener("click", subs_hour);
    minutes_up.addEventListener('click', add_minute);
    minutes_down.addEventListener("click", subs_minute);
    seconds_up.addEventListener('click', add_second);
    seconds_down.addEventListener("click", subs_second);
    play_btn.addEventListener('click', play_timer);
    stop_btn.addEventListener('click', stop_timer);
    refresh_btn.addEventListener('click', refresh_timer);
    input_hours.disabled = false;
    input_minutes.disabled = false;
    input_seconds.disabled = false;
}

function remove_alarm_listeners(){
    hours_up.removeEventListener('click', add_hour);
    hours_down.removeEventListener("click", subs_hour);
    minutes_up.removeEventListener('click', add_minute);
    minutes_down.removeEventListener("click", subs_minute);
    seconds_up.removeEventListener('click', add_second);
    seconds_down.removeEventListener("click", subs_second);
    play_btn.removeEventListener('click', play_timer);
    stop_btn.removeEventListener('click', stop_timer);
    refresh_btn.removeEventListener('click', refresh_timer);
    input_hours.disabled = true;
    input_minutes.disabled = true;
    input_seconds.disabled = true;
}

function update_time(){
   interval_time = setInterval(set_time, 1000);
}

function set_time(){
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

function add_hour(){
    if(hours==99){
        hours=0;       
    }else{
        hours++;
    }  
    update_timer();
}

function subs_hour(){
    if(hours==0){
        hours=99;       
    }else{
        hours--;
    }  
    update_timer();
}

function add_minute(){
    if(minutes==59){
        minutes=0;       
    }else{
        minutes++;
    }  
    update_timer();
}

function subs_minute(){
    if(minutes==0){
        minutes=59;       
    }else{
        minutes--;
    }  
    update_timer();
}

function add_second(){
    if(seconds==59){
        seconds=0;       
    }else{
        seconds++;
    }  
    update_timer();
}

function subs_second(){
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

    interval_blink = setInterval(blink, 250);
    all_buttons.forEach(button => {
        button.addEventListener('click', () => {
            clearInterval(interval_blink);
            time_container.removeChild(alarm_div);
            reset_app();
            });
        });
}

function set_alarm_mode(){
    if(!alarm_mode){
        change_mode(alarm_mode);
    }  
}

function reset_app(){
   
    all_inputs.forEach(input=>{
        input.classList.toggle("none");   
    });

    if(!alarm_mode){
        change_mode(alarm_mode);
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
    const hours_value = parseInt(input_hours.value);
    const minutes_value = parseInt(input_minutes.value);
    const seconds_value = parseInt(input_seconds.value);
    hours = hours_value;
    minutes = minutes_value;
    seconds = seconds_value;
    if(hours>0 || minutes>0 || seconds>0){
        interval_timer = setInterval(counter, 1000);
    }
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