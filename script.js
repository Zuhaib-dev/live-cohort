let btn = document.querySelector("button");
let persent = document.querySelector("#persent");
let growth = document.querySelector("#growth");
let grow = 0;
btn.addEventListener("click", () => {
  let limiter = setInterval(() => {
    grow++;
    persent.innerHTML = grow + "%";
    growth.style.width = grow + "%";
  }, 40);
  setTimeout(() => {
    clearInterval(limiter);
    btn.innerHTML = "Downloaded";
    btn.style.color = 'black'
    btn.style.opacity = "0.3";
    btn.style.cursor = 'not-allowed'
    grow = 0
  }, 4000);
});
