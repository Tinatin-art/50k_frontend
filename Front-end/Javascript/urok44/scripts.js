// Урок 44
(function () {

  // 'use strict';
  // function getThis(a, b) {
  //   // console.log(this);

  //   function arif() {
  //     return a + b;
  //   }
  //   console.log(arif());;
  // }
  // getThis(5, 2);


  // const obj = {
  //   name: 'Tinatin',
  //   age: 24,
  //   sum: function () {
  //     console.log(this);
  //     function test(){
  //       console.log(this);
  //     }
  //     test();
  //   }
  // };

  // obj.sum();
  // function User(name, age) {
  //   this.name = name,
  //   this.age = age,
  //   this.data = function () {
  //     console.log('heloo' + this.age);
  //   };

  // }
  // let ismar = new User("Ismar", 24);
  // console.log(ismar);
  // ismar.data();

  // function hello(age){
  //   console.log(this);
  //   console.log(this.name);
  //   console.log(age);
  // }

  // const newObj = {
  //   name: 'Tinatin'
  // };

  // hello.call(newObj, 26);
  // hello.apply(newObj, ['24']);

  // function count (age){
  //   return this * age;
  // }

  // const hello = count.bind(5);
  // console.log(hello(10));


  // const click = document.querySelector('#btn1');
  // click.addEventListener('click', function(){
  //   this.style.background="red";
  // });
}());

// Д/з 44 урока

// Сделать объект, который запрашивает имя пользователя, год рождения, место рождения, с этим объектом должны создаваться все пользователи;
// данные о пользователе вывести на страницу 

// input 
// let amantur= new createUser();
// output: 
// Amantur, 1998, Bishkek.

// input 
// let adilet = new createUser();
// output: 
// Adilet, 1995, Tokmok.


function createUser(name, year, city){
  this.name = name,
  this.year = year,
  this.city = city
};
let amantur = new createUser('Amantur', 1998, 'Bishkek');
console.log(amantur.name, amantur.year, amantur.city);

let adilet = new createUser('Adilet', 1995, 'Tokmok');
console.log(adilet.name, adilet.year, adilet.city);