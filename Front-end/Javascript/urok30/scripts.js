// Д.з 30 урока

// 1. Сделать функцию которая вычисляет длину окружности, радиус задает пользователь.

let user = +prompt("Введите радиус окружности: ", '');

function result() {
        alert(user * 3.14 * 2);
}

result();

// 2. Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b
function min(a, b) {
        if (a < b) {
                return a;
        } else {
                return b;
        }
}

alert(min(8, 15));