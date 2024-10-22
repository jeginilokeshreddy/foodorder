//https://chatgpt.com/share/67163809-9520-8001-98b3-263c655cd179 -----------------promise are used to handel async operatorion to call then and fetch method

// promises are used to give some data to the other function call with the help of then method
//Promises are used to handel the Asynchronous operations
//With help of Promises we can not create Asynchronous Operations
//with the help of promise method by uing promises call back we can trigger resove or reject
//that resolve or reject function will give the promise result to the then or catch method

//when we have time consuming code , while running it will block the main thread code
//how can we run this time consuming code into the seperate thread
//with the help of timerfunction run the time consuem code on the sepetaed thread or fetch method
// with the help of promise we can handel Ascyn functions 
//we can pass the async function result to the other function with the help with the help of the then to the call the other function

//once running complted then call other function for passing input to the other function
//block main thread  how to avoid while running the long running code
//while
//to over code callback hell we are using the promises
//

console.log("line-1");
console.log("line-2");
// -------------------------------------------------With out set time out it will run the Synchronous------------------------
// function retunpromiseobject(){
//     let data=new Promise((resolve,reject)=>{
//         for (let i = 0; i <= 10000000000; i++) {
//           if (i == 10000000000) {
//             resolve(1000000000);

//           }
//         }
//         reject("lllllllllllllllllll")
//     })
//     console.log("inside block");
//     console.log("inside block");
//     return data
// }

fetch("")

// time consume to run and execute code block occurs 
// time consume ,timers,fetch(),asyac await



// --------------------------------------------with the help oftimer we will made Async---------------- to ove come the block
function retunpromiseobject() {
  let data = new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i <= 10000000000; i++) {
        if (i == 10000000000) {
          resolve(1000000000);
        }
      }
      reject("lllllllllllllllllll");
    }, 0);
  });
  console.log("inside block");
  console.log("inside block");
  console.log(data);
  return data;
}
retunpromiseobject();
// retunpromiseobject()
//   .then((data1) => {
//     console.log(data1 + "THEN MEHOD OUTPUT");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// //THEN AND catch will call once the promise will reslove untill i will not call
// console.log("line-3");
// console.log("line-4");


// // --------------------------------Fecth method-------------------------------- fetch is a inbuild function definiton 
// // how we create on the above retunpromiseobject this function definiton same like
// // we call and use fetch method resolve and reject will handel by inbuild function definitin
// console.log("Before fetch");

// fetch('https://api.example.com/data')
//     .then(response => response.json())
//     .then(data => console.log("Data received:", data));

// console.log("After fetch");
// // Output Timing:
// // "Before fetch" will be logged immediately.
// // "After fetch" will also be logged immediately, as the fetch operation is asynchronous.
// // The log "Data received:" will appear once the fetch completes, which could take some time depending on the factors mentioned above.