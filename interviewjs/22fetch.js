https://chatgpt.com/share/67195a6c-8b24-8001-920e-d0f6cca0eab3 --fetch vs axios












// let data = fetch("https://jsonplaceholder.typicode.com/posts");
// // console.log(data);
// data
//   .then((response) => {
//     console.log(response.json());
//     response.json().then((arraydata) => {
//       console.log(arraydata);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const { json } = require("react-router-dom");

// console.log("after then method");

let data = fetch("https://jsonplaceholder.typicode.com/post");

data
  .then((response) => {
    // Parse the JSON from the response, returns a Promise
    return response.json();
  })
  .then((arraydata) => {
    // Handle the parsed data (arraydata is now the JSON data)
    console.log(arraydata);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("after then method");

// post method

let data1 = fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
// data



