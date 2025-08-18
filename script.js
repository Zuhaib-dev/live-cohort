// 1 Create a function that takes a callback and executes it after every `n` seconds indefinitely.
// function barbarChalavoo(fn,time){
//     setInterval(fn,time)

// }
// barbarChalavoo(function(){console.log("hello");
// },2000)
// 2 Implement a function that returns a function with a preset greeting (Closure)
// function greeter(greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// }
// let fnGreeter = greeter("Hello");
// fnGreeter("ZUhaib")
// 3 Implement a function that takes a callback and only executes it once (HOF + Closure).
// function once(fn, limit) {
//   let total = 0;
//   return function(){
//     if (total < limit) {
//     total++;
//     fn();
//   }
//   }
// }
// let ans = once(function () {
//   console.log("Once Only");
// }, 1);
// ans()
// ans()
// ans()
// 4 Implement a function that throttles another function (HOF + Closures).
