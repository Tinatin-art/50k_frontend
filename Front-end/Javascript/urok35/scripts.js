const arr1 = {
  a: "asb",
  b: 10
};

const arr4 = {...arr1};
arr4.b = 'hello';
console.log(arr1);
console.log(arr4);

function copy_arr(myObj){

  const newObj = {};

  let key;
  for (key in myObj){
    newObj[key] = myObj[key];
  }

  return newObj;
}


const oldObj = {
  name: 'Ismar',
  surname: 'Suleimanov',
  hobby: {
    1: 'swimming',
    2: 'running'
  }
};

const newObj = copy_arr(oldObj);
newObj.name = 'Tinatin';

newObj.hobby[1] = "Reading";
console.log(newObj);
console.log(oldObj);

const newAssign = Object.assign(arr1, oldObj);

console.log(newAssign);

const newAssign1 = Object.assign({}, oldObj);
newAssign1.name = 'Panda';
console.log(newAssign1);

const arr = ['apple', 'tomato', 'mango'];

const arr2 = arr.slice(0, 1);

// arr2[2] = 'potato';
// console.log(arr);
console.log(arr2);

// Операция разворота Spread

const tehnika = ["телефон", "планшеты", "компьютеры"],
      melodii = ["рок", "хип-хоп", "джаз"],
      combo = [...tehnika, ...melodii, "run", "swim"];

console.log(combo); 
// Склеила первый и второй массив

const old_per = ["телефон", "планшеты", "компьютеры"];

const new_per = [...old_per];

new_per[1] = "shirt";
console.log(old_per);
console.log(new_per);