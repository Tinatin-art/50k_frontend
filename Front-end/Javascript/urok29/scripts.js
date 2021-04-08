// Д.з 29 урока
// 1. с помощью цикла сделайте перебор товаров

var prod_goods = document.getElementsByClassName("prod");

for(var i=0; i<prod_goods.length; i++){
        console.log(prod_goods[i]);
}

// 2. по клику получить название товара с помощью js

var elements = document.getElementsByClassName("add_cart");

var myFunction = function(){
        var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
        console.log(attribute[0].innerText);
};

for (var i=0; i<elements.length; i++){
        elements[i].addEventListener('click', myFunction, false);
}

// 3. по клику получить цену товара с помощью js

var elements = document.getElementsByClassName("add_price");

var myFunction = function(){
        var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".price_p");
        console.log(attribute[0].innerText);
};

for (var i=0; i<elements.length; i++){
        elements[i].addEventListener('click', myFunction, false);
}

// 4. по клику получить адрес картинки с помощью js

var elements = document.getElementsByClassName("add_pic");

var myFunction = function(){
        var attribute = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".add_image");
        console.log(attribute[0]);
};

for (var i=0; i<elements.length; i++){
        elements[i].addEventListener('click', myFunction, false);
}

// 5. попробуйте с помощью js поменять название товара цену товара

var ttl = document.getElementsByClassName('ttl');
for (var text of ttl) {
        text.textContent = 'Hello! New Content';
        
        console.log(text.innerText);
}


var price_p = document.getElementsByClassName('price_p');
for (var price of price_p) {
        price.textContent = '$12.00';
        
        console.log(price.innerText);
}
