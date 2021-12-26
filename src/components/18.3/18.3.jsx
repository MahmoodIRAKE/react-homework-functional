import React,{useState} from "react";
import '../../utils/utils.css'
const Ex183=()=>{
  const[clock,setClock]=useState({
      seconds:0,
      mins:0,
      hour:0
  })

  const handleChange=(e)=>{
      const{name,value}=e.target;
      if(name==='seconds'){
        setClock({seconds:value,
            mins:value/60,
            hour:value/60/60,
        })
      }
      if(name==='mins'){
        setClock({seconds:value*60,
            mins:value,
            hour:value/60,
        })
      }
      if(name==='hour'){
        setClock({seconds:value*60*60,
            mins:value*60,
            hour:value,
        })
      }
   

  }
  
   return <div className="flexing-center col">
        <label>Seconds</label>
       <input type="number" name='seconds' onChange={(e)=>handleChange(e)} value={clock.seconds}/>
       <label>Minutes</label>
       <input type="number" name='mins' onChange={(e)=>handleChange(e)} value={clock.mins}/>
       <label>Hours</label>
       <input type="number" name='hour' onChange={(e)=>handleChange(e)} value={clock.hour}/>


   </div>
}
export default Ex183;