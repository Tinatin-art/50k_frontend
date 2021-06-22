// Урок 53 Json-server и Дз 53

(function () {

  'use strict';

  fetch("http://localhost:3000/products")
    .then(data => data.json())
    .then(res => console.log(res));


}());