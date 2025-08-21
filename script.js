// old way by using functions
function Toffee(flavor, price, shape) {
  this.flavor = flavor;
  this.price = price;
  this.shape = shape;
}
let T1 = new Toffee("Vanilla", 20,"Round");
let T2 = new Toffee("Chocolate", 30,"Oval");
let T3 = new Toffee("Strawberry", 40,"CUbe");
console.log(T1,T2,T3);

//new way using Class and Constructors

class Toffe {
  constructor(flavor, price) {
    this.flavor = flavor;
    this.price = price;
  }
}
let t1 = new Toffe("Vanilla", 20);
let t2 = new Toffe("Chocolate", 30);
let t3 = new Toffe("MangoBite", 40);
console.log(t1);
console.log(t2);
console.log(t3);
