import React from 'react'

const Hoc = (Wrapper) => {
    let user={
        id:1,
        ename:"arpita"
    }
  return function(){
    return <Wrapper feature={user}/>
  }
}

export default Hoc