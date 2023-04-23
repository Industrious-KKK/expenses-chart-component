const bars = document.querySelector(".graph");
const days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
const today = new Date().getDay();
const dayName = days[today];

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    bars.innerHTML += data
      .map((bar) => {
        return `<div class="bar_items">
        <div class=${
          bar.day === dayName ? "activeday" : "bar"
        } style="height:${bar.amount * 3}px"> </div>
        <p class="amount">$${bar.amount}</p>
        <p class="day"> ${bar.day} </p>
       </div>
       `;
      })
      .join("");
  });
