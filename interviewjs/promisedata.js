//promise 
// promise have one executer function as arugument wich will give give output in the object format
//objet have this keys )prototype,2)promisestate-->pedning,fullfilled,reject 3)promise result (is our fianl outout data)
//resolve , reject
//promise is a tool which is going to handel async task easily
//promise are uns for woinig with asy and syn code
// ---------------------------

const { Functions } = require("@mui/icons-material");

// for each api call we will use seperate function
// -------------------------------------------------------return keyword vs promise object  -------------------------
// how return keyword act like inside function -->where we are called we will get swome data after execution completion same like that promises

// why we did not not use return method  
// when we are calling function   let users = getFacebookuserfromfacbook(); if it is asunchous it will take time to inject the data into the variblile,
//  getPostforuser(users); on that time userdata become undefine we get worong output -->wharn it is in async Nature
//to avid the above problem we choose the callback 
//but call back create call back hell problem
// setTimeout(() => {
//   let users = getFacebookuserfromfacbook();
//   setTimeout(() => {
//     getPostforuser(users);
//   }, 0);
// }, 0);
// -------------------------------------------------------------------------now we will discus about promise-----------------------------


// let userdata = new Promise((resolve,reject)=>{ here i wrire syntax as incorrect
//   //api call
//   let details = [{ name: "murali" }, { name: "lokesh" }, { name: "jeranp" }];
//  if(details>0){
//     resolve((details) => {
//     //   details;
//     return  details
//     });
//  }
//     else{
//         reject("data not found")
//     }
//   });
 

  let userdata = new Promise((resolve, reject) => {
    // Simulating API call with details array
    let details = [{ name: "murali" }, { name: "lokesh" }, { name: "jeranp" }];

    // Check if details array has data
    if (details.length > 0) {
      resolve(details); // Directly resolve with the details array
    } else {
      reject("Data not found"); // Reject if no data is found --rgis will consi t inbuild retun key word
    }
  });
//   console.log(userdata);


//   made into async by using the setime function whitel calling
function sum(){

}
  setInterval(()=>{
    sum()
  },0)
// made function def into async by using the async keyword
  async function sub() {}

  //make the promise into asyn by keeping inside another function and give the key word async

  const getdata = async () => {
    let userdata1 = new Promise((resolve, reject) => {
      // Simulating API call with details array
      let details = [
        { name: "murali" },
        { name: "lokesh" },
        { name: "jeranp" },
      ];

      // Check if details array has data
      if (details.length > 0) {
        resolve(details); // Directly resolve with the details array
      } else {
        reject("Data not found"); // Reject if no data is found --rgis will consi t inbuild retun key word
      }
    });
    return userdata1;
  };
  //getdata() here i call funtion it is asyn then i will write undefine then it wiil not to to then method or not how this method chail will work for the async
  getdata().then((data)=>{
    console.log(data);
  }).catch((err)=>{
     console.log(err)
  })

//   ----------------------------object method chain------------------------
// callback-conncetion are replaced with the object method chianging

// fetch willl take two thens to print proise object result


// we have two Functions
// 1)one for user getting
// 2)one for post getting
// 3)how this we are connection 
// 4)which function we use main function
// 5)which function we use child function like callback function
// 6)how we know which function we need to use parent function which function as call back fubction dhenini refference ga thisukumtamu for creating decision about this

// while we are calling function we will send arugument
// 1)thar are statcic 
// 2)or theough varible call
// 3)varible call will creare comnection
// ------------------------------doubt-----------------------------------
//syntax and working i understand but the connection between the function i am not clarity 
