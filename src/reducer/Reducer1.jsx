import { useReducer } from "react"
let initialState=0;
 let reducerFunc=(State,action)=>{
    console.log("prevState",State)
    switch(action){
        case "increase":
            return State+1;
            case "decrease":
                return State>0?State-1:0;
                case "reset":
                    return 0
    }
 }

const Reducer1=()=>{
    let [state,depatch]=useReducer(reducerFunc,initialState)
    console.log( " new state is", state)
    return(
        <div>
            <h1>use Reducer hook :{state}</h1>
            <button onClick={()=>depatch("increase")}> increase</button>
            <button onClick={()=>depatch("decrease")}>decrease</button>
            <button onClick={()=>depatch("reset")}>reset</button>
        </div>
    )
}
export default Reducer1; 