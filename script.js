let btn = document.querySelector("button");
let h5 = document.querySelector("h5");
let checkFriendship = 0;
btn.addEventListener("click", function () {
  if (checkFriendship == 0) {
    h5.innerHTML = "Request Sending...";
    h5.style.color = "black";
    setTimeout(function(){
      h5.innerHTML = 'Request Accepted'
      h5.style.color = 'black'
      btn.innerHTML = 'Adding Freind'
    },1500)
    setTimeout(() => {
      h5.innerHTML = "friends";
      h5.style.color = "green";
      btn.innerHTML = "Remove Friend ";
      checkFriendship = 1;
    }, 3000);
  } else {
    h5.innerHTML = "Strangers";
    h5.style.color = "red";
    btn.innerHTML = "Add Friend ";
    checkFriendship = 0;
  }
});
