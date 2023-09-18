// Задача: перемещение нулей в конец
// Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя
// порядок остальных элементов.

// Требуемый результат
// moveZeros([false,1,0,1,2,0,1,3,"a"])
// // returns[false,1,1,2,1,3,"a",0,0]

// const moveZero = (arr) => {
//     const zero = [];
//     const result = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === 0){
//             zero.push(arr[i]);
//         }else {
//             result.push(arr[i]);
//         }
//     }
//     return result.concat(zero);
// }
// console.log(moveZero([false,1,0,1,2,0,1,3,"a"]));
// [
//     false, 1, 1,
//     2,     1, 3,
//     'a',   0, 0
// ]

// Решение 2 
// const moveZero = (arr) => {
//     return arr.reduce((prev, curr) => {
//         if(curr !== 0){
//             prev.unshift(curr);
//         }else {
//             prev.push(curr);
//         }
//         return prev
//     },[]);
// }

// console.log(moveZero([false,1,0,1,2,0,1,3,"a"]));
// [
//     'a',   3, 1,
//     2,     1, 1,
//     false, 0, 0
// ]