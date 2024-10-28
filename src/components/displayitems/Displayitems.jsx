
import React, { useState, useEffect } from "react";
import "./Displayitem.scss"
import itemimages from "../../asserts/Itemimages"
import axios from "axios";

const Displayitem=()=>{
    useEffect(()=>{},[])
    const updatedata = async (e) => {
        debugger

        try {
            const response = await axios.put(`http://localhost:4444/products/1`, {
                name: "lokesh",
                category: "Accessories",
                price: 44444,
                stock: 500000,
            });
            console.log("Data updated successfully:", response.data);
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    const deletedata = async () => {
        try {
            const response = await axios.delete("http://localhost:4444/products/1");
            console.log("Data deleted successfully:", response.data);
            debugger
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };
   
    return(
        <>
       
        <div className="Displayitem_section row_section flex">
            {itemimages.map((item,index)=>{
               return <img className="item_image" src={item.imagepath} alt="item not found" key={index}/>
            })}
        </div>
       
            <button id="1" className="signup button "  onClick={(e)=>{
                updatedata(e.target.id)
            }}>updatedata</button>
            <button className="signup button " onClick={deletedata}>deletedata</button>
        </>
    )
}
export default Displayitem