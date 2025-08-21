class Toffee{
  constructor(name,flavor,shape,ingredients){
    this.name = name;
    this.flavor = flavor
    this.shape = shape
    this.ingredients = ingredients
  }
}
Toffee.prototype.price = "price "+2
 let t1 = new Toffee("Alpenlaibe","Coffee","Circle","AlmondMilk,sugar,jagre,Coffee")
 console.log(t1, t1.price);
 