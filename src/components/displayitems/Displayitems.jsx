import React from "react"
import "./Displayitem.scss"
import itemimages from "../../asserts/Itemimages"

const Displayitem=()=>{
    return(
        <div className="Displayitem_section row_section flex">
            {itemimages.map((item,index)=>{
               return <img className="item_image" src={item.imagepath} alt="item not found" key={index}/>
            })}
        </div>
    )
}
export default Displayitem