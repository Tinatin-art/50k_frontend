// 2)По клику на кнопку добавить в корзину в товар с следующими параметрами:
// 1) Картинка
// 2) Заголовок
// 3) Доп параметры цвет
// 4) Цена
// 3)Добавить корзину

// Конкретные задачи:
//   1)Получить картинку
//   2)Получить Заголовок
// let ttl = document.getElementsByClassName('ttl');
// ttl[0].innerText;
//   3)Получить доп параметры
//   4)Получить цену

//   Принцип получения данных следующий:
//   Получить данные можно с помощью 
// 1).class
// 2)#id 
// 3)attribue
// 4)tag

// let ttl = document.getElementsByClassName('ttl');
// console.log(ttl[1].innerText);

// let ttl = document.querySelectorAll('.price p > .ttl');
// console.log(ttl[0].innerText);
// console.log(ttl[1].innerText);
// console.log(ttl[2].innerText);
// console.log(ttl[3].innerText);
// console.log(ttl[4].innerText);

// for (var text of ttl) {
//         console.log(text.innerText);
// }

// var arr =["Apple", "Orange", "Pearl"];

// arr.forEach(function(item, i, arr) {
//         alert(i + ":" + item + "(macciv:" + arr +")");

// });

// var arr = [1,  -1, 2, -2, 3];

// var positiveArr = arr.filter (function (number){
//         return number > 0;
// });

// alert(positiveArr);

// var names =["HTML", "CSS", "JavaScript"];

// var nameLengths = names.map(function(name){
//         return name.length;
// });
// alert(nameLengths);

// var arr = [1, -1, 2, -2, 3];

// function isPositive(number) {
//         return number > 0;
// }

// alert(arr.every(isPositive));
// alert(arr.some(isPositive));

// var arr = [55, 65, 21, 1, 1, 5];
// var result = arr.reduce(function (sum, current) {
//         return sum + current;
// }, 0);
// alert(result);
// Результат ничего не вывелось

// Без команды вывод ничего не выведется!


// let image = document.getElementsByClassName('add_image');
// console.log(image[0]);
// let quick_view = document.getElementsByClassName('add_quick_view');
// console.log(quick_view[0].innerText);
// let tool = document.getElementsByClassName('tool');
// console.log(tool[0].innerText);
// let price_p = document.getElementsByClassName('price_p');
// console.log(price_p[0].innerText);
// let price_del = document.getElementsByClassName('price_del');
// console.log(price_del[0].innerText);
// let review = document.getElementsByTagName('em');
// console.log(review[0].innerText);


// var elements = document.getElementsByClassName("add_cart");
// for (var i=0; i<elements.length; i++){
//         console.log(elements[i]);
// }


// var elements = document.getElementsByClassName("add_cart");

// var myFunction = function(){
//         var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
//         alert(attribute[0].innerText);
// };

// for (var i=0; i<elements.length; i++){
//         elements[i].addEventListener('click', myFunction, false);
// }


// function tinatin(){
//   alert('Hello');
// }
// tinatin()

// function test_fan(param, param2, param3){
//   var number = 10;
//   var res;
//   res = number + param + param2 + param3;
//   alert(res);
// }

// test_fan(1, 10, 20);

// const arr = {
//   name: 'Tinatin',
//   age: 23,
//   param: {
//     color: 'white',
//     nat:'kyrgyz'
//   }
// };

// console.log(arr);
// console.log(arr.name);
// console.log(arr['name']);

// delete arr.name;
// console.log(arr);

// for (var key in arr){
//   // console.log(key);
//   console.log(arr[key]);
// }

// for (var key in arr){
//   if (typeof(arr[key]) === 'object'){
//     for(var key2 in arr[key]){
//       console.log(arr[key][key2]);
//     }
//   }else{
//     console.log(arr[key]);
//   }
// }

// Урок 31

// function name_fun(number) {
//   let num = number;
//   console.log(num);
// }
// name_fun(200);


// let num;

// function name_fun(num) {
//   let per_const = 120;
//   let result;

//   result = per_const + num;
//   console.log(result);
// }
// name_fun(1000);

// Урок 32

// Методы и Свойства строк
// let text = "Hello my name is Tinatin";
// console.log(text.length);

// let text1 = "Hello my name is Tinatin";
// console.log(text1.search("Tinatin"));

// let text2 = "Hellomyname is Tinatin";
// console.log(text2.slice(5, 7));

// let text3 = "Hello my name is Tinatin";
// console.log(text3.replace('my', 'her'));

// let text4 = "Hello my name is Tinatin";
// console.log(text4.toUpperCase());

// let text5 = "       Hello my name is Tinatin";
// console.log(text5.trim());

// Методы и Свойства чисел

// let num1 = 120;
// console.log(num1.toString());

// let x = 9.562354;
// console.log(x.toFixed());
