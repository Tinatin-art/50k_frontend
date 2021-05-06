// Урок 38
// Динамическая типизация

// let str = 'text';
// let strObj = String(str);
// console.log(typeof(str));
// console.log(strObj);

// let number = "1";
// console.log(+number + 5);
// console.log(parseInt(number) + 5);
// let res = +prompt("Enter number", "");
// console.log(typeof(res));
// console.log("https://miukid.com/cat/" +res);
// console.log(`https://miukid.com/cat/"${res}`);

// Д/з 38 урок
// 1. написать функцию которая запрашивает пользователю ввести число, функция должна проверять что ввел пользователь строку или тип число, при этом не конвертируя данные который ввел пользователь. если пользователь ввел тип чисто то преобразуйте это в шестнадцатеричный код, восьмеричный и двоичный код, если это не строка то на консоли выводится что это не строка.

// input: 13
// output: d, 15, 1101

function user(){
  let num = +prompt("Enter number", "");
  if (num === '' || isNaN(num)) {
    console.log("String");
  }
  else if (! isNaN(num)) {
    let num_16 = num.toString(16);
    let num_8 = num.toString(8);
    let num_2 = num.toString(2);
    console.log(num_16, num_8, num_2);
  }
}
user();