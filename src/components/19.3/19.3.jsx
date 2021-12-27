import React, { useEffect,useState } from "react";
import '../../utils/utils.css'
import axios from 'axios'
import Spinner6 from '../spinner/spinner6'
const Ex193=()=>{

    const [data,setData]=useState([]);
    const [term,setTerm]=useState('hooks');
    const [activate,setActivate]=useState(true);

    useEffect(()=>{
         const getAgolia=async()=>{
              try{
              const{data}=await axios.get(`https://hn.algolia.com/api/v1/search?query=${term}`);
            setData(data.hits)
              }
              catch(err){
                  alert(err);
              }
         }
         getAgolia();
         
    },[activate])

    
    const serachTerm=(e)=>{
          setTerm(e.target.value);
    }

    if(data.length<1 || !data)
    {
        return <Spinner6/>
    }
    
    const renderList=data.map((item)=>{
        return <div key={item.objectID} >
                   <a href={item.url}>{item.title}</a>
               
            </div>
    })

    const onSeachBtn=()=>{
        setActivate(!activate);
        setData([]); 
    }

    return(
     <div className="flexing-center col">
         <div className="flexing-center">
            <input type='text' onChange={(e)=>serachTerm(e)} />
            <button onClick={()=>onSeachBtn()} >Search</button>
         </div>
         {renderList}
     </div>
    );
}
export default Ex193;