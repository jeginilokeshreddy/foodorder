// syncchronous vs ascyn conversion

const { Send } = require("@mui/icons-material");

//---------------------------------------- synchronous-------------------------------
// console.log("line-1");
// console.log("line-2");
//   for (let i = 0; i < 1000; i++) {
//     console.log(i);
//   }
// console.log("line-3");
// console.log("line-4");

// ----------------------------------// assynchronous---------------------------------
// console.log("line-1");
// console.log("line-2");
// setTimeout(()=>{
//     for (let i = 0; i < 1000; i++) {
//       console.log(i);
//     }
// },0)
// console.log("line-3");
// console.log("line-4");
// https://www.youtube.com/live/aUDMHTo78c8?si=IsyYxBWa4ENygf_6
// video-2

const getFacebookuserfromfacbook = () => {
  //api call
  let details = [{ name: "murali" }, { name: "lokesh" }, { name: "jeranp" }];
  return details;
};
const getPostforuser = (user) => {
  //api call
  let post = [{ titel: "good day" }, { titel: "very nice day" }];
};

console.log("line-1");
console.log("line-2");
setTimeout(() => {
   let users=getFacebookuserfromfacbook();
  setTimeout(()=>{
      getPostforuser(users);
  },0)
}, 0);
console.log("line-3");
console.log("line-4");

// this will through refference erroe
//  users = getFacebookuserfromfacbook();
//  getPostforuser(users);
//  let users = getFacebookuserfromfacbook();
//   getPostforuser(users); parameter namers are create link between the functions 

// functioncall(paramername) nee to be varible definition
// function definiton(arumant,arugument)// no var keywords


// here we called seperately
setTimeout(() => {
  let users = getFacebookuserfromfacbook();
  setTimeout(() => {
    getPostforuser(users);
  }, 0);
}, 0);

// here we called the function inside sinlge set time out (both the function will act line asyc)
setTimeout(() => {
  let users = getFacebookuserfromfacbook();
  
    getPostforuser(users);
  
}, 0);

// why i go for the cb type


const getFacebookuser = (cb) => {
  //api call
  let details = [{ name: "murali" }, { name: "lokesh" }, { name: "jeranp" }];
  cb(details);
};
const getPostforusers = (user) => {
  //api call
  let post = [{ titel: "good day" }, { titel: "very nice day" }];
};

// ye function ki avithe input recive chesukomutdho adi vahci ch paramerter avuthumhdi

// paraemrs Send -- bcome main function for calling cb function
// parameter recive --become cb function


// setTimeout(() => {
//   let users = getFacebookuser();

//   getPostforusers(users);
// }, 0);

//why we use the cb meethod instaed of the above method in the above emthod alos users are sending to the  getPostforusers function
setTimeout(()=>{ 
getFacebookuser(getPostforusers);
},0)

// in the above method i pass the cb function directctly with out any delay

setTimeout(() => {
  getFacebookuser((user) => {
    setTimeout(() => {
      getPostforusers(user[0], (post) => {
        setTimeout(() => {}, 0);
      });
    }, 0);
  });
}, 0);

// in the second method i create ananomous function inside that function i call the depend function this entire function send as arugument to the main function

// setTimeout(() => {
//   let users = getFacebookuser();
//   getPostforusers(users);
// }, 0);

// setTimeout(() => {
//   let users = getFacebookuser();
//    setTimeout(() => {
//      getPostforusers(users);
//    }, 0);
// }, 0);
// ---------------------------callback hell--------------
setTimeout(() => {
  getFacebookuser((user)=>{
     setTimeout(()=>{
      getPostforusers(user[0],(post)=>{
        setTimeout(()=>{},0)
      });
     },0)
  });
}, 0);
