import React, { useReducer } from 'react'
 let initailSate=0;
 let reducerFunc=(prevState,action)=>{
    console.log("prev state was",prevState,action)
    switch(action){
        case "increment":
        return prevState+1;
    }
 }

const Reducer = () => {
    let [state,dispatch]=useReducer(reducerFunc,initailSate)
    console.log("new state",state)
  return (
    <div>
        <h1>Learn useReducer hook :{state}</h1>
        <button onClick={()=>dispatch("increment")}>increament</button>
    </div>
  )
}

export default Reducer