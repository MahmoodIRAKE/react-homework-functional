import React, { useEffect,useState } from "react";
import '../../utils/utils.css'
import axios from 'axios'

const Ex192=()=>{

    const [countries,setCountries]=useState([]);
    const [term,setTerm]=useState('');
    useEffect(()=>{
         const getCountries=async()=>{
             let data='';
             if(term===''){
               data=await axios.get('https://restcountries.com/v3.1/all')
             }
             else{
                data=await axios.get('https://restcountries.com/v3.1/name/'+term)                  
             }
            setCountries(data.data)
         }
         getCountries();
         
    },[term])
    

    const serachTerm=(e)=>{
          setTerm(e.target.value);
    }
    const renderList=countries.map((item)=>{
        return <div key={item.name.common} >{item.name.common}</div>
    })

    return(
     <div className="flexing-center col">
         <input type='text' onChange={(e)=>serachTerm(e)} />
         {renderList}
     </div>
    );
}
export default Ex192;