

// function data(){
//     console.log("inside function before await ");
//     let details=3+5
//        console.log("inside function after await");

//     return details;
// }
// let output=data()
// console.log(output);
//  console.log("after function call");

// await will do 2 works 1)await we will use before promise object to handle the promise rsult easily
// when the awit key word will come come then function will act like ascy function
//async function will not block any main thread (what is main thread)
//asnc function run synchronously
async function data() {
  console.log("inside function before await ");
  let details = await 3 + 5;
  console.log("inside function after await");

  return details;
}
let output = data(); 
console.log(output); //always it will give promise
console.log("after function call");


async function data1() {
      console.log("inside function before await ");
    let fetchdetails=fetch('https://jsonplaceholder.typicode.com/todos/1')

  let details = (await 3) + 5;
  console.log("inside function after await");

  return details;
}
let output1 = data();
console.log(output); //always it will give promise
console.log("after function call");
