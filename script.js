// Write a function that uses closures to create a counter.
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
let makecount = counter();
makecount()
makecount()
makecount()
makecount()
