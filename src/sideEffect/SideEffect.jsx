import { useEffect, useState } from "react";

const SideEffect=()=>{
    let [state,setState]=useState(0);
    let[id, setId]=useState(null)
    // it take two argument first one is function second one is dependences
    useEffect(()=>{
        console.log("welcome")
       let intervalId= setInterval(()=>{
            console.log("fetching data")
            
        },2000)
        setId(intervalId)
    },[])
    useEffect(()=>{
      console.log("state updated")
    },[state])
    useEffect(()=>{
        return()=>{
            console.log("bye")
            clearInterval(id)
        }
    },[])
    return(
        <div>
            <h1> Learn useEffect :{state}</h1>
            <button onClick={()=>setState(state+1)}>update</button>
        </div>
    )
}
export default SideEffect;