let arr = [1,1,2,3,4,5,5]
let obj = {}
arr.forEach(function(val){
    obj[val] === undefined ? obj[val] = 1 : obj[val] ++
})
console.log(obj);

