import { useContext } from "react";
import { GlobalData } from "./Context";
const ChildB=()=>{
    let data=useContext(globalData)
    console.log(data)
    return(
        <div>
            <h1>I am child B function</h1>
        </div>
    )
}
export default ChildB;