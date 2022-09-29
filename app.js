//storing timer class, start id and reser id in the constant variable timer, startbtn and resetbtn 
const timer = document.querySelector('.timer')
const startbtn = document.getElementById('start');
const resetbtn = document.getElementById('reset'); 

//initializing counting variables for different times
let milisec = 0;
let sec = 0;
let min = 0;
let hour = 0;

//number function is for putting 0 infront for the single digit numbers
function number (input){
    return input >= 10 ? input : "0" + input;
}

//for every set interval time function will be triggered
function time(){

    milisec++;//for every time time function triggered it will be incremented by 1

    if (milisec < 100) {
        if (milisec == 99) {
            milisec = 0;
            sec++;
            if (sec >= 60)  {
                sec = 0;
                min++;
                if(min >= 60){
                    min = 0;
                    hour++;
                    if(hour >= 99){
                        return;
                    }
                }
            }
        }
    }
    else{
        milisec = 0;
    }

    timer.innerHTML = number(hour) + ":" + number(min) + ":" + number(sec) + ":" + number(milisec);//to show the countings on the timer

}

//to start the stop watch
function start() {
    startbtn.disabled = true;
    countDown = setInterval(time, 10);
}

//to stop the setInterval we simply used clearInterval on countDown variable
function stop() {
    startbtn.disabled = false;
    clearInterval(countDown);
}

//in this reset function we simply called stop function and made all the 
//counting variables and the innerhtml of the timer to 0 
function reset() {
    stop();
    milisec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    timer.innerHTML = "00:00:00:00";
}