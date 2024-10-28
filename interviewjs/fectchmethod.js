// let response=fetch("https://jsonplaceholder.typicode.com/todos");
// console.log(response);
// response.then((data)=>{
//  console.log(data);
//  return data.json()
// }).then((finalresult)=>{
// console.log(finalresult);
// }).catch((err)=>{
//     console.log(err)
// })

// console.log("line-1")
// async function getTodolist(){
// let response= fetch("https://jsonplaceholder.typicode.com/todos");
// console.log(response);
// response.then((data)=>{
//  console.log(data);
//  return data.json()
// }).then((finalresult)=>{
// console.log(finalresult);
// }).catch((err)=>{
//     console.log(err)
// })
// }
// setTimeout(()=>{
//     getTodolist();
// },0)
// console.log("line-2");

// how to make the  getTodolist() as asynchronius function

// note:when we use awit then will not work for handling
// Let's walk through the execution of your code step by step to understand what will happen and what will be printed to the console.
// console.log("line-1")
//  function getTodolist(){
// let response= fetch("https://jsonplaceholder.typicode.com/todos");
// console.log(response);
// response.then((data)=>{
//  console.log(data);
//  return data.json()
// }).then((finalresult)=>{
// console.log(finalresult);
// }).catch((err)=>{
//     console.log(err)
// })
// }
// getTodolist()
// console.log("line-2");

// code running process not understand which code will run sequence order

// which code will not run in the sequence order
// code calling
// code running
// code execution
// -------------------------------------------synchronous--------------------
// console.log("line-1");
// console.log("line-2");

// for(let i=0; i<=1000000000000;i++){
//     if (i == 1000000000000) {
//       console.log(1000000000000);
//     }
// }
// console.log("line-3");
// console.log("line-4");

// -------------------------------------------Asynchronous-------------------- by using the setmethod

// console.log("line-1");
// console.log("line-2");

// setTimeout(() => {
//   for (let i = 0; i <= 10000; i++) {
//     if (i == 10000) {
//       console.log(1000000000000);
//     }
//   }
// }, 0); // Delay of 0 ensures the loop is pushed to the next event cycle

// console.log("line-3");
// console.log("line-4");

// -------------------------------------------Asynchronous-------------------- by using the setmethod with function call

// console.log("line-1");
// console.log("line-2");
// function getdata(){
//     for (let i = 0; i <= 10000; i++) {
//       if (i == 10000) {
//         console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
//       }
//     }
// }

// setTimeout(() => {
//   getdata();
// }, 0); // Delay of 0 ensures the loop is pushed to the next event cycle

// console.log("line-3");
// console.log("line-4");
// --------------------------------------------promise-Async-await-------------------------------------- this alos blockign code

// console.log("line-1");
// console.log("line-2");
// let data=new Promise((resolve,reject)=>{
//           for (let i = 0; i <= 1000000000000000000; i++) {
//             if (i == 1000000000000000000) {
//               resolve("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
//             }

//           }
//           reject("lllllllllllllllllllllllll");
// })

// console.log(data);

// console.log("line-3");
// console.log("line-4");
// ------------------------------------------how to over come the block by uing other method-------------------------------

// console.log("line-1");
// console.log("line-2");
// let data = new Promise((resolve, reject) => {
//   for (let i = 0; i <= 1000000000000000000; i++) {
//     if (i == 1000000000000000000) {
//       resolve("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
//     }
//   }
//   reject("lllllllllllllllllllllllll");
// });

// data.then((result)=>{
// return result.json()
// }).then((output)=>{
//     console.log("thenoutpurnjdsvn" + output);
// }).catch((err)=>{
//   console.log(err)
// })

// console.log("line-3");
// console.log("line-4");

// ------------------------------------------how to over come the block by uing other method------------------------------- then and catch alos bloking nedd to make the promise into async promise creation need to be async function def

// console.log("line-1");
// console.log("line-2");
//  function userdata(){
//     let data = new Promise((resolve, reject) => {
//   for (let i = 0; i <= 1000000; i++) {
//     if (i == 1000000) {
//       resolve("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
//     }
//   }
//   reject("lllllllllllllllllllllllll");

// });
// return data;
// }
// // data.then((result)=>{ here we are calling function to get the promise as result from that promise we are using tehcn and catch

//   userdata()
//     .then((result) => {
//     //   return result.json();
//     console.log("Promise resolved with: " + result);
//     })
//     .then((output) => {
//       console.log("thenoutpurnjdsvn" + output);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

// console.log("line-3");
// console.log("line-4");
// // ------------------------------------without promise less loop-----------------

// console.log("line-1");
// console.log("line-2");
// function userdata() {

//     for (let i = 0; i <= 1000000000; i++) {
//       if (i == 1000000000) {
//         console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
//       }
//     }

// }
// // data.then((result)=>{ here we are calling function to get the promise as result from that promise we are using tehcn and catch

// userdata()

// console.log("line-3");
// console.log("line-4");

// ------------------------------------without promise less loop-----------------by using the promise

// console.log("line-1");
// console.log("line-2");
// function userdata() {
//  let data = new Promise((resolve, reject) => {
//     for (let i = 0; i <= 1000000000; i++) {
//       if (i == 1000000000) {
//             resolve("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
//       }
//     }
// reject("lllllllllllllllllllllllll");
// })

//  return data;
// }
// // data.then((result)=>{ here we are calling function to get the promise as result from that promise we are using tehcn and catch

// // userdata()
//   userdata()
//     .then((result) => {
//     //   return result.json();
//     console.log("Promise resolved with: " + result);
//     })
//     .then((output) => {
//       console.log("thenoutpurnjdsvn" + output);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

// console.log("line-3");
// console.log("line-4");

// ---------------------------------Fetch------------------------
let data = fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(data);
data.then((response) => {
  console.log(response.json());
  response.json().then((arraydata) => {
    console.log(arraydata);
  });
});
