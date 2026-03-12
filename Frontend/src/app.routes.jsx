import { createBrowserRouter } from "react-router-dom"
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import App from './App.jsx' 

const router = createBrowserRouter([
      {
        path: '/',
        element: <App />,
        children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
      ]}
])

export default router