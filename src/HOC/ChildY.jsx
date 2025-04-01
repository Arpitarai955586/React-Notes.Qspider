import React from 'react'
import ChildZ from './ChildZ'
import Hoc from './Hoc'
const ChildY = (y) => {
    console.log(y)
  return (
    <div>
        <h1>child y component</h1>
        <ChildZ/>
    </div>
  )
}

export default Hoc(ChildY)