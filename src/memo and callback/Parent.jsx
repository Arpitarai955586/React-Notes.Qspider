import { useState ,useMemo, useCallback} from 'react'

import Child from './Child'

const Parent = () => {
    console.log("parent");
    let [state,setState]=useState(0);
    let [val,setVal]=useState(5);
// memorized value ko return 
    // function multiply(){
    //     console.log("multiple")
    //     return val*10
    // }
   
    let multiple =useMemo(()=>{
        console.log("multiple")
        return val * 10
    },[val])
      // memorized function return
      let greet =useCallback(()=>{
        console.log("welcome")
      },[])
  return (
    <div>
        <h1>memo and callback parent</h1>
        <button onClick={()=>setState(state+1)}>update</button>
        <h2>multiplicaton {multiple}</h2>
        <button onClick={()=>setVal(val+5)}>update</button>
      
        <Child/>
    </div>
  )
}

export default Parent;