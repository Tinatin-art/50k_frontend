// Урок 56 Работа с  localStorage
// Дз/56
// 1. создать лист списков с помощью js 
// 2. сохранить этот список в localstorage 


(function () {

  'use strict';

  class cardProduct {

    constructor(tool, toolClass, img, title, originPrice, oldPrice, innerBlock) {
      this.tool = tool;
      this.toolClass = toolClass;
      this.img = img;
      this.title = title;
      this.originPrice = originPrice;
      this.oldPrice = oldPrice;
      this.innerBlock = document.querySelector(innerBlock);
      this.valuta = 85;
      this.originPrice = this.convertToUSD(this.originPrice);
      this.oldPrice = this.convertToUSD(this.oldPrice);
    }

    convertToUSD(price) {
      const result = price / this.valuta;
      return result.toFixed(2);
    }

    render() {
      const div = document.createElement('div');
      div.classList.add('prod');
      div.innerHTML = `
                          <div class="image">
                            <div class="tool ${this.toolClass}"><span>${this.tool}</span></div>
                            <img class="add_image" src=${this.img} alt="">
                            <div class="desc_img">
                              <i class="fas fa-arrows-alt"></i>
                              <span>Quick view</span>
                            </div>
                     
                          </div>
                          <div class="price">
                            <p><a class="ttl" href="#">${this.title}</a></p>
                            <div class="star-icons">
                              <ul class="star_wrap">
                                <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                <li class="review">
                                  <a class="view" href="#"><em>6 Review(s)</em></a>
                                </li>
                              </ul>
                            </div>
                            <div class="money">
                              <span class="currency"><span>$</span><span class="price_p">${this.originPrice}</span>
                              <del class="price_del"><span>$</span>${this.oldPrice}</del>
                            </div>
                            <div class="btns done">
                              <ul>
                                <li class="add_cart"><a href="#"><i class="fas fa-shopping-bag "></i></a></li>
                                <li class="add_price"><a href="#"><i class="fas fa-balance-scale"></i></a></li>
                                <li class="add_pic"><a href="#"><i class="fas fa-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
  `;

      this.innerBlock.append(div);
    }
  }

  new cardProduct(
    'New2',
    'tool',
    'img/img61.jpg',
    'Animal Print Sweatshirt 1',
    1000,
    1200,
    '.list_product'
  ).render();

  new cardProduct(
    'New2',
    'tool2',
    'img/img50.jpg',
    'Animal Print Sweatshirt 2',
    1000,
    1200,
    '.list_product'
  ).render();

  new cardProduct(
    'New2',
    'tool',
    'img/img51.jpg',
    'Animal Print Sweatshirt 3',
    1000,
    1200,
    '.list_product'
  ).render();

  new cardProduct(
    'New2',
    'tool2',
    './img/img63.jpg',
    'Animal Print Sweatshirt 4',
    1000,
    1200,
    '.list_product'
  ).render();

  new cardProduct(
    'New2',
    'tool',
    'img/img18.jpg',
    'Animal Print Sweatshirt 5',
    1000,
    1200,
    '.list_product'
  ).render();


  // localStorage.setItem('user_name', "Tinatin");
  // localStorage.setItem('user_surname', "Omurova");
  // localStorage.setItem('user_age', 24);
  // localStorage.setItem('user_adress', "Bishkek");

  // let res = localStorage.getItem('user_name');
  // console.log(res);

  // localStorage.clear();

  let btnClick = document.querySelector(".form [name='save']");
  let btnReset = document.querySelector(".form [name='reset']");

  const check_name = localStorage.getItem('name');
  const check_surname = localStorage.getItem('surname');
  const check_number = localStorage.getItem('number');
  const check_addres = localStorage.getItem('addres');



  console.log(check_name);

  if (check_name || check_surname || check_number || check_addres) {
    document.getElementsByClassName("name")[0].value = check_name;
    document.querySelector("[name='surname']").value = check_surname;
    document.querySelector("[name='number']").value = check_number;
    document.querySelector("[name='addres']").value = check_addres;
  }

  btnClick.addEventListener("click", function (e) {

    e.preventDefault();
    const name = document.getElementsByClassName("name")[0].value;
    const surname = document.querySelector("[name='surname']").value;
    const number = document.querySelector("[name='number']").value;
    const addres = document.querySelector("[name='addres']").value;

    if (name && surname && number && addres) {
      localStorage.setItem('name', name);
      localStorage.setItem('surname', surname);
      localStorage.setItem('number', number);
      localStorage.setItem('addres', addres);
      alert("Данные сохранены");
    } else {
      alert("Поля не должны быть пустыми");
    }


  });


  btnReset.addEventListener("click", function (e) {

    e.preventDefault();

    localStorage.clear();

  });


  // Дз/56
  // 1. создать лист списков с помощью js 
  // 2. сохранить этот список в localstorage 

  let btnClick2 = document.querySelector(".form2 [name='save2']");

  btnClick2.addEventListener("click", function (e) {

    e.preventDefault();
    const height2 = document.getElementsByClassName("height2")[0].value;
    const weight = document.querySelector("[name='weight']").value;

    if (height2 && weight) {
      localStorage.setItem('name2', height2);
      localStorage.setItem('surname2', weight);
      alert("Данные сохранены");
    } else {
      alert("Поля не должны быть пустыми");
    }

  });

}());