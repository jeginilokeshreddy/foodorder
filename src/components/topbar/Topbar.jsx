import React from "react";
import "./Topbar.scss";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
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
        <button className="signup button">SignUp</button>
      </div>
    </div>
  );
};

export default Topbar;
