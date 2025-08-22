function getUser() {
  return new Promise((resolve, reject) => {
    resolve({ id: 1, name: "Zuhaib" });
  });
}
function getPosts() {
  return new Promise((resolve, reject) => {
    resolve(["title 1", "title 2"]);
  });
}
function getComments(postId) {
  return new Promise((resolve, reject) => {
    resolve(["greate post", "lovely"]);
  });
}
getUser()
  .then(function (data) {
    console.log(data);
    return getPosts(data.id);
  })
  .then(function (titles) {
    console.log(titles);
    return getComments("saca")
      .then(function (cmts) {
        console.log(cmts);
      })
      .finally(function () {
        console.log("ALL resolved");
      });
  });
