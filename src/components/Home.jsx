import React from 'react'
import "../css/home.css";
import Slider from './Slider';
import Lottie from "lottie-react";
import WorkingMan from '../using-lottie/WorkingMan.json'
import {
    AiFillLinkedin,
    AiFillInstagram,
    AiFillFacebook,
    AiFillGithub,
  } from "react-icons/ai";
const Home = () => {
  const a=3;
  return (
    <div className='home_page'>
        <h1>WELCOME TO  INTERNEX!</h1>
        <p id="getting">Get all your study materials at your fingertips.</p>
    <div className='section_1'>
        <div id="service-image">
       <Lottie animationData={WorkingMan}/>
        </div>
        <div id="about">
            <h1>ABOUT US</h1>
            <p id="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis soluta molestias officia, accusamus cum et quia maiores accusantium distinctio sunt mollitia doloribus placeat laboriosam quaerat enim iure ipsa animi ut!
            </p>
        </div>
    </div>
    <h1 id="whu">WHY US ?</h1>
    <div className='section_2'>
        <p id="a1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis soluta molestias officia, accusamus cum et quia maiores accusantium distinctio sunt mollitia doloribus placeat laboriosam quaerat enim iure ipsa animi ut!
        </p>
        <p id="a2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis soluta molestias officia, accusamus cum et quia maiores accusantium distinctio sunt mollitia doloribus placeat laboriosam quaerat enim iure ipsa animi ut!
        </p>
        <p id="a3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis soluta molestias officia, accusamus cum et quia maiores accusantium distinctio sunt mollitia doloribus placeat laboriosam quaerat enim iure ipsa animi ut!
        </p>
        
    </div>
    <div className='freeAn'>
  
  <div className='freeAnno'>
      <div className='boxing'>
      <h1>It's free.</h1>
      <h1>No credit card required.</h1>
      </div>
      
  </div>
  <div className='freeAnImg'></div>
    </div>
    <div className='footer'>
        <h1>Thank you for visiting INTERNEX</h1>
        <h1 className='gaping'>Hope it helped you!</h1>
        <div className='contacts'>
        <a target="_blank" className="conMe"href="https://github.com/sarmanihar">
        <h1>
    <AiFillGithub  />
    </h1>
    </a>    
    <a target="_blank" className="conMe"href="https://www.linkedin.com/in/nihar-sarma-7059b0254">
    <h1>
    <AiFillLinkedin  />
    </h1>
    </a>    
    <h1>
    <AiFillInstagram  />
    </h1>
    <a target="_blank" className="conMe"href="https://www.facebook.com/profile.php?id=100076080162786&mibextid=ZbWKwL">
    <h1>
    <AiFillFacebook  />
    </h1>
    </a>
   
    <p>&copy; 2023 INTERNEX AB</p>
    </div>
   
    </div>
</div>
  )
}

export default Home;