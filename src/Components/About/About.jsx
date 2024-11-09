import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (

    <div id='about' className='about'>
        <div className="title">

            <h1>About Me</h1>
            <img src={theme_pattern} alt="" className="" />
        </div>
      <div className="about-sections">

        <div className="about-left">
            <img src={profile_img} alt="" className="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Energetic Front End Developer with 3 year experience in creating and maintain attractive responsive websites. Clear understanding of modern technology best design and practice. Proven track of customer needs and satisfactions.
                Passionate about Technology, and on a mission to become a coding wizard! .</p>
                <p>Proficient in HTML, CSS, JavaScript, React ,Figma, Git, Bootsrap and PHP , MySQL. I'm building a solid foundation to create awesome web solutions. From debugging to problem solving , I love the challenge that coding brings.</p>
           </div>

            <div className="about-skills">
             <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
             <div className="about-skill"><p>JavaScript</p><hr style={{width:"65%"}}/></div>
             <div className="about-skill"><p>React JS</p>  <hr style={{width:"60%"}}/></div>
             <div className="about-skill"><p>PHP</p>       <hr style={{width:"80%"}}/></div>
           
           
            </div>
        </div>
      </div>
<div className="about-achievements">

    <div className="about-achievement">
        <h1>3+</h1>
        <p>YEARS OF EXPERIENCE</p>
    </div>
    <hr />

    <div className="about-achievement">
        <h1>10+</h1>
        <p>PROJECT COMPLETED </p>
    </div>
    <hr />

    <div className="about-achievement">
        <h1>15+</h1>
        <p>HAPPY CLIENTS</p>
    </div>
</div>

    </div>
  )   
}

export default About
