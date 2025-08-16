// 9. Create an array of 5 numbers and log the sum using .reduce().
let arr = [100,1,56,3,8]
let ans = arr.reduce(function(acc,num){
    return acc + num
})
console.log(ans);
