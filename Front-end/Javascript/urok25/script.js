console.log("Hello");
alert("Hi everyone");
var year = prompt("Сколько вам лет?", "");
alert("Вам" + year + "лет");

var result = prompt("Сколько будет 2+2?", "");
result = result +2;
alert("Вам" + result + "лет");

var result = prompt("Сколько будет 2+2?", "");
var msg;
if(result == "4"){
  msg = "Right";
}else{
  msg = "False";
}
alert(msg);

confirm("What did you eat today?");
var results = confirm("2 + 2 is 5?");
alert(results);

