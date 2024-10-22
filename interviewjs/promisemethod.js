// asynchronous operations  means it will take some time to get result from some place 

// when we call something it will take some time to get get result that this we call  asynchronous operations (which is waiting for rwsults )

// promises are used to convert any function into asynchronius or handel asynchronus operations give in the two lines
// -------------------------------------------synchronous-define inside function it will not retun anything--------------------
// -------------------------write the bloking code inside the promise method and write entire thing inside the function then call the function -----
// --------------a function which writen promise object it act like asynchornoue -----------------

// console.log("line-3");
// console.log("line-4");
// -------------this will not block the main thread--------------------when we handel the promise object by using the then and catch

// synchronous output allway calling order abd block will come 
//identiy the blokcing step make it the asyn
//datasharing from the executin
// console.log("line-1");
// console.log("line-2");

function retunpromiseobject() {
  let data = new Promise((resolve, reject) => {
     for (let i = 0; i <= 1000000000; i++) {
       if (i == 1000000000) {
         resolve(1000000000);
       }
     }
     reject("lllllllllllllllllll");

     return data;
  });
  // console.log(data)
  return data
}
retunpromiseobject().then((data1)=>{
    console.log(data1);
}).catch((err)=>{
    console.log(err)
});

console.log("line-3");
console.log("line-4");


// console.log("line-1");
// console.log("line-2");

// async function returnPromiseObject() {
//   let data = await new Promise((resolve, reject) => {
//     for (let i = 0; i <= 1000000000; i++) {
//       if (i === 1000000000) {
//         resolve(1000000000); // Resolve when the loop completes
//       }
//     }
//     reject("Error occurred"); // This won't be hit in this case
//   });

//   return data; // Return the resolved data
// }

// // Call the async function and handle the result
// returnPromiseObject()
//   .then((data1) => {
//     console.log(data1); // Log the resolved value
//   })
//   .catch((err) => {
//     console.log(err); // Log any errors
//   });

// console.log("line-3");
// console.log("line-4");
