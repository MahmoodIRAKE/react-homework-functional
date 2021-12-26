import React,{useState} from "react";
import './18.2.css'
import'../../utils/utils.css'
import Helper from "./helper";


const Ex182=()=>{
  const[todo,setTodo]=useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
    ])
  
    
    const handleChange=(e)=>{
       todo[e].completed=!todo[e].completed

    }
    
  

    const display=()=>{
        return todo.map((item,index)=>{
            
          return <Helper item={item} index={index} handleChange={handleChange} key={item.name}/>
        })
    }


 return(
    <div className="flexing-center col">
        {display()}
    </div>
  );
}
export default Ex182;