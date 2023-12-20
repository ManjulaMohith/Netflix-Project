import React, { useState } from 'react';
import "./netflix.css";
import Logo from "./images/getstarted.png";
import { Link } from 'react-router-dom';

const Getstarted = () => {
    const [email, setEmail]=useState('')
    const[passwd ,setPasswd]=useState('')
    const [confirmpass,setConfirm]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (email === "" || passwd === "" || confirmpass === "") {
            alert("Please fill in all details");
        } else if (passwd !== confirmpass) {
            alert("Passwords do not match");
        } else {
           localStorage.setItem('Email',email)
           localStorage.setItem('Password',passwd)

           window.location.href = "/Signin";
        }
        
    }
  return (
    <>
    <div className='navup'>
      <img src={Logo} alt="" height={50}  width={200} />
      <h4><Link to="/Signin">Sign In</Link></h4>
    </div>
    <hr />
    <div className='signup'>
        <h4>Welcome back! Joining Netflix is easy.</h4>
        <input type="email" placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Create Password' value={passwd} onChange={(e)=>setPasswd(e.target.value)}/>
        <input type="password" placeholder='Confirm Password' value={confirmpass} onChange={(e)=>setConfirm(e.target.value)}/>
        <button type="submit" onClick={handleSubmit}>Sign Up</button>
    </div>
    </>
  )
}

export default Getstarted;

