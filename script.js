// 17. Find the second largest number in an array
let arr = [1,3,1,3,2,4,2,4,5,4,5,3,1,2,3,4,]
let uniqArr = [...new Set(arr)]
uniqArr.sort(function(a,b){
    return b - a
})
console.log(uniqArr[1]);
