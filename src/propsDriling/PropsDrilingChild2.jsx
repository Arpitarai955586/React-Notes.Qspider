import PropsDrillingChild2 from "./PropsDrilingChild1";

const PropsDrillingChild1=({data1})=>{
    return(
      <div>
        <h1>PropsDrillingCHild1</h1>
        <PropsDrillingChild2 data1={data1}/>
      </div>
    )
}
export default PropsDrillingChild1;