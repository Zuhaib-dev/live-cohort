let btn = document.querySelector("button");
let body = document.querySelector("body");
btn.addEventListener("click", function () {
  let x = Math.random()*90
  let y = Math.random()*90
  let rot = Math.random()*360
  let img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://pngimg.com/uploads/autumn_leaves/small/autumn_leaves_PNG3610.png"
  );
  img.setAttribute('class','image')
  document.body.appendChild(img);
  img.style.left = x+"%"
  img.style.top = y+"%"
  img.style.rotate = rot+'deg'
});
