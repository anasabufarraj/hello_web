// JavaScript Variables
// © Goyoom, Inc.
// May 21, 2020

// 2.7. Truthy and Falsy -------------------------------------------------------
// let a = 0;
// console.log(Boolean(a));

// 2.8. Operators --------------------------------------------------------------
// let a = 0;
// let b = !!a; // bang bang
// console.log(b);

// let a = [1, 2, 3];
// console.log(delete a[0]); // true
// console.log(delete a); // false, cannot delete an array
// console.log(a); // [empty, 2, 3]
//
// let b = 5;
// console.log(delete b); // false, cannot delete a variable

// For loop --------------------------------------------------------------------
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// For...of loop ---------------------------------------------------------------
// let a = ['a', 'b', 'c', 'd'];
// for (let val of a) {
//     console.log((val += ' hello_web'));
// }

// While loop and break ------------------------------------------------------------------
// let a = 0;
// while (a >= 0) {
//     console.log(a);
//     a++;
//     if (a === 12) {
//         break;
//     }
// }

// 2.10. Debugging Using The console Object ------------------------------------
// console.log('hello_web!');
// console.info('hello_web!');
// console.warn('hello_web!');
// console.error('hello_web!');
// console.clear();

// if statement ----------------------------------------------------------------
// let a = 0;
// if (a) {
//     console.log('True');
// } else if (a === 5) {
//     console.log('Five');
// } else {
//     console.log('False');
// }

// 2.40. Optional else if Block ------------------------------------------------
// let a = true;
//
// if (a) {
//     console.log(`True: ${a}`);
// } else {
//     if (!a) {
//         console.log(`False: ${a}`);
//     } else {
//         console.log(`Don't know: ${a}`);
//     }
// }

// 4.7. Template Literals ------------------------------------------------------
let currentYear = 2020;
let birthYear = 1979;
let long = 125;

// ES5
// console.log(currentYear - birthYear + ' ' + 'Years old');
// console.log('My long is ' + long);

// ES6
console.log(`${currentYear - birthYear} Years old`);
console.log(`My long is ${long}cm`);
