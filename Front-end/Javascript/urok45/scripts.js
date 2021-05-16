// Урок 45

class ploshad{

  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  calcPloshad(){
    return this.width * this.height;
  }

  calcPloshad2(){
    return this.width + this.height;
  }

}

const area = new ploshad(5, 6);
const area2 = new ploshad(5, 6);
console.log(area.calcPloshad());
console.log(area2.calcPloshad2());

class ploshadText extends ploshad{
  // extands - связка двух классов

  constructor(width, height, text, value){
    super(width, height);

    this.text = text;
    this.value = value;
  }

  showText(){
    console.log( ` Text: + ${this.text} + | Value: ${this.value}`);
  }
}

const block = new ploshadText(10, 5, 'Ismar', 'Hello class');

block.showText();
console.log(block.calcPloshad());

// Д/з 45 урока

// 1, Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

class User{

  constructor(name, surname, year){
    this.name = name;
    this.surname = surname;
    this.year = year;
  }

  getFullName(){
    return this.name +' '+ this.surname;
  }

}

class Student extends User{

  constructor(name, surname, year, thisYear){
    super(name, surname, year);

    this.thisYear = thisYear;
  }

  getCourse(){
    return this.thisYear - this.year;
  }
  
}

const userInfo = new Student ('Tinatin', 'Omurova', 2016, 2021);
console.log(userInfo.getFullName());
console.log(userInfo.getCourse());