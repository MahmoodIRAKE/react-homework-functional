import React,{useState} from "react";
import '../../utils/utils.css'
import CheckBox from "./checkBox";
const Ex184=()=>{
    const [arr,setArr]=useState(["one", "two", "three", "four", "five"])

  
   return <div className="flexing-center col">
           <button>delete</button>
           <button>reset</button>
           <CheckBox arr={arr}/>
   </div>
}
export default Ex184;