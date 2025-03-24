import { createContext } from "react"
import Parent from "./Parent";
export let GlobalData=createContext();
const Context=(x)=>{
    console.log(x)
    let data=[10,20,30,40]
    return(
     <GlobalData.Provider value={data}>
      {x.childern}
      
     </GlobalData.Provider>
    )
}
export default Context;
