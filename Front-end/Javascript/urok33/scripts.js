// Д.з 33 урока

// 1. Сделать callback функцию которая просит ввести логин и пароль, и проверяет правильно ли введены данные пользователя 

function user(login, password, callback) {
  if (login == 'admin' && password == 'parol' ){
    alert('Добро пожаловать! Вы правильно ввели все данные');
  }else if (login == 'admin' || password == 'parol' ){
    alert('Вы неправильно ввели логин или пароль. Попробуйте еще раз!');
  }else {
    callback();
  }
}

user( login = prompt('Ведите логин: ', ''), password = prompt('Введите пароль: ', ''), () => {
  alert("Извините, все данные неправильные. Попробйте еще раз!");
});

// 2. Сделать callback функцию которая создаёт html элемент, то есть функция просит какой тег создать, просит какой текст ввести и цвет текста. 

function addElement(){
  var newh2 = document.createElement("h2");
  newh2.innerText = "I am a newh2";
  newh2.style.color = "red";

  document.body.appendChild(newh2);
}

addElement();