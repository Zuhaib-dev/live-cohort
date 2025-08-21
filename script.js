class Employee {
  constructor(name, post, age, id, salary) {
    this.name = name;
    this.post = post;
    this.age = age;
    this.id = id;
    this.salary = salary;
  }
}
Employee.prototype.employeeDetails = function(){
  console.log(`I be ${this.name} I works as a ${this.post} I'm ${this.age} yers nold . My salary is ${this.salary} `);
  
}
let e1 = new Employee("Zuhaib Rashid", "Software Develoer", 17, 1119801, 50000);
let e2 = new Employee("Zuhaib ", "Software Develoer", 18, 1119801, 500000);



