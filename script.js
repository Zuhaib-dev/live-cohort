let btn = document.querySelector("#btn3");
btn.addEventListener("click", function () {
  function orderFood() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        let chance = Math.random() < 0.6;
        if (chance) resolve();
        else reject();
      }, 1000);
    });
  }
  orderFood()
    .then(function () {
      console.log("✔Fizza Delivered");
    })
    .catch(function () {
      console.log("❌Not Delivered");
    });
});
