import React, { useState } from 'react'
import Home from './Home'
import '../styles/login.css'

const Login = () => {

    const [input, setInput] = useState("")

    return (
        <div className="login">
            <Home />
            <div className="form">
                <form>
                    <label>E-Mail:
                        <input type="email" name="email" value="email" onChange={(e) => setInput(e.target.value)} required />
                    </label>


                    <label>Password:<input type="password" name="password" value="password" onChange={(e) => setInput(e.target.value)} required /></label>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login