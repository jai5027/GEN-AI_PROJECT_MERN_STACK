import React from 'react'
import '../features/auth/auth.form.scss'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <main>
    <div className='form-container'>
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>

            <div className='input-group'>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' name='username' placeholder='Enter your username' required />  
            </div>

            <div className='input-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' placeholder='Enter your email' required />  
            </div>

            <div className='input-group'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' placeholder='Enter your password' required />
            </div>

            <button className='button primary-button' type='submit'>Register</button> 
        </form>
        <p>Already have an account? <Link to='/'>Login</Link></p>
    </div>
   </main>
  )
}

export default Register
