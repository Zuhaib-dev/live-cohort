let btn = document.querySelector('#btn3')
btn.addEventListener('click', function(){
    function fakeApiCall(endpoint) {
  const data = {
    users: ["Zuhaib", "Murtaza"],
    posts: ["The way of life", "the epic shit"],
  };
  let delay = Math.random() * 1000 + 1000;
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(data[endpoint]);
    }, delay);
  });
}
fakeApiCall("users").then(function (data) {
  console.log(data);
});
fakeApiCall("posts").then(function (data) {
  console.log(data);
});

})