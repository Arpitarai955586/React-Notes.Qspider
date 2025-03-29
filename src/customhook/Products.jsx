import React from 'react'
import { useAPI } from './CustomHook'

const Products = () => {
    let productdata=useAPI("https://fakestoreapi.com/products");
    let userdata=useAPI("https://api.gethub.com/users")
    console.log(productdata.data)
    console.log(userdata)
  return (
    <div>
        <h1>Custom Hook</h1>
    </div>
  )
}

export default Products