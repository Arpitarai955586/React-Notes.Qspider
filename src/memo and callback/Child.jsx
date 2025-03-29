import React from 'react'
import {memo} from "react"
const Child = ({greet}) => {
    // console.log(greet)
  return (
    <div>
        <h1>memo and callback child</h1>
    </div>
  )
}

export default memo(Child);
// the component to memorize
// let you skip re-rendering a component when its props are unchanged