let elem1 = document.querySelector("#elem1");
let elem1Img = document.querySelector("#elem1 img");
elem1.addEventListener("mousemove", function (dets) {
  elem1Img.style.left = dets.x + "px";
  elem1Img.style.top = dets.y + "px";
});
elem1.addEventListener("mouseenter", function (dets) {
  elem1Img.style.opacity = 1;
});
elem1.addEventListener("mouseleave", function (dets) {
  elem1Img.style.opacity = 0;
});
