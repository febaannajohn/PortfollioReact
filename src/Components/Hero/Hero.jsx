import React from 'react'
import './Hero.css'
import  Profile_img  from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id= 'home' className='hero'>
      
<img src={Profile_img} alt="" className="" />
<h1><span>I'm Feba Anna John ,</span> Front End Developer as a React Developer</h1>
<p>I'm here to connect with fellow professionals who share a passion for technology and growth. Together, lets embark on a journey of innovation! Connect with me lets create something incredible!</p>
<div className="hero-action">

    <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect Me</AnchorLink></div>
    <div className="hero-resume">My Resume</div>

</div>
    </div>
  )
}

export default Hero
