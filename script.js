function step1() {
  return new Promise((resolve, reject) => {
    console.log("Step 1");
    resolve();
  });
}
function step2() {
  return new Promise((resolve, reject) => {
    console.log("Step 2");
    resolve();
  });
}
function step3() {
  return new Promise((resolve, reject) => {
    console.log("Step 3");
    resolve();
  });
}
step1().then(step2).then(step3).then(function(){
    console.log(
        'All Steps Done'
    );
    
})
