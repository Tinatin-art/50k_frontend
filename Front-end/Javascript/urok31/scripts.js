// Д.з 31 урока

// 1. Сделайте функцию которая возводить в степень числа вводимые пользователем

function number(){
        let enterNum = +prompt("Enter number: ", '');
        let result = enterNum ** 2;
        console.log(result);
}
number();

// 2. Сделайте функцию которая находит площадь круга, радиус вводить пользователь 

function numberArea(){
        let enterRadius = +prompt("Enter radius: ", '');
        let result = 3.14 * enterRadius ** 2 ;
        console.log(result);
}
numberArea();

// 3. Сделайте функцию которая находит площадь прямоугольника, длину и ширину вводить пользователь. 

function rectangleArea(){
        let enterLength = +prompt("Enter length: ", '');
        let enterWidth = +prompt("Enter width: ", '');
        let result = enterLength * enterWidth;
        console.log(result);
}
rectangleArea();