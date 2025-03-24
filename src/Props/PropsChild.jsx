const PropsChild=(x)=>{
    console.log(x);
    let {data,data1,data2,data3}=x.prop1
    console.log(data)
    console.log(data1)
    console.log(data2)
    console.log(data3)
    return(
        <div>
            <h1>props child comp</h1>
        </div>
    )
}
export default PropsChild;