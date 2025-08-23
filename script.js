function getUserInfo() {
  return new Promise((resolve, reject) => {
    resolve({ id: 1, name: "Zuhaib" });
  });
}
function getUserPic(id) {
  return new Promise((resolve, reject) => {
    resolve(["pic 1", "pic 2"]);
  });
}
function getUserCmts(id) {
  return new Promise((resolve, reject) => {
    resolve(["Awesome Post", "Great Content"]);
  });
}
function getUserFlowers(id) {
  return new Promise((resolve, reject) => {
    resolve(["10K Followers on instagram"]);
  });
}
function getUserFlowing(id) {
  return new Promise((resolve, reject) => {
    resolve(["250 Flowing on Instagram"]);
  });
}
getUserInfo()
  .then(function (data) {
    console.log(data);
    return getUserPic(data.id);
  })
  .then(function (data) {
    console.log(data);
    return getUserCmts(data.id);
  })
  .then(function (data) {
    console.log(data);
    return getUserFlowers(data.id);
  })
  .then(function (data) {
    console.log(data);
    return getUserFlowing(data.id);
  })
  .then(function (data) {
    console.log(data);
  })
  .finally(function(){
    console.log("ALL data Fetched");
    
  })
