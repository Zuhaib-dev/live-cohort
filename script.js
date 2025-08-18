// Create a function that takes a callback and executes it after every `n` seconds indefinitely.
function barbarChalavoo(fn,time){
    setInterval(fn,time)

}
barbarChalavoo(function(){console.log("hello");
},2000)