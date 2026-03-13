import { createBrowserRouter } from "react-router-dom"
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import App from './App.jsx' 
import Protected from "./components/Protected.jsx"

const router = createBrowserRouter([
      {
        path: '/',
        element: <App />,
        children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/home',
        element: <Protected> 
             <Home />
             </Protected>
      }
      ]}
])

export default router