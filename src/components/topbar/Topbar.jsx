
import React, { useState, useEffect }from "react";
import axios from "axios";
import "./Topbar.scss";
import SearchIcon from "@mui/icons-material/Search";

// when we use await we will not use the then for getting the promise result 
// when we willnot  use then we will not use the catch method in the await concept
// due to that only we will use the try and catch

// let postdata = async () => {
//   try{
//     let details = await axios.post("http://localhost:4444/products", {
//       category: "Electronics",
// description: "4K HD Webcam with noise reduction and low-light correction.",
// name: "HD Webcam",
// price: 39.99,
// rating: 4.4,
// stock: 60,
// })
//     let details1 = await details
//     console.log(details1)
//     debugger
//   }
//   catch{
//     console.log("api failed")
//   }
 

// }
// let details = await axios.get("http://localhost:4444/products") rewuest we will prform with the help of axios aand fetch method by sendign input --request means calling when we call we will get response from that method for the given inputs
//request ok with the help of inputs
//response promise object we will get the output what releated output we will get that is my problem

// req res


// fetch(inputs)
// axios(input)
// crud
// get
// post
// put
// delete
// req- function call with some input aruguments
// res output 

let postdata = async () => {
  try {
    let details = await axios.post("http://localhost:4444/products", {
      category: "Electronics",
      description: "4K HD Webcam with noise reduction and low-light correction.",
      name: "HD Webcam",
      price: 39.99,
      rating: 4.4,
      stock: 60,
    });
    console.log("Data posted successfully:", details.data);
    debugger;
  } catch (error) {
    console.error("API failed:", error);
  }
};

const Topbar = () => {
  const [apidata,setapidata]=useState(null)
  useEffect((()=>  {
    let data = async () => {
      let datawithoutaxios = axios.get("http://localhost:4444/products")
      let details = await axios.get("http://localhost:4444/products")
      // let details1 = await details
      console.log(details.data)
      debugger
    }
    data()
  }), [apidata])
  return (
    <div className="Navbar_section row_section flex">
      <div className="logo_section flex">
        <h2>Tasty food</h2>
      </div>
      <div className="search_section flex ">
        {/* <label htmlFor="search_icon"></label> */}
        <input
          className="input"
          id="search_icon"
          type="search"
          placeholder="Search for Resturant and food"
        />
        <SearchIcon className="search_icon" />
      </div>
      <div className="login_section flex">
        <button className="Login button">Login</button>
        <button className="signup button " onClick={postdata}>SignUp</button>
      </div>

    </div>
  );
};

export default Topbar;
