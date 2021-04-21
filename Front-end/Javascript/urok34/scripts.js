// Д.з 34 урока

// дан объект person = {
// 	name: 'adilet',
// 	national: 'kyrgyz',
// 	age: 23,
// 	year: 1996,
// };
// с помощью деструктуризация сделайте такой вывод 
//  output:  name = ‘adilet’, national = ‘kyrgyz’, age = 23, year = 1996, все это не объект а отдельные переменные которые не относятся к объекту 

let persona = {
  	name: 'adilet',
  	national: 'kyrgyz',
  	age: 23,
  	year: 1996,
  };

console.log(persona);

let array2 = [];

for (i = 0; i < persona.length; i++){
  array2.push(persona[i]);
  console.log(persona[i]);
}