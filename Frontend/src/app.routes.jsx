import { createBrowserRouter } from "react-router-dom"
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import App from './App.jsx' 
import Protected from "./components/Protected.jsx"
import Interview from "./pages/interview.jsx"

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
      },
      {
        path: '/interview/:interviewId',
        element: <Protected> 
             <Interview />
             </Protected>
      }
      ]}
])

export default router