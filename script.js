//async js
function stepOne() {
  return new Promise((resolve, reject) => {
    console.log("Step 1");
    resolve();
  });
}
function stepTwo() {
  return new Promise((resolve, reject) => {
    console.log("Step 2");
    resolve();
  });
}
function stepThree() {
  return new Promise((resolve, reject) => {
    console.log("Step 3");
    resolve();
  });
}
stepOne()
  .then(stepTwo)
  .then(stepThree)
  .then(function () {
    console.log("All Steps Done");
  });
