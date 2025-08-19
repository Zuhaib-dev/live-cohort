let btn = document.querySelector("button");
let persent = document.querySelector("#persent");
let growth = document.querySelector("#growth");
let grow = 0;
btn.addEventListener("click", () => {
  let limiter = setInterval(() => {
    grow++;
    persent.innerHTML = grow + "%";
    growth.style.width = grow + "%";
  }, 50);
  setTimeout(function () {
    clearInterval(limiter);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = '0.5'
    grow = 0
  }, 5000);
});
