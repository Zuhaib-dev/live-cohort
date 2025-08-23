let h5 = document.querySelector("h5");
let addBtn = document.querySelector("#add");
let check = 0;
addBtn.addEventListener("click", function () {
  if(check == 0){
    h5.innerHTML = "Friends"
    h5.style.color = 'green'
    check = 1
    addBtn.innerHTML = "Remove Friend"
  }else{
    h5.innerHTML = "Strangers"
    h5.style.color = 'red'
    check = 0
    addBtn.innerHTML = 'Add Friend'
  }
});
