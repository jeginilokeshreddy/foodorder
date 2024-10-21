// console.log("line-1");
// console.log("line-2");
//   function synchronousfunction(){
// console.log("line-3");
//   }
//   synchronousfunction();

// console.log("line-4");

//making function in to async by uisng the settimeout()
// console.log("line-1");
// console.log("line-2");
//    function synchronousfunction(){
//    console.log("line-3");
//   }
//   setTimeout(()=>{
//      synchronousfunction();
//   },0)
 
// console.log("line-4");

//by uing async key can we make into asynchromous

// console.log("line-1");
// console.log("line-2");
// let details=async function synchronousfunction(){
//     console.log("line-3");
//    return 42
//   }
//   console.log(details());

// console.log("line-4"); 

// async-- async will not not the function as asynchonous
// 1)async keyword write Promise
// 2)when async function become synchronous and assynchronous


// console.log("line-1");
// console.log("line-2");
//it will display after some time delay bracus it is is async
// async function asynchronousFunction() {
//    let data1 =  await new Promise((resolve) =>{
//     resolve("cdcmcjdsnvfsv")
//   }
    
      
   
//   );
//   return data1;
// }
// console.log(asynchronousFunction());

// console.log("line-4");

async function asynchronousFunction() {
//   let data1 = await new Promise((resolve) => {
//     resolve("cdcmcjdsnvfsv");
//   });
//   return data1;
// return 4333333333333333333
//  await console.log("dsmbdsbisdk")
  let x=  4+5;  //this step is goin to take time (this is promise)
  console.log("dsjchsbvfnk")
     return x
}

// console.log("line-1");
// console.log("line-2");
// asynchronousFunction().then((result) => console.log(result));  // Logs resolved value of promise
asynchronousFunction() // Logs resolved value of promise
// console.log(asynchronousFunction());
console.log("line-4");


