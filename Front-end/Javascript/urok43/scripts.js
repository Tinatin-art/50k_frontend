// Урок 43

// console.log(document);
// console.log(document.body);
// document.body.style.background = "red";
// console.log(document.body.childNodes);
// console.log(document.querySelector(".top_ul").parentNode);
// console.log(document.querySelector("#btn1").nextSibling);
// console.log(document.querySelector("#btn1").previousSibling);

// for( let per of document.body.childNodes){

//   if(per.nodeName == "#text"){
//     continue;
//   }
//   console.log(per.nodeName);
// }

// Д/з 43 урока
// Домашнее задание в 43 уроку
// 1. сделать навигация для смены цвета заднего фона 
// 2. навигация должно содержать три цвета 
// 3. при нажатие на цвет в навигации задний цвет фона должна поменяться  

let red = document.querySelector(".nav1");
let blue = document.querySelector(".nav2");
let green = document.querySelector(".nav3");


red.onclick = function () {
  document.body.style.background = "red";
};

blue.onclick = function () {
  document.body.style.background = "blue";
};

green.onclick = function () {
  document.body.style.background = "green";
};



