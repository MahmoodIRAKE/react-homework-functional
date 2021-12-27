import React,{useState} from "react";
import '../../utils/utils.css'
const arr=[111]
const CheckBox=({})=>{
    const [arr1,setArr1]=useState(arr)
    console.log(arr1===arr);
    const handleChange=(item)=>{
      
    }
  
   return <div className="flexing-center col">
       {arr1.map((item)=>{
         return <div><input type="checkbox" /> {item}</div>
       })}
         
   </div>
}
export default CheckBox;