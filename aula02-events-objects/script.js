//const Person = function (name, age) {
//  this.name = name;
//  this.age = age;
//};
//
//Person.prototype.hello = function () {
//  console.log(`Oi eu sou o ${this.name}`);
//}
//
//let p = new Person('Willian', 24);
//console.log(p);
//p.hello();

// ES6
//class Person {
//  #name;
//  age;
//
//  constructor (name, age) {
//    this.#name = name;
//    this.age = age;
//  }
//
//  hello () {
//    console.log(`Oi eu sou o ${this.#name}`);
//  }
//}

// Closure / Hooks
const Person = function (name, age) {
  let n = name,
      a = age;

  return {
    hello: function () {
      console.log(`Oi eu sou o ${n}`);
    }
  };
}

let p = Person('Willian', 30);
console.log(p);
p.hello();
console.log(p.name);
