// eslint-disable-next-line no-unused-vars
import React from 'react'
import Smooth1 from './Components/Smooth1'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Smooth2 from './Components/Smooth2'
import Smooth3 from './Components/Smooth3'
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<><Smooth1/></>,
    },
    {
path: '/Smooth2',
element:<><Smooth2 /></>
    },
    {
    path: '/Smooth3',
element:<><Smooth3/></>
    }
  ])
  return (
    <>
    {/* <Smooth1/> */}
    <RouterProvider router={router} />
    </>
  )
}

export default App