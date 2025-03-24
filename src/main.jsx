import { Fragment } from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import "./gobal.css"

let div=document.getElementById("root")
createRoot(div).render(
  <Fragment>
    <App/>
  </Fragment>


)


// fragment =>it is used to warp other element as parent element without an extra node
// way1=<></>
// way2=<Fragment></Fragment>