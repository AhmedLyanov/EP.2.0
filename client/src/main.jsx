import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Catalog from './views/catalog/index.jsx'
import Main from './views/main/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Catalog/> 
  },
  {
    path: '/tes',
    element: <Main/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
