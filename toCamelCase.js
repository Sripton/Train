// Задача: преобразование строки в верблюжий регистр
// Завершите метод, чтобы он преобразовывал слова, разделенные тире/подчеркиванием, в
// верблюжий регистр. Первое слово в выводе должно быть написано с заглавной буквы только
// в том случае, если исходное слово было написано с заглавной буквы (известный как
// верхний верблюжий регистр, также часто называемый регистром Паскаля).

// Требуемый результат
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// Решение 1
// const toCamelCase = (str) => {
//     const changeSr =   str.replace(/\-/g, '_').split('');
//     let string = '';
//     for(let i = 0; i < changeSr.length; i++){
//         if(changeSr[i] === '_'){
//             changeSr[i+1] = changeSr[i+1].toUpperCase();
//         }
//     }
//     for(let i = 0; i < changeSr.length; i++){
//         string += changeSr[i];
//     }
//     return string
// }
// console.log(toCamelCase("the-stealth-warrior")); // the_Stealth_Warrior

// Решение 2
// const toCamelCase = (str) => {
//     let changeStr = '';
//     const array = [];
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === '-'){
//             array.push('_');
//         }else {
//             array.push(str[i]);
//         }
//     }
//    for(let i = 0; i < array.length; i++){
//     if(array[i] === '_'){
//         array[i+1] = array[i+1].toUpperCase();
//         changeStr += array[i];
//     }else {
//         changeStr += array[i];
//     }
//    }
//    return changeStr
// }
// console.log(toCamelCase("the-stealth-warrior"));  // the_Stealth_Warrior

// Решенеи 3 Правильное 
// const toCamelCase = (str) => {
//    let changeSr = '';
//    const array = [];
//    for(let i = 0; i < str.length; i++){
//     array.push(str[i]);
//    }
//    for(let i = 0; i < array.length; i++){
//     if(array[i] === '-' || array[i] === '_'){
//         array[i+1] = array[i+1].toUpperCase();
//         changeSr += array[i];
//     }else {
//         changeSr += array[i];
//     }
//    }
//    return changeSr.replace(/[\-\_]/g, '');
// }

// console.log(toCamelCase("the-stealth-warrior"));  // "theStealthWarrior"
// console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"

//  Решение 4
// const toCamelCase = (str) => {
//     const regExp = /[-_]\w/ig;
//     return str.replace(regExp, elem => {
//         return elem.charAt(1).toUpperCase();
//     });
// }
// console.log(toCamelCase("the-stealth-warrior"));  // "theStealthWarrior"
// console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"

//  Решение 5
// const toCamelCase = (str) => {
//     const array = str.split('');
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === '-' || array[i] === '_'){
//             array[i+1] = array[i+1].toUpperCase();
//             array[i] = ''
//         }
//     }
//     return array.join('')
// }
// console.log(toCamelCase("the-stealth-warrior"));  // "theStealthWarrior"
// console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"




