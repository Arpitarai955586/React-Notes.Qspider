import { useState } from "react";
import Nav from "./Nav";
const Cart=()=>{
    let [items,setItems]=useState(0)
    let addItems=()=> setItems(items+1)
    
    return(
        <div>
            
             <h1>Card component </h1>
             <Nav props={items}/>
             <button onClick={addItems}>add to card</button>
        </div>
    )
}
export default Cart;
