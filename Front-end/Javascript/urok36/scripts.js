// ООП - понятие
// применение

// как понять что есть строка?

let str = 'text';

let strObj = new String(str);

console.log(typeof(str));
console.log(strObj);

let Array = [1,2,3];

console.log(Array);

let car = {
  kusov: 'Jelezo',
  kolesa: '4 kolesa',
  modal: function () {
    console.log("Hello");
  }
};

// let mb = {
//   marka: 'Mers',
//   god: 2021
// };
let mb = Object.create(car);
// mb.__proto__ = car;

// Object.setPrototypeOf(mb, car);

console.log(mb.kusov);
console.log(mb.modal);
mb.modal();