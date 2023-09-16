// Задача: найдите недостающую букву
// Напишите метод, который принимает на вход массив последовательных (возрастающих) букв
// и возвращает отсутствующую букву в массиве. Вы всегда получите допустимый массив. И
// всегда будет отсутствовать ровно одна буква. Длина массива всегда будет не менее 2.
// Массив всегда будет содержать буквы только в одном регистре.

// Требуемый результат
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

// Решение 1
// const findMissingLetter = (arr) => {
//     for(let i = 1; i < arr.length; i++){
//         const prevCharCode =  arr[i-1].charCodeAt(0);
//         const currentCharCode = arr[i].charCodeAt(0);
//         if(currentCharCode  - prevCharCode > 1){
//             return String.fromCharCode(prevCharCode+1);
//         }
//     }
//     return null;
// }
// console.log(findMissingLetter(['a', 'b', 'd', 'e']));


// Проверка элементов в массив в правильной последовательности 
// const consecutive = (array) =>  {
//     for(let i = 1; i < array.length; i++){
//         if(array[i-1] > array[i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(consecutive([4,2,8])); // false
// console.log(consecutive([4,2,8])); // true

// Проверка элементов в массив в правильной последовательности 
// const consecutive = (array) => {
//     for(let i = 1; i < array.length; i++){
//         if(array[i-1] > array[i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(consecutive(['b', 'a', 'c', 'e'])); // false
// console.log(consecutive(['a', 'b', 'c', 'e'])); // true


// Решение 2 
// const findMissingLetter = (array) => {
//     let first = array[0].charCodeAt(0);
//     for(let i = 1; i < array.length; i++){
//        if(first + i !== array[i].charCodeAt(0)){
//         return String.fromCharCode(first + i);
//            }
//     }
//     throw new Error("Invalid input")
// }
 // console.log(findMissingLetter(['a', 'b', 'd', 'e'])); // true
 // console.log(findMissingLetter(['b', 'a', 'c', 'e'])); // false

 // Решение 3 через slice
 // Анализ 
//  const findMissingLetter = (array) => {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//     const start = alphabet.indexOf(array[0]);
//     return alphabet.slice(start, start + array.length);
//  }
//   console.log(findMissingLetter(['a', 'b', 'd', 'e'])); // [ 'a', 'b', 'c', 'd' ]
//  console.log(findMissingLetter(['a', 'b', 'c', 'e'])); // [ 'a', 'b', 'c', 'd' ]

 // Решение 3 
//  const findMissingLetter = (array) => {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//     const start = alphabet.indexOf(array[0]);
//     return alphabet.slice(start, start + array.length).find((elem) => !array.includes(elem));
//  }
//  console.log(findMissingLetter(['a', 'b', 'd', 'e']));  // c 
//  console.log(findMissingLetter(['a', 'b', 'c', 'e']));  // d

// Решение 4
// const findMissingLetter = (array) => {
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     if(array[0] === array[0].toUpperCase()){
//         alphabet = alphabet.toUpperCase();
//     }
//     alphabet = alphabet.split('');
//     const  start = alphabet.indexOf(array[0]);
//     const alphabetSlice = alphabet.slice(start, start +  array.length);
//     return alphabetSlice.filter((elem) => !array.includes(elem));
// }
//  console.log(findMissingLetter(['a', 'b', 'd', 'e'])[0]);  // c
//   console.log(findMissingLetter(['A', 'B', 'C', 'E'])[0]);  // D










