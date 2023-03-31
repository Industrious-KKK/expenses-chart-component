const bars = document.querySelector(".graph");
const days = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'];
const today = new Date().getDay();
const dayName = days[today];
const barsDiv = document.querySelector(".bar");

console.log(dayName);

fetch("./data.json").then(res => res.json()).then(data => {
 
 bars.innerHTML +=   data.map(bar => {
    
    const kibi = bar.day;
    
    
    return (
       `<div class="bar" style="height:${bar.amount*3}px"> </div>
       <div class="day"><p> ${bar.day} </p> </div>
       `
       )

function weekdayFuntion(){

   if (dayName === kibi){
      
   barsDiv.classList.add("activeday")
   
   } 
}


       
      })
console.log(data);
});