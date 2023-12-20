import React, { useState } from 'react';
import Logo from "./images/netflix1.jpg";
import Logo1 from "./images/back.jpg"
import "./netflix.css";
import { Link } from 'react-router-dom';

const Home = () => {
  const [showDescription,setShowDescription]=useState([])

  const togglequestion=(index)=>{
    const updated=[...showDescription];
    updated[index]=(!updated[index])
    setShowDescription(updated)
  }

  return (
    <>
    <div style={{ backgroundImage: `url(${Logo1})`,height:"100vh" }} >
    <div className='homeNav'>
      <img src={Logo} alt="netflix"  height={60} width={100} />
      <div>
        <button className='lang'>English ▼</button>
        <button className='signin'><Link to="Signin">Sign in</Link></button>
      </div>
    </div>

    <div className='caption'>
    <h1>Unlimited movies, TV shows and more</h1>
    <h5>Starts at ₹149. Cancel anytime.</h5>
    <p style={{marginTop:"10px"}}>Ready to watch? Enter your email to create or restart your membership.</p>
    <input type="email" placeholder='Email address'  className='input'/>
    <button className='getStarted'><Link to="Getstarted">Get Started ►</Link></button>
    </div>
    </div>

    <div className='bottom'>
    <h2>More reasons to join</h2>
    <div className='cards'>
        <div className='card'>
            <h3>Enjoy on your TV</h3>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        <div className='card'>
            <h3>Download your shows to watch offline</h3>
            <p>Save your favourites easily and always have something to watch.</p>
        </div>
        <div className='card'>
            <h3>Watch everywhere</h3>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
        </div>
        <div className='card'>
            <h3>Create profiles for kids</h3>
            <p>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
        </div>

    </div>
        
    </div>
    {/* frequently asked questions */}
    
    <div className='questions'>
    <h2>frequently asked questions</h2>
    {/* first question */}
      <div className='ques' onClick={()=>togglequestion(0)}>
        <div><h3>What is Netflix?</h3></div>
        <div className='plus'>{showDescription[0]?"×":"+"}</div>
      </div>
      {/* description */}
      {
        showDescription[0] && (
          <div className='container1'>
          <h5>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</h5>
          <h5>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</h5>
          </div>
        )
      }
{/* second question */}
<div className='ques' onClick={()=>togglequestion(1)}>
        <div><h3>How much does it cost?</h3></div>
        <div className='plus'>{showDescription[1]?"×":"+"}</div>
      </div>
      {/* description */}
      {
        showDescription[1] && (
          <div className='container1'>
            <h5>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</h5>
          </div>
        )
      }

      {/* third question */}
<div className='ques' onClick={()=>togglequestion(2)}>
        <div><h3>Where can i watch?</h3></div>
        <div className='plus'>{showDescription[2]?"×":"+"}</div>
      </div>
      {/* description */}
      {
        showDescription[2] && (
          <div className='container1'>
            <h5>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</h5><br />
            <h5>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</h5>
          </div>
        )
      }

      {/* fourth question */}
<div className='ques' onClick={()=>togglequestion(3)}>
        <div><h3>How do i cancel?</h3></div>
        <div className='plus'>{showDescription[3]?"×":"+"}</div>
      </div>
      {/* description */}
      {
        showDescription[3] && (
          <div className='container1'>
            <h5>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</h5>
          </div>
        )
      }

      {/* fifth question */}
<div className='ques' onClick={()=>togglequestion(4)}>
        <div><h3>What can i watch on Netflix?</h3></div>
        <div className='plus'>{showDescription[4]?"×":"+"}</div>
      </div>
      {/* description */}
      {
        showDescription[4] && (
          <div className='container1'>
            <h5>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</h5>
          </div>
        )
      }

      {/* sixth question */}
<div className='ques' onClick={()=>togglequestion(5)}>
        <div><h3>Is Netflix good for kids?</h3></div>
        <div className='plus'>{showDescription[5]?"×":"+"}</div>
      </div>
      {/* description */}
      {
        showDescription[5] && (
          <div className='container1'>
            <h5>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</h5>
          </div>
        )
      }
      
      <div className='inp'>
      <p className='p1'>Ready to watch? Enter your email to create or restart your membership.</p>
      <input type="email" placeholder='Email address'  className='input1'/>
    <button className='getStarted1'>Get Started ►</button>
    </div>

<hr />
      {/* footer */}
      <b style={{paddingLeft:"30px"}}>Questions? Call 000-800-919-1694</b>

      <div className='footer'>
        <div>
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
          </div>

          <div>
            <p>Help Center</p>
            <p>Media Center</p>
            <p>Jobs</p>
          </div>

          <div>
          <p>Terms of use</p>
            <p>Cookie preferences</p>
            <p>Contact us</p>
          </div>
      </div>

    </div>

    
    </>
  )
}

export default Home
