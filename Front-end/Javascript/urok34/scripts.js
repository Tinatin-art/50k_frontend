// Д.з 34 урока

// 1. Преобразуйте псевдо массив  в массив
// a) дан псевдо массив  {0: 'first', 1: 'second', 2: 'third', length: 3} 
//                        вывод [ "first", "second", "third" ]
// b) дан массив ["first", "second", "third" ]
// 		  вывод [ "f", "i", "r", "s", "t" ], [ "s", "e", "c", "o", "n", "d" ] [ "t", "h", "i", "r", "d" ] 

let arr = {0: 'first', 1: 'second', 2: 'third', length: 3};
console.log(Array.from(arr));

let arr2 = ["first", "second", "third" ];
let str = arr2.join('');
console.log(str.split(""));

