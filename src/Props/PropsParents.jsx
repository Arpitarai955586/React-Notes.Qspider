import { useState } from "react";
import PropsChild from "./PropsChild";
import PropsChild2 from "./PropsChild2";
import PropsChild3 from "./PropsChild3";

const PropsParent=()=>{
    let[state,setState]=useState()
    let data="hello world"
    let data1=[10,20,30]
    let data2={id:1,name:"arpita"}
    let data3=()=>{console.log("byeee")}

    function getDataFromChild(val){
        console.log(val)
        setState(val)
    }
    return(
        <div>
            <h1>props parents comp</h1>
            <PropsChild prop1={{data, data1,data2,data3}}/>
            <PropsChild2 prop1={data} prop2={data1} prop3={data2} prop4={data3}/>
            <PropsChild3 getDataFromChild={getDataFromChild}/>
        </div>
    )
}
export default PropsParent;