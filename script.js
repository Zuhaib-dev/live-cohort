let btn = document.querySelector("button");
let prg = document.querySelector("#progress");
let growth = document.querySelector("#growth");
let grow = 0;
btn.addEventListener("click", function () {
  let limiter = setInterval(function () {
    console.log(grow);
    grow++
    persent.innerHTML = grow+"%"
    growth.style.width = grow+'%' 
  }, 50);
  setTimeout(function(){
    clearInterval(limiter)
    btn.innerHTML = "Downloaded"
    btn.style.opacity = 0.5
  },5000)
});
