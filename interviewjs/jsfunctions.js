// const { Functions } = require("@mui/icons-material");
// https://chatgpt.com/share/671549c1-6ea0-8001-a359-0b48b31f790b call inside function
// https://chatgpt.com/share/671549f3-c3a4-8001-a820-0bd6c949df02 callback function

// // -------------------------------synchronous----------------------------------
// console.log("line-1");
// console.log("line-2");

//   for (let i = 0; i <= 1000000000; i++) {
//     if (i == 1000000000) {
//       console.log(1000000000);
//     }
//   }

// console.log("line-3");
// console.log("line-4");

// // -------------------------------Asynchronous----------------------------------
// console.log("line-1");
// console.log("line-2");
// setTimeout(() => {
//   for (let i = 0; i <= 1000000000; i++) {
//     if (i == 1000000000) {
//       console.log(1000000000);
//     }
//   }
// }, 0);

// console.log("line-3");
// console.log("line-4");
// ---------------------------------------------------functions---------------------------------------
// 1)how many ways we can call Functions
// 2)How to create Connection Between the function with the help of arugument call
//callback how we used for create function for sharing result
// function definiton -->parameters, argugument 

// ----------------------------------------call function seperately-----------------------------------------------

let value1=5;
let value2=5;

// let additionresult=function sum(a,b){    
//   let addition=a+b;
//   return addition
// }

// // console.log(additionresult(value1, value2));

let subtractionresult=function sub(a, b=2000) {
  let subtraction = a - b;
  return subtraction;
}
// // console.log(subtractionresult(value1, value2));


// let multiplicationnresult = function sub(a) {
//   let multiplication = a*a;
//   return multiplication;
// };
// // console.log(multiplicationnresult(value1));

// // ----------------------------------------call function seperately and send one function result to the other function with the help of arugument (here arugument name create connection between the functions)
//  //synchronous nature call two function seperately
// let additiondetails = additionresult(value1, value2);
//  console.log(multiplicationnresult(additiondetails));

// // ----------------Async nature call to function seperately

// let additionresult1=function sum(a,b){
//        setTimeout(() => {
//   let addition=a+b;
// //  return addition;
//  },0);
//  return 20;
// }

// // Function for multiplication
// let multiplicationnresult1 = function multiply(a) {
//   let multiplication = a * a;
//   return multiplication;
// };

// let additiondetails1 = additionresult1(value1, value2);
// // console.log(multiplicationnresult(value1));
// console.log(multiplicationnresult1(additiondetails1));

// -----------------------------------calling function inside function with out using callback for giving input-------------------------------------
// let additionresult3 = function sum(a, b) {
//   let addition = a + b;
//   // console.log(multiplicationnresult(addition));
//   return addition;
// };

// // let additionresult3 = function sum(a, b) {
// //     setTimeout(() => {
// //   var addition = a + b;
// //    },0);
// //   console.log(multiplicationnresult(addition));
// //   return addition;
// // };
// additionresult3(2, 2,);

// ----------------------------------calling function inside with with help of callback for giving input---------------------------------------------
// let additionresult2 = function sum(a, b, callback) {
//   let addition = a + b;
//   console.log(callback(addition));
//   return addition;
// };
// additionresult2(2000, 2000, subtractionresult);






