let btn = document.querySelector("#btn3");
btn.addEventListener("click", function () {
  fetch("https://api.github.com/users/zuhaib-dev")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.avatar_url);
    });
});
