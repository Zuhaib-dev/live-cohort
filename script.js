let btn = document.querySelector("button");
let box = document.querySelector("#box");
btn.addEventListener("click", function () {
  let red = Math.floor(Math.random()*256)
  let green = Math.floor(Math.random()*256)
  let blue = Math.floor(Math.random()*256)
  console.log(red,green,blue);
  box.style.backgroundColor = `rgb(${red},${green},${blue})`
  
});
