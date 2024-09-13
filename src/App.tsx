import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
