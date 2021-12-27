import React, { useEffect } from "react";
import '../../utils/utils.css'
import axios from 'axios'
const Ex191=()=>{

    const [data,setData]=React.useState([]);

    useEffect(()=>{
         const getMovie=async()=>{
            let temp=await axios.get('https://intense-mesa-62220.herokuapp.com/swapi.dev/api/films/1')
            setData(temp)
         }
         getMovie();
         
    },[])
    console.log(data)
    return(
     <div className="flexing-center col">
          <h1>{data.data.director}</h1>
          <h1>{data.data.title}</h1>
     </div>
    );
}
export default Ex191;