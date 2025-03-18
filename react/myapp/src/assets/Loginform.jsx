import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import React from 'react';
import './loginform.css';
import { auth } from "./firebase"

const Login = ({user,setUser}) =>{
  const [username, setUsername] = useState('');
  const [Mail, setmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log({ username,Mail, password});
  //   // if (username === 'admin' && password === '12345') {
  //   //   alert('Login Successful');
  //   // } else {
  //   //   alert('Invalid credentials');
  //   // }


  const handlelogin = async(e)=> {
      e.preventDefault();
      try{
        await auth.signInWithEmailAndPassword(Mail,password);
        console.log(Mail+" "+password);
        navigate('/home');
        setUser(Mail);
      }
      catch(error){
        console.log(error);
        alert(error);
      }

    }
  

  return (
    <div className="container">
        <h1>Login </h1> <br />
    <form onSubmit={handlelogin}>
        
        <label>username:</label><br />
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        required
      />
     
      <br />
      
      
      <label>Email:</label><br />
      <input 
        type="email" 
        placeholder="mail id" 
        value={Mail} 
        onChange={(e) =>  setmail(e.target.value)} 
        required
      />
      <br />
      
      <label>Password</label><br />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required
      />
      <br />
      
      <button type="submit">Login</button>
    </form>
    </div>
  );
}

export default Login;
