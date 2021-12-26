//import { useState } from "react/cjs/react.development";
import React,{useState} from "react";

const Helper=({item,index,handleChange})=>{
    const [depecrated,setDepcrated]=useState(()=>item.completed?'none':'line-through')
 
        return <div className="flexing-center space item" key={item.name}>
        <p style={{textDecoration:depecrated}}>{item.name}</p>
        {item.completed?<i className="fas fa-check"  onClick={()=>{handleChange(index);
        setDepcrated('line-through');    
    }}></i>
        : <i  className="fas fa-times" onClick={()=>{handleChange(index);setDepcrated('none');}}></i>}                  
        </div>
    
}
export default Helper