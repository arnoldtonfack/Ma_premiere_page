import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Lazy loading de la page Homepage
const Homepage = React.lazy(() => import('./pages/Homepage'))

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <Homepage />
                </Suspense>
            )
        }
    ])

    return <RouterProvider router={router} />
}

export default App
