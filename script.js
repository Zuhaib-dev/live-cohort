// 1 Create a function that takes a callback and executes it after every `n` seconds indefinitely.
// function barbarChalavoo(fn,time){
//     setInterval(fn,time)

// }
// barbarChalavoo(function(){console.log("hello");
// },2000)
// 2 Implement a function that returns a function with a preset greeting (Closure)
function greeter(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}
let fnGreeter = greeter("Hello");
fnGreeter("ZUhaib")
