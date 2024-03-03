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
    name = 'alex';
    age;
    salary;

    constructor(name, salary) {
        console.log(name + ' ' + salary)
    }

    fullName(name, surn) {
        return `${this.name} ${this.surn}`;
    }

    showName() {
         return this.name
    }
    showSalary() {
         return this.salary
    }
}

let newGuy = new Employee('alex', '100000$');
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


console.log(newGuy.showName(), newGuy.showSalary())


// class Student {
//     name = 'chel';
//     surn = 'newChel';
//     constructor() {
//         console.log('+++')
//     }
//     getInitials(){
//         let n = this.name[0].toUpperCase()
//         let s = this.surn[0].toUpperCase()
//         return n + s
//     }
// }
//
// let student = new Student();
// student.name = 'ark';
// student.surn = 'bark'

// console.log(student.getInitials())