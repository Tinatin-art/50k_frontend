function oper() {
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var operators = document.getElementById('operators').value;

  if (operators === '+') {
    document.getElementById('result').value = num1 + num2;
  }else if (operators === '-') {
    document.getElementById('result').value = num1 - num2;
  }else if (operators === '*') {
    document.getElementById('result').value = num1 * num2;
  }else if (operators === '/') {
    document.getElementById('result').value = num1 / num2;
  }else if (operators === '%') {
    document.getElementById('result').value = num1 % num2;
  }else if (operators === '**') {
    document.getElementById('result').value = num1 ** num2;
  }
}
var num1 = prompt("Введите первый слагаемое");
var num2 = prompt("Введите второй слагаемое");
alert("Сумма: " + (Number(num1) + Number(num2)));

var num1 = prompt("Введите первый Уменьшаемое");
var num2 = prompt("Введите второй Вычитаемое");
alert("Разность: " + (Number(num1) - Number(num2)));

var num1 = prompt("Введите первый множитель");
var num2 = prompt("Введите второй множитель");
alert("Произведение: " + (Number(num1) * Number(num2)));

var num1 = prompt("Введите первый делимое");
var num2 = prompt("Введите второй делитель");
alert("Частное: " + (Number(num1) / Number(num2)));

var num1 = prompt("Введите первый делимое");
var num2 = prompt("Введите второй делитель");
alert("Остаток от деления: " + (Number(num1) % Number(num2)));

var num1 = prompt("Введите первое число");
var num2 = prompt("Введите второе число");
alert("Возведение в степень: " + (Number(num1) ** Number(num2)));

var parol = prompt("Введите пароль: ", "");
if(parol === "hello"){
  console.log("Wellcome");
}else{
  console.log("пароль не правильный");
}

var login = prompt("Введите логин: ", "");
if(login === "java"){
  console.log("Wellcome");
}else{
  console.log("логин не правильный");
}
