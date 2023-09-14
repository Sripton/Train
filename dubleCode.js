// Задача: дублирующий кодер
// Цель этого упражнения — преобразовать строку в новую строку, где каждый символ в новой
// строке — это «(», если этот символ встречается в исходной строке только один раз, или
// «)», если этот символ встречается в исходной строке более одного раза. Нужно
// игнорировать заглавные буквы при определении, является ли символ дубликатом.

// Требуемый результат
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// Решение 1
// const duplicateEncode = (word) => {
//     let str = '';
//     //Перевод строк в нижний регистр 
//     for(let i = 0; i < word.length; i++){
//         const words = word.charCodeAt(i);
//             if(words>= 65 && words < 90){
//                 str += String.fromCharCode(words + 32);
//             }else {
//                 str += word[i];
//             }
//         }
//         const array = [];
//         for(let i = 0; i < str.length; i++){
//             array.push(str[i]);
//         }
//         let result = '';
//         let obj = {};
//         for(let i = 0; i < array.length; i++){
//             obj[str[i]] = (obj[str[i]] || 0) + 1;
//         }
//         for(let i = 0; i < array.length; i++){
//             if(obj[array[i]] > 1){
//                 result += ')'
//             }else {
//                 result += '('
//             }
//         }
//         return result
// }
// console.log(duplicateEncode("din" )); // (((
// console.log(duplicateEncode("recede" )); // ()()()
// console.log(duplicateEncode("Success")); // )())())
// console.log(duplicateEncode("(( @" )); // ))((

//  Решение 2
// const duplicateEncode = (word) => {
//     let words = '';
//     const array = [];
//     for(let i = 0; i < word.length; i++){
//         array.push(word.charCodeAt(i));
//     }
//     const obj = {};
//     for(let i = 0; i < array.length; i++){
//         obj[array[i]] = (obj[array[i]] || 0) + 1;
//     }
//     for(let i = 0; i < array.length; i++){
//         if(obj[array[i]] > 1){
//             words += ')'
//         }else {
//             words += '('
//         }
//     }
//     return words
// }
// console.log(duplicateEncode("din" )); // (((
// console.log(duplicateEncode("recede" )); // ()()()
// console.log(duplicateEncode("Success")); // )())())
// console.log(duplicateEncode("(( @" )); // ))((

// Решение 3 
// const duplicateEncode = (word) => {
//     return word.toLowerCase().split('')
//     .map((elem, _, arr) => arr.indexOf(elem) === arr.lastIndexOf(elem) ? '(' : ')').join('');
// }
// console.log(duplicateEncode("din" )); // (((
// console.log(duplicateEncode("recede" )); // ()()()
// console.log(duplicateEncode("Success")); // )())())
// console.log(duplicateEncode("(( @" )); // ))((


// Решение 4
// const helpFunction = (char) => {
//     let result = {};
//     for(let words of char){
//        result[words] ? result[words]++ : result[words]  = 1;
//     }
//     return result;
// }
// const duplicateEncode = (word) => {
//     const result = helpFunction(word.split(''));
//     return word.toLowerCase().split('')
//     .map((elem) => result[elem] > 1 ? ')' : '(').join('');
// }
// console.log(duplicateEncode("din" )); // (((
// console.log(duplicateEncode("recede" )); // ()()()
// console.log(duplicateEncode("Success")); // )())())
// console.log(duplicateEncode("(( @" )); // ))((


// Анализ 1
// const duplicateEncode = (word) => {
//     word = word.toLowerCase();
//     return word.replace(/./g, () => word + ' ');
// }
// console.log(duplicateEncode("din" )); // din din din 
// console.log(duplicateEncode("recede" )); // recede recede recede recede recede recede 
// console.log(duplicateEncode("Success")); // success success success success success success success 
// console.log(duplicateEncode("(( @" )); // (( @ (( @ (( @ (( @ 

// Анализ 2
// const duplicateEncode = (word) => {
//     return word
//     .replace(/./g, m => m.toUpperCase());
// }
// console.log(duplicateEncode("din" )); // DIN
// console.log(duplicateEncode("recede" )); // RECEDE
// console.log(duplicateEncode("Success")); // SUCCESS
// console.log(duplicateEncode("(( @" )); // (( @

 
// Решение 5
// const duplicateEncode = (word) => {
//     return word.toLowerCase()
//     .replace(/./g, m => word.indexOf(m) === word.lastIndexOf(m) ? '(' : ')')
// }
// console.log(duplicateEncode("din" )); // (((
// console.log(duplicateEncode("recede" )); // ()()()
// console.log(duplicateEncode("Success")); // )())())
// console.log(duplicateEncode("(( @" )); // ))((


