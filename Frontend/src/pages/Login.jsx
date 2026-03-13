import React, { useState } from 'react'
import '../features/auth/auth.form.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../features/auth/hooks/useAuth'

const Login = () => {

    const navigate = useNavigate()
    const [data, setData] = useState({ email: "", password: "" })
    const { loading, handleLogin } = useAuth()

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleLogin(data)
        navigate('/home')
    }

     if(loading){
        return (<main><h1>Loading.......</h1></main>)
    } 

  return (
   <main>
    <div className='form-container'>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
            <div className='input-group'>
                <label htmlFor='email'>Email</label>
                <input onChange={handleChange} value={data.email} type='email' id='email' name='email' placeholder='Enter your email' required />  
            </div>

            <div className='input-group'>
                <label htmlFor='password'>Password</label>
                <input onChange={handleChange} value={data.password} type='password' id='password' name='password' placeholder='Enter your password' required />
            </div>

            <button className='button primary-button' type='submit'>Login</button> 
        </form>
        <p>Don't have an account? <Link to='/register'>Register</Link></p>
    </div>
   </main>
  )
}

export default Login
