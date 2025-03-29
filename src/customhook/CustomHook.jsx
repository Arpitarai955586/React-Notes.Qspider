import axios from "axios";
import { useEffect, useState } from "react"

export let useAPI=(api_url)=>{
   let [apiData,setApiData]=useState(null);
   async function getAPIData(url){
    let response=await axios.get(url)
    let data=await axios.get(url)
    // storing api data in state
    setApiData(response,data)
   }
   useEffect(()=>{
    // function will be called only one time (mounting phase)
    getAPIData(api_url)
   },[])
//    returning state varial with api data
   return apiData;
}