// Задача: сумма цифр / цифровой корень
// Учитывая n, возьмите сумму цифр n. Если это значение имеет более одной цифры,
// продолжайте уменьшать таким образом, пока не будет получено однозначное число. Ввод
// будет неотрицательным целым числом.

// Требуемый результат
// 16 --> 1+6=7
// 942 --> 9+4+2=15 --> 1+5=6
// 132189 --> 1+3+2+1+8+9=24 --> 2+4=6
// 493193 --> 4+9+3+1+9+3=29 --> 2+9=11 --> 1+1=2

// Решение 1
// const digitalRoot = (n) => {
//     if(n < 10){
//         return n;
//     }
//     let str = n.toString();
//     let sum = 0;
//     for(let i = 0; i < str.length; i++){
//         sum += Number(str[i]);
//     }
//     return digitalRoot(sum);
// }
// console.log(digitalRoot(16));
// console.log(digitalRoot(942));
// console.log(digitalRoot(132189));
// console.log(digitalRoot(493193));

// Решение 2
// const digitalRoot = (n) => {
//    while(n > 9) {
//     n = (''+n).split('').reduce((sum, elem) => {
//         sum += Number(elem);
//         return sum;
//     },0)
//    }
//    return n;
// }
// console.log(digitalRoot(16)); // 7
// console.log(digitalRoot(942)); // 6
// console.log(digitalRoot(132189)); // 6
// console.log(digitalRoot(493193)); // 2
