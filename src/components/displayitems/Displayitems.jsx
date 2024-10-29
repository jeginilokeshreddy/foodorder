
import React, { useState, useEffect, useRef } from "react";
import "./Displayitem.scss"
import itemimages from "../../asserts/Itemimages"
import axios from "axios";

export default function Displayitems() {
    const [countervalue, setCounterValue] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const intervelstop=useRef(null)
   
    const startfunction = () => {
        if (!isRunning){
            setIsRunning(true)
            intervelstop.current=setInterval(() => {
                setCounterValue((pre) => {

                    return pre + 1

                })
            }, 1000)
            console.log(intervelstop.current)
        }
    
    };
    const pausefunction = () => {
        setIsRunning(false)
        clearInterval(intervelstop.current)
        
        
    };
    const resetfunction = () => {
        setIsRunning(false)
        clearInterval(intervelstop.current)
        setCounterValue(0)
        
    };
  return (
    <div>
          <div className="Displayitem_section row_section flex">
              {itemimages.map((item, index) => (
                  <img className="item_image" src={item.imagepath} alt="item not found" key={index} />
              ))}
          </div>
          <h1>{countervalue}</h1>
          <button className="signup button" onClick={startfunction} >Start</button>
          <button className="signup button" onClick={pausefunction} >Pause</button>
          <button className="signup button" onClick={resetfunction} >Reset</button>
    </div>
  )
}
// 
// 
// 
// useState
// useRef
// setInterval(() => {
    
// }, interval);
// clearInterval
