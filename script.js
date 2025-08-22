function fakeApiCall(endpoint) {
  const data = {
    users: ["Zuhaib", "Murtaza"],
    posts: ["The Epic Shit", "The Wealth"],
  };
  let delay = Math.random() * 2000 + 1000;
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(data[endpoint]);
    }, delay);
  });
}
fakeApiCall('users')
.then(function(data){
    console.log(data);
    
})
fakeApiCall('posts')
.then(function(data){
    console.log(data);
    
})
