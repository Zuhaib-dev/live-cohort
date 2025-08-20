let arr = [
  {
    name: "Aisha Kapoor",
    age: 29,
    isMarried: false,
    image:
      "https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww",
    skills: ["JavaScript", "React", "CSS"],
    istatue: "Strangers",
  },
  {
    name: "Rohan Mehta",
    age: 34,
    isMarried: true,
    image:
      "https://images.unsplash.com/photo-1755306064502-6df8d7ee33f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    skills: ["Python", "Django", "SQL", "AWS"],
    istatue: "Strangers",
  },
  {
    name: "Neha Sharma",
    age: 27,
    isMarried: false,
    image:
      "https://images.unsplash.com/photo-1755097441290-408c244d0c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    skills: ["UI/UX Design", "Figma", "HTML", "CSS"],
    istatue: "Strangers",
  },
];
let main = document.querySelector(".main");
function heroFnc() {
  let sum = "";
  arr.forEach(function (elem, idx) {
    sum =
      sum +
      `<div class="card">
        <img
          src=" ${elem.image} "
          alt=""
        />
        <h1> ${elem.name} </h1>
        <h5> ${elem.age} </h5>
        <h4>Married : ${elem.isMarried}</h4>
        <h3> ${elem.skills} </h3>
        <h5 > ${elem.istatue} </h5>
        <button id=${idx}>Add Friend</button>
      </div>`;
  });
  main.innerHTML = sum;
}
heroFnc();
let btn = document.querySelector("button");

main.addEventListener("click", function (dets) {
  let gold = arr[dets.target.id];
  if (gold.istatue == "Strangers") {
    gold.istatue = "Friends";
  } else {
    gold.istatue = "Strangers";
  }
  heroFnc();
});
