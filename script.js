function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve({ id: 1, name: "Zuhaib" });
    }, 1000);
  });
}
function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(["Title 1 ", "Title 2"]);
    }, 1000);
  });
}
function getCommments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(["lovely Posts", "Amazinging Content", "niCe"]);
    }, 1000);
  });
}
getUser()
  .then(function (data) {
    console.log(data);
    return getPosts(data.id);
  })
  .then(function (titles) {
    console.log(titles);
    return getCommments("dbbb");
  })
  .then(function(cmts){
    console.log(cmts);
    
  })
  .finally(function(){
    console.log("All ressolved");
    
  })
