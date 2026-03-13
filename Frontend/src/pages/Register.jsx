import React, { useState } from 'react'
import '../features/auth/auth.form.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../features/auth/hooks/useAuth.js'

const Register = () => {
 const navigate = useNavigate()

    const [data, setData] = useState({ username: '', password: '', email: '' })
    const { loading, handleRegister } = useAuth()

    const handleChange = (e) => {
        const { name, value } = e.target
        setData(data => ({ ...data, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleRegister(data)
        navigate('/home')
    }

    if(loading){
        return (<main><h1>Loading.......</h1></main>)
    }

  return (
    <main>
    <div className='form-container'>
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>

            <div className='input-group'>
                <label htmlFor='username'>Username</label>
                <input onChange={handleChange} value={data.username} type='text' id='username' name='username' placeholder='Enter your username' required />  
            </div>

            <div className='input-group'>
                <label htmlFor='email'>Email</label>
                <input onChange={handleChange} value={data.email} type='email' id='email' name='email' placeholder='Enter your email' required />  
            </div>

            <div className='input-group'>
                <label htmlFor='password'>Password</label>
                <input onChange={handleChange} value={data.password} type='password' id='password' name='password' placeholder='Enter your password' required />
            </div>

            <button className='button primary-button' type='submit'>Register</button> 
        </form>
        <p>Already have an account? <Link to='/'>Login</Link></p>
    </div>
   </main>
  )
}

export default Register
