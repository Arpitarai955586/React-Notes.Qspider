import React, { Children } from 'react'
import Navbar2 from './Navbar2'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './page/Profile'
import Service from './page/Service'
import Card from './page/Card'
import Layout from './page/Layout'

const Routing2 = () => {
    let myRoutes=createBrowserRouter([{
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Profile/>,
            },
            {
                path:"/service",
                element:<Service/>,
            },
            {
                path:"/card",
                element:<Card/>,
            }
        ]
        
    }

    ])
  return (
    <div>
        
        <RouterProvider router={myRoutes} >
 
        </RouterProvider>
    </div>
  )
}

export default Routing2