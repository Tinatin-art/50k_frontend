// Урок 60 Прием модуль, как и зачем его использовать  Д/з 60
function sayHello1() {
    "use strict";

    const user = {

        name: window.prompt("Enter your name: ", ""),
        surname: window.prompt("Enter your surname: ", ""),
        dateOfBirth: window.prompt("Enter your dateOfBirth: ", ""),
        placeOfBirth: window.prompt("Enter your placeOfBirth: ", ""),

        get user1() {

            return `${this.name} ${this.surname} ${this.dateOfBirth} ${this.placeOfBirth}`;
        },
        set user1(value) {

            this.dateOfBirth = value;
            if (typeof value === 'number') {
                console.log(user.dateOfBirth);
            } else {
                alert("Введите дату");
            }
        }

    };

    console.log('NameOfUser: '.bold(),user.name);
    console.log('Surname: '.bold(), user.surname);
    console.log('YearOfBirth: '.bold(), user.dateOfBirth);
    console.log('PlaceOfBirth: '.bold(), user.placeOfBirth);




}
export default sayHello1;