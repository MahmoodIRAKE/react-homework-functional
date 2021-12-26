import React,{useEffect, useState} from "react";
import '../../utils/utils.css'
import './18.1.css'
const ShowHide=({text,len})=>{
   const [show,setShow]=useState(text.slice(0,len)+'...');
   const [lenTemp,setLen]=useState(len)
   const [btnText,setBtnText]=useState('show more')


   const handleLen=()=>{
       if(btnText==='show more'){
          setLen(text.length);
          setBtnText('show less')
         
       }
       if(btnText==='show less'){
          setLen(len);
          setBtnText('show more')
         
       }
       setShow(text.slice(0,lenTemp)+'...')
       return btnText;
   }


    return(
        <div className="flexing-center box">
            <p>{show}
            <span onClick={()=>handleLen()}>{btnText}</span>
            </p>
             
        </div>
    )
}
export default ShowHide