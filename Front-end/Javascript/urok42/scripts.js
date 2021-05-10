// Урок 42

var click = document.getElementById("btn1");
var click2 = document.getElementById("btn2");

var delet_elem = function (e) {
  alert(`Вы кликнули на кнопку: ${e.target.innerText}`);
  // console.log( e.target.innerText);
};

click.addEventListener('click', delet_elem);
click2.addEventListener('click', delet_elem);

// click.onclick = function(){
//   alert("click");
// };

// click.addEventListener('click', (e) =>{
//   console.log(e.target.remove());
// });

// click2.addEventListener('click', (e) =>{
//   console.log(e.target.remove());
// });

//Д/з 42 урока

// 1. сверстайте меню которая состоит из 5 менюшек 
// 2. получите все кнопки из меню
// 3. при нажатие на меню, удалите именно тот элемент на которой нажали 

var click1 = document.getElementById("menu_btn1");
var click2 = document.getElementById("menu_btn2");
var click3 = document.getElementById("menu_btn3");
var click4 = document.getElementById("menu_btn4");
var click5 = document.getElementById("menu_btn5");

var menu_delete = (a) => {
  a.target.remove();
};

click1.addEventListener('click', menu_delete);
click2.addEventListener('click', menu_delete);
click3.addEventListener('click', menu_delete);
click4.addEventListener('click', menu_delete);
click5.addEventListener('click', menu_delete);