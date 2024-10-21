
// -----------------------------------------promise------------------------ promiseobject+then will namke the function in to asyn

// console.log("line-1");
// console.log("line-2");
//  let data=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       for (let i = 0; i <= 1000000000; i++) {
//         if (i == 1000000000) {
//           resolve(1000000000+"lllllllllllllllllllllllllll");
//         }
//       }
//       reject((err)=>{
//         console.log(err)
//       })
//     }, 0);
//  })
//  console.log(data);
// console.log("line-3");
// console.log("line-4");
// -------------------promise will make ascy--------------------
// console.log("line-1");
// console.log("line-2");
// let data = new Promise((resolve, reject) => {
  
//     for (let i = 0; i <= 1000000000; i++) {
//       if (i == 1000000000) {
//         resolve(1000000000 + "lllllllllllllllllllllllllll");
//       }
//     }
//     reject((err) => {
//       console.log(err);
//     });
 
// });
// console.log(data);
// console.log("line-3");
// console.log("line-4");


// console.log("line-1");
// console.log("line-2");

// let data = new Promise((resolve, reject) => {
//   for (let i = 0; i <= 1000000000; i++) {
//     if (i == 1000000000) {
//       resolve(1000000000 + " lllllllllllllllllllllllllll");
//     }
//   }
// });

// data
//   .then((result) => {
//     console.log(result); // This will now log after the promise is resolved
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("line-3");
// console.log("line-4");
// -----------------------------------------async and awit----------- when the await will call the function become async
console.log("line-1");
console.log("line-2");

const longRunningTask = () => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i <= 1000000000; i++) {
      if (i == 1000000000) {
        resolve(1000000000 + " lllllllllllllllllllllllllll");
      }
    }
  });
};

const execute = async () => {
  const result = await longRunningTask(); // Wait for the promise to resolve
  console.log(result); // This will log after the promise is resolved
};

execute(); // Call the async function

console.log("line-3");
console.log("line-4");
// ----------------------------------------------------------------------------------------


// for is taking thime nedd to chnage tho asynhronous


// let syncfunction=async ()=>{
//     console.log(1)
//     console.log(2);
 
//     await new Promise((resolve) => {
//       for (let i = 0; i <= 1000000000; i++) {
//         if (i == 1000000000) {
//           resolve("Condition satisfied");
//         }
//       }
//     });
//        console.log(3);
//        console.log(4);
// }
// syncfunction()
// syncfunction() here loop is taking time for execution so i keep inside the settimeout function to over come the block issue

// setTimeout()  it will not run immediately
// Promise()
// async() -- the code ehich is presnt out side the function it will not block the code

// we are writeing code inside this methods


// let syncfunction = async () => {
//   console.log(1); // Synchronous, runs immediately
//   console.log(2); // Synchronous, runs immediately

//   let details = new Promise((resolve) => {
//     for (let i = 0; i <= 10000; i++) {
//       // Synchronous loop, blocking the main thread
//       if (i == 10000) {
//         resolve("Condition satisfied"); // Resolves asynchronously after loop finishes
//       }
//     }
//   });

//   // This adds a .then() handler to run when the Promise resolves, but the loop blocks the main thread
//   details.then(() => {
//     console.log("Promise resolved"); // Asynchronous, runs after the Promise resolves
//   });

//   console.log(3); // Synchronous, runs immediately
//   console.log(4); // Synchronous, runs immediately
// };
// syncfunction();






