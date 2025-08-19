let btn = document.querySelector("button");
let h5 = document.querySelector("h5");
let check = 0;
btn.addEventListener("click", function () {
  if (check == 0) {
    h5.innerHTML = "Request Sending...";
    h5.style.color = "black";
    btn.innerHTML = "Adding Friend..."
    setTimeout(function(){
      h5.innerHTML = "Request Accepted"
      h5.style.color = "black"
    },1500)
    setTimeout(function () {
      h5.innerHTML = "Friends";
      h5.style.color = "green";
      btn.innerHTML = "Remove Friend";
      check = 1;
    }, 3000);
  } else {
    h5.innerHTML = "Stranger";
    h5.style.color = "red";
    btn.innerHTML = "Add Friend";
    check = 0;
  }
});
