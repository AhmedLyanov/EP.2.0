import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/header/index.jsx'
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
    <Header/>
    <RouterProvider router={router} />
  </StrictMode>,
)
