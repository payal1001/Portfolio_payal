import React , {useRef} from 'react'
import "./contacts.css"
import Facebook from "../../assets/facebook.png"
import Microsoft from "../../assets/microsoft.png"
import Adobe from "../../assets/adobe.png"
import emailjs from '@emailjs/browser';

const Contacts = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2o58muo', 'template_km5xtjz', form.current, 'tSeuIrVsFI_I9PiN-82aT')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('email sent');
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id='contactPage'>
        <div id="Projetcs">
<h1 className='contactPageTitle'>
    My Projects
</h1>

<p className='projectDesc'>
    I have done these two projetcs, one at the time of WOC and one after that, github links for both the projects are mention below.<br/>
    Comanies I seek to work in are as follows.
</p>
<div className="projectImgs">
    <img src={Facebook} alt='' className='clientImg' />
    <img src={Microsoft} alt='' className='clientImg' />
    <img src={Adobe} alt='' className='clientImg' />
    

</div>
        </div>


      <div id="contact"  >
      <h1 className='contactPageTitle'>
        Contact Me</h1> 

        <span className="contactDesc">
            Please fill out the form below to discuss any work opportunities.
            <form className="contactForm" ref={form} onSubmit={sendEmail} >
                <input type="text" className="name" placeholder="your name" name='your_name' required />
                <input type="email" className="email" placeholder="your Email" name='your_email' required />

                <textarea name="message" rows="5" placeholder="your message" className="msg" required >                </textarea>

                <button type="submit" value="send"
className="submitBtn">Submit</button>
            </form>
            </span> 
      </div>



    </section>

  )
}

export default Contacts;