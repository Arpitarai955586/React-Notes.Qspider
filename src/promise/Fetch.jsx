import { useEffect, useState } from "react";
import axios from "axios"

const Fetch=()=>{
    
    let [name,setName]=useState(null)
    useEffect(()=>{

        async function getUsers(){
            let {data:{users}}=await axios.get("https://fakestoreapi.in/api/users");
            console.log(users)
            setName(users)
        }
        getUsers();
    })
    return(
        <div>
        <h1>Learn axios</h1>
        {name?.map((ele)=>{
          console.log(ele);
          let {id ,password}=ele;
          return(
            <div key={id} >
               <h3>{password}</h3>
            </div>
          )
        })}
        </div>
    )
}
export default Fetch;
