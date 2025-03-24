import PropsDrillingChild1 from "./PropsDrilingChild2";

const PropsDrillingParent=()=>{
    let data1="hello react"
    return(
      <div>
        <h1>PropsDrillingParent</h1>
        <PropsDrillingChild1 data1={data1}/>
      </div>
    )
}
export default PropsDrillingParent;