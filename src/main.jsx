import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Login } from "./pages/Login"
import { Login2 } from "./pages/Login2"
import { Product } from "./pages/Product"
import { Services } from "./pages/Services"
import { Training } from "./pages/Training"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

/* Exemplo 1 */
const router = createBrowserRouter([
  { path: "/",         element: <App /> },
  { path: "/login",    element: <Login /> },
  { path: "/login2",   element: <Login2 /> },
  
  { path: "/services", element: <Services /> },
  { path: "/training", element: <Training /> },
  { path: "/product",  element: <Product /> },
])

/* Exemplo 2 */


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
