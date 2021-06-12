// Урок 50 и д/з 50 
// с помощью промисов надо добавить ссылки на эти файлы в наш html
// после того как появились  скрипты результат должен быть такой 


(function () {
    'use strict';

    // console.log("Запрос данных ...");

    // const req = new Promise(function (resolve, reject) {

    //     setTimeout(() => {
    //         console.log("Обработка данных ...");

    //         const data = {
    //             name: 'Product',
    //             price: 5000
    //         };
    //         resolve(data);

    //     }, 1500);

    // });

    // req.then( data =>{

    //     // const req2 = new Promise(function(resolve, reject){

    //     return new Promise(function(resolve, reject){

    //         setTimeout(() => {

    //             data.status = "order";

    //             resolve(data);

    //         }, 2000);

    //     }).then(data => {
    //         data.modify = "modify";
    //         return data;
    //             // console.log(data);
    //         }).then(data => {
    //             console.log(data);

    //         }).catch(()=>{

    //             console.log("Ошибка получения данных");


    //         }).finally(()=>{

    //             console.log("Очистка данных");

    //         });

    //     // req2.then(data => {
    //     //     console.log(data);
    //     // });

    // });

    // const test = time => {
    //     return new Promise(resolve => {
    //         setTimeout(() => resolve(), time);
    //     });
    // };

    // test(1000).then(() => console.log("Time is 1000"));
    // test(2000).then(() => console.log("Time is 2000"));

    // Promise.all([test(1000), test(2000)]).then(()=>{
    //     console.log("All done");
    // });


    // Promise.race([test(1000), test(2000)]).then(()=>{
    //     console.log("All done");
    // });

    // const url = new Promise(function(resolve, reject){

    //     var urls = [
    //         "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js ",
    //         "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
    //     ];

    // });



}());

// Д/з 50
// с помощью промисов надо добавить ссылки на эти файлы в наш html
// после того как появились  скрипты результат должен быть такой 

(function httpGet() {
    "use strict";

    const scriptUrl = new Promise(function (resolve, reject) {

        const url = [
            "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        ];

        const url2 = [
            "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
        ];

        function getUrl() {
            url.forEach(() => {
                document.head.innerHTML += `<script src="${url[0]}"></script>
                <script src="${url2[0]}"></script>`;
            });
        }

        resolve(getUrl());

    })
    scriptUrl.then(() => {
        console.log("Успешно вывели скрипты");
    });



    // const url = [
    //    "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
    // ];

    // const url2 = [
    //     "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
    // ];

    // function getUrl(){

    //     url.forEach(()=>{
    //         document.head.innerHTML  += `<script src="${url[0]}"></script>
    //         <script src="${url2[0]}"></script>`; 
    //     });  
    // }

    // getUrl();

}());