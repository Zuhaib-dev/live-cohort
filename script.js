// Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).
// Implement your own version of `.map()` as a higher-order function.
// Write a function that uses closures to create a counter.
// Implement a function that limits how many times another function can be called (Closure + HOF).
// function caller(fn) {
//   setTimeout(fn, 3000);
// }
// caller(function () {
//   console.log("Caller");
// });

// let arr = [1,2,3,4,5]
// function zap(arr,fn){
//     let newArr = []
//     for(let i = 0; i<arr.length;i++){
//         newArr.push(fn(arr[i]))

//     }
//     return newArr

// }
// let ans = zap(arr,function(value){
//     return value+2
// })
// console.log(ans);
// function counter(){
//     let count = 0
//     return function (){
//         count++
//         console.log(count);
        
//     }
// }
// let ans  = counter()
// ans()
// ans()
// ans()

function fnLimiter(fn,limit){
    let total = 0
    return function (){
        if(total<limit){
            total++
            fn()
        }
    }

}
let ans = fnLimiter(function(){console.log("hello im on my limits");
},3)
ans()
ans()
ans()
ans()