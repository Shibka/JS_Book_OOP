//
// class Car {
// //     color;
// //     fuel;
// //
// //     go() {
// //
// //     }
// //
// //     turn() {
// //
// //     }
// //
// //     stop() {
// //
// //     }
// // }
// //
// // let myCar = new Car()
// // myCar.color = 'red';
// // myCar.fuel = 50;
// // myCar.go();
// // myCar.turn();
// // myCar.stop();

class Employee {
    name;
    age;
    salary;

    fullName (name, surn) {
        return `${this.name} ${this.surn}`;
    }
}

let newGuy = new Employee();
let newGuy2 = new Employee();
let newGuy3 = new Employee();
let newGuy4 = new Employee();

newGuy.name = 'alex'
newGuy.surn = 'sheb';
newGuy.age = 23;
newGuy.salary = 20000;

newGuy2.name = 'leha';
newGuy2.surn = 'kol';
newGuy2.age = 23;
newGuy2.salary = 15000;

newGuy3.name = 'gleb';
newGuy3.surn = 'bura';
newGuy3.age = 24;
newGuy3.salary = 10000;

newGuy4.name = 'igor';
newGuy4.surn = 'mari';
newGuy4.age = 24;
newGuy4.salary = 5000;


console.log(newGuy.fullName())