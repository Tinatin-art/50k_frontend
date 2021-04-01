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

let ttl = document.getElementsByClassName('ttl');
console.log(ttl[0].innerText);

// Результат ничего не вывелось

// Без команды вывод ничего не выведется!


let image = document.getElementsByClassName('add_image');
console.log(image[0]);
let quick_view = document.getElementsByClassName('add_quick_view');
console.log(quick_view[0].innerText);
let tool = document.getElementsByClassName('tool');
console.log(tool[0].innerText);
let price_p = document.getElementsByClassName('price_p');
console.log(price_p[0].innerText);
let price_del = document.getElementsByClassName('price_del');
console.log(price_del[0].innerText);
let review = document.getElementsByTagName('em');
console.log(review[0].innerText);