"use strict";



console.log(date)

// const new_year = new Date("1 jan 2022");
// console.log(new_year);

const myDays = document.querySelector(".days>p");
const myHours = document.querySelector(".hours>p");
const myMinutes = document.querySelector(".minutes>p");
const mySeconds = document.querySelector(".seconds>p");

function countDown(){
    const mydate = document.getElementById("date").value;
    const date = new Date(mydate);
    if(mydate){
        
        const presentDate = new Date();
    
        const overallSeconds = (date - presentDate) / 1000;
    
    
    
        const days = Math.floor(overallSeconds /3600 / 24);
        const hours = Math.floor(overallSeconds /3600 )% 24;
        const minutes = Math.floor(overallSeconds /60 )% 24;
        const seconds = Math.floor(overallSeconds) % 24;

        myDays.innerHTML = handle(days);
        myHours.innerHTML = handle(hours);
        myMinutes.innerHTML = handle(minutes);
        mySeconds.innerHTML = handle(seconds);

    }
}

countDown()

setInterval(countDown,1000);


function handle(time){
    if(time<10){
        return "0" + time ;
    }
    return time;

 }
