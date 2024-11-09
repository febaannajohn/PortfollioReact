import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icom from '../../assets/call_icon.svg' 

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "45a5d61d-cf54-4300-8d60-ed6fd6b75e23");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt="" className="" />
        </div>
      
      <div className="contact-section">
        <div className="contact-left">
            <h1>Lets's Talk</h1>
            <p>Together, lets embark on a journey of innovation! Lets make the digital world a better place, one line of code at a time. Connect with me lets create something incredible!</p>
            <div className="contact-details">

                <div className="contact-detail">
                 <img src={mail_icon} alt="" className="" /><p>febamol22@gmail.com</p>
                </div>

                <div className="contact-detail">
                    <img src={call_icom} alt="" className="" /><p>9747596507</p>
                </div>


                <div className="contact-detail">
                    <img src={location_icon} alt="" className="" /><p>kizhakkumparayil(h)   N.Mazhuvannoor P.O , Magalathunada, Ernakulam </p>
                </div>
            </div>
        </div>
     

        <form onSubmit={onSubmit} className="contact-right">

            <label htmlFor=''>Your Name</label>
            <input type="text" name='name' placeholder='Enter Name' />
            <label htmlFor=''>Your Email</label>
            <input type="text" name='email' placeholder='Enter Name' />
            <label htmlFor=''>Message Here</label>
             <textarea name="messg" rows="8" id=""></textarea>
             <button className="contact-submit">Submit Now</button>

             </form>
        </div>
      </div>
   
  )
}

export default Contact
