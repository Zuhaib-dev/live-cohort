let arr = ['CSK','MI','SRH','RCB','KKR','LSG','PBKS','GT','DC','RR',]
let btn = document.querySelector('button')
let h1 = document.querySelector('h1')
btn.addEventListener('click', ()=>{
  let num = Math.floor(Math.random()*arr.length)
  let winner = (arr[num]);
  h1.innerHTML = winner
  
  
})
