import React from 'react'
import { useState} from "react";
import {useNavigate,} from "react-router-dom";
import { BASE_URL } from '../constants';
//import {UserContext} from "../UserContext";
const RegisterPage = () => {
  const navigate = useNavigate();
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    async function register(ev) {
    ev.preventDefault();
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('registration successful');
navigate("/login")
    } else {
      alert('registration failed');
    }
}


  return (
    <div>
     <form className="register" onSubmit={register}>
      <h1>REGISTER</h1>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}
        />
      <input type="password"
             placeholder="password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}
            />
      <button>Register</button>
    </form>
      
    </div>
  )
}

export default RegisterPage

