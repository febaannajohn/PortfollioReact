import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>

        <div className="footer-top">

            <div className="footer-top-left">
                <h1>Feba Anna John</h1>
                <p>I am Front End Developer as a React Developer</p>
            </div>

            <div className="footer-top-right">

                <div className="footer-email-input">
                    <img src={user_icon} alt="" className="" />
                    <input type="text" placeholder='Enter your Email' />
                </div>
                <div className="footer-subscribe"> Submit</div>
            </div>
        </div>
        <hr />
        
        <div className="footer-bottom">

            <div className="footer-bootom-left">@ 2024 Feba Anna John </div>

            <div className="footer-bottom-rigt">
                <p>Term of Service</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
