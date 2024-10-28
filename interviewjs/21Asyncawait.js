// convert synchronous to asynchronous by using the timer method ---creat Async nature
//handing Async result and call other function with the help of then
//asyc 
//await
//when the asyc function will call the awaith key word then the entier function become asycn that mean the function def run synchronlusly
//outside the function code will not block the Async function
//here method chail will not works



 console.log("line-1");
 console.log("line-2");
 // -------------------------------------------------With out set time out it will run the Synchronous------------------------
//   async function retunpromiseobject(){
//      let data=await new Promise((resolve,reject)=>{
//          for (let i = 0; i <= 10000000000; i++) {
//            if (i == 10000000000) {
//              resolve(1000000000);

//            }
//          }
//          reject("lllllllllllllllllll")
//      })
//      console.log("inside block");
//      console.log("inside block");
//      return data
//  }
// retunpromiseobject();
 // --------------------------------------------with the help oftime we will made Async---------------- to ove come the block
 async function retunpromiseobject() {
   let data = await new Promise((resolve, reject) => {
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
   return data;
 }

 retunpromiseobject();
  console.log("outside the  block");
  

//  retunpromiseobject()
//    .then((data1) => {
//      console.log(data1 + "THEN MEHOD OUTPUT");
//    })
//    .catch((err) => {
//      console.log(err);
//    });
//  //THEN AND catch will call once the promise will reslove untill i will not call
//  console.log("line-3");
//  console.log("line-4");


// const execute = async () => {
//   const result = await longRunningTask(); // Wait for the promise to resolve
//   console.log(result); // This will log after the promise is resolved
// };