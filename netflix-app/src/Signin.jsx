import React, { useState } from 'react';
import Logo from "./images/netflixS.jpg";
import Logo1 from "./images/netflix1.jpg";
import "./netflix.css";
import { Link } from 'react-router-dom';
//import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")

  //const location=useLocation();
  const StoredEmail=localStorage.getItem('Email')
  const StoredPassword=localStorage.getItem('Password')

  const navigate=useNavigate();
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(StoredEmail===email && StoredPassword===pass){
      navigate("/Netflix")
    }else if(email==="" || pass===""){
      alert("please fill the details")
    }else if(StoredPassword!==pass){
      alert("password not matched")
    }
  }


  return (
    <>
    <div style={{backgroundImage:`url(${Logo})`}} className='top'>
        <div className='navimg'>
            <img src={Logo1} alt="" height={100} width={160}/>
        </div>
      
      
      <div className='signinform'>
        <h3 style={{color:"white"}}>Sign in</h3>
            <input type="email" placeholder='Email or Phone number' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password"  placeholder='Password' value={pass}  onChange={(e)=>setPass(e.target.value)} style={{color:"white"}} />
            <button type='submit' onClick={handleSubmit}>Sign In</button>
            </div>

            <div className='form'>
              <p>New to Netflix ? <Link to="/Getstarted">SIGN UP now</Link></p>
            </div>
    </div>
    </>
  )
}

export default Signin;
