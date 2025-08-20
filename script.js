let arr = [
  {
    user: "salmon ",
    age: 70,
    image:
      "https://images.unsplash.com/photo-1677760904764-801d55083330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FsbWFuJTIwa2hhbnxlbnwwfHwwfHx8MA%3D%3D",
    married: false,
  },
  {
    user: "Sharukh Khan ",
    age: 65,
    image:
      "https://images.unsplash.com/photo-1637088660675-6930e63e51a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    married: true,
  },
  {
    user: "zuhaib",
    age: 17,
    image:
      "https://zuhaib-dev.github.io/Friend-circle/profile%20picturs/xuhaib.gif.gif",
    married: false,
  },
];
let sum = 0;
arr.forEach(function (elem) {
  sum =
    sum +
    `<div class="card">
      <img src="${elem.image}" alt="">
      <h1> ${elem.user} </h1>
      <h5>  ${(elem.age)} </h5>
      <h4>Married : ${elem.married}</h4>
    </div>`;
});
let body = document.querySelector("body");
body.innerHTML = sum;
