const bars = document.querySelector(".graph");

const day = new Date().getDay();

console.log(day);

fetch("./data.json").then(res => res.json()).then(data => {
 
 bars.innerHTML +=   data.map(bar => {
 return (

    `<div class="bar" style="height:${bar.amount*3}px"> </div>
    <p> ${bar.day} </p>
    `
 )

})
});