// const arr1 = {
//   a: "asb",
//   b: 10
// };

// const arr4 = {...arr1};
// arr4.b = 'hello';
// console.log(arr1);
// console.log(arr4);

// function copy_arr(myObj){

//   const newObj = {};

//   let key;
//   for (key in myObj){
//     newObj[key] = myObj[key];
//   }

//   return newObj;
// }


// const oldObj = {
//   name: 'Ismar',
//   surname: 'Suleimanov',
//   hobby: {
//     1: 'swimming',
//     2: 'running'
//   }
// };

// const newObj = copy_arr(oldObj);
// newObj.name = 'Tinatin';

// newObj.hobby[1] = "Reading";
// console.log(newObj);
// console.log(oldObj);

// const newAssign = Object.assign(arr1, oldObj);

// console.log(newAssign);

// const newAssign1 = Object.assign({}, oldObj);
// newAssign1.name = 'Panda';
// console.log(newAssign1);

// const arr = ['apple', 'tomato', 'mango'];

// const arr2 = arr.slice(0, 1);

// // arr2[2] = 'potato';
// // console.log(arr);
// console.log(arr2);

// // Операция разворота Spread

// const tehnika = ["телефон", "планшеты", "компьютеры"],
//       melodii = ["рок", "хип-хоп", "джаз"],
//       combo = [...tehnika, ...melodii, "run", "swim"];

// console.log(combo); 
// // Склеила первый и второй массив

// const old_per = ["телефон", "планшеты", "компьютеры"];

// const new_per = [...old_per];

// new_per[1] = "shirt";
// console.log(old_per);
// console.log(new_per);

// Д/з 35 урока
// Седлайте функцию которая принимает информация о пользователе, 
// 	Функция принимает три аргумента 
// Первый параметр для имени 
// Второй для Фамилия 
// третий для дополнительной информации о пользователе, третий параметр 	. 
// если пользователь ввел все правильно то на консоли выводится имя, фамилие, и 4 доп данных о пользователе. 
// например 
// input: getPersonInfo('Bret', 'Pit', 'option1', 'option2', 'option3', 'option4')
// output: Bret Pit option1,option2,option3,option4 

// input: getPersonInfo('Bret', 'Pit', 'option1', 'option2', 'option3', 'option4', 'option5')
// output: Bret Pit option1,option2,option3,option4 функция принимает только 4 опции  

function getPersonInfo(name, surname, age, hobby, nat, city) {
  if (name == "Tinatin" && surname == "Omurova" && age == 24 && hobby == "running" && nat == "kyrgyz" && city == "bishkek") {
    console.log(name, surname, age, hobby, nat, city);
  }
}
getPersonInfo(prompt('name: ', ''), prompt('surname: ', ''), prompt('age: ', ''), prompt('hobby: ', ''), prompt('nat: ', ''), prompt('city: ', ''));