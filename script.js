let arr = [
  {
    name: "Aisha Kapoor",
    age: 29,
    isMarried: false,
    image: "https://source.unsplash.com/300x300/?portrait headshot&sig=1",
    skills: ["JavaScript", "React", "CSS"],
    working: true,
  },
  {
    name: "Rohan Mehta",
    age: 34,
    isMarried: true,
    image: "https://source.unsplash.com/300x300/?portrait headshot&sig=2",
    skills: ["Python", "Django", "SQL", "AWS"],
    working: true,
  },
  {
    name: "Neha Sharma",
    age: 27,
    isMarried: false,
    image: "https://source.unsplash.com/300x300/?portrait headshot&sig=3",
    skills: ["UI/UX Design", "Figma", "HTML", "CSS"],
    working: true,
  },
  {
    name: "Vikram Singh",
    age: 42,
    isMarried: true,
    image: "https://source.unsplash.com/300x300/?portrait headshot&sig=4",
    skills: ["Java", "Spring Boot", "MySQL"],
    working: false,
  },
  {
    name: "Priya Rao",
    age: 31,
    isMarried: true,
    image: "https://source.unsplash.com/300x300/?portrait headshot&sig=5",
    skills: ["Python", "Machine Learning", "Pandas"],
    working: true,
  },
  {
    name: "Arjun Patel",
    age: 36,
    isMarried: false,
    image: "https://source.unsplash.com/300x300/?portrait headshot&sig=6",
    skills: ["DevOps", "Docker", "Kubernetes", "CI/CD"],
    working: true,
  },
  {
    name: "Sneha Desai",
    age: 24,
    isMarried: false,
    image: "https://source.unsplash.com/300x300/?portrait headshot&sig=7",
    skills: ["JavaScript", "Vue.js", "Nuxt"],
    working: true,
  },
  {
    name: "Rahul Verma",
    age: 39,
    isMarried: true,
    image: "https://source.unsplash.com/300x300/?portrait headshot&sig=8",
    skills: ["C#", ".NET", "Azure"],
    working: false,
  },
  {
    name: "Anita Joshi",
    age: 28,
    isMarried: false,
    image: "https://source.unsplash.com/300x300/?portrait headshot&sig=9",
    skills: ["Flutter", "Dart", "Mobile Development"],
    working: true,
  },
  {
    name: "Karan Gupta",
    age: 45,
    isMarried: true,
    image: "https://source.unsplash.com/300x300/?portrait headshot&sig=10",
    skills: ["Go", "Microservices", "Docker"],
    working: false,
  },
];
let sum = 0;
arr.forEach(function (elem) {
  sum = 
    sum + `<div class="card">
      <img src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="">
      <h1> ${elem.name} </h1>
      <h5> ${elem.age} </h5>
      <h4>Married : ${elem.isMarried} </h4>
      <h3>Skills ${elem.skills}</h3>
    </div>`;
});
let body = document.querySelector("body");
body.innerHTML = sum;
