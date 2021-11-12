const daysEL= document.getElementById("days");
const hoursEL= document.getElementById("hours");
const minEL= document.getElementById("mins");
const secondsEL= document.getElementById("seconds");

//Date objects are created with the new Date() constructor.
const newYears="1 jan 2022";

 function countdown(){
     const  newYearsDate=new Date(newYears);
     const currentDate = new Date();
     const seconds =( newYearsDate-currentDate) / 1000;
//The Math.floor() function returns the largest integer less than or equal to a given number
     const days=Math.floor(seconds/3600/24); 
     const hours= Math.floor(seconds/3600)%24;
     const minutes= Math.floor(seconds/60)%60;
     const sec=Math.floor(seconds)%60;

//The innerHTML property sets or returns the HTML content (inner HTML) of an element.
     daysEL.innerHTML=days;
     hoursEL.innerHTML=hours;
     minEL.innerHTML=minutes;
    secondsEL.innerHTML=sec;

 }
 //initail call 
 countdown();
 //The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
setInterval(countdown,1000);