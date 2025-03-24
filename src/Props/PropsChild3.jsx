const PropsChild3=({getDataFromChild})=>{
    let val="hii parent";
  function btnHandle(){
    getDataFromChild(val)
  }
    return(
        <div>
             <h1>props child3 comp</h1>
             <button onClick={btnHandle}>send data to parents</button>
        </div>
    )
}
export default PropsChild3;