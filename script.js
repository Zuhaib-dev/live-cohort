// Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).
// Implement your own version of `.map()` as a higher-order function.
function abcd(fn){
    setTimeout(fn,3000)

}
abcd(function(){
    console.log("Hllo");
    
})
// Implement your own version of `.map()` as a higher-order function.
let arr = [1,23,3]
function zap(arr,fnc){
    let newArr = []
    for(let i = 0;i<arr.length;i++){
        newArr.push(fnc(arr[i]))
    }
    return newArr

}
 let ans = zap(Array,function(value){
    return value +2
})