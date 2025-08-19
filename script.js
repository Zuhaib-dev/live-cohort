let btn = document.querySelector("button");
let h5 = document.querySelector("h5");
let flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    h5.innerHTML = "Friends";
    h5.style.color = "green";
    btn.innerHTML = "Remove Friend";
    console.log("FriendShip Done");
    
    flag = 1
  }else{
    h5.innerHTML = 'Strangers'
    h5.style.color = 'red'
    btn.innerHTML = 'Add Friend'
    console.log("Removed Friend Susessfully");
    
    flag = 0
  }
});
