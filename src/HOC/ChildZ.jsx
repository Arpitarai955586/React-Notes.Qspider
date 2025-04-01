import React from 'react'
import Hoc from './Hoc'
const ChildZ = (x) => {
    console.log(x)
  return (
    <div>
        <h1>Child Z component</h1>
    </div>
  )
}

export default Hoc(ChildZ)