  import React from 'react'
  import './contact.css'
  import {MdOutlineEmail} from 'react-icons/md'
  import {RiMessengerFill} from 'react-icons/ri'
  import {RiWhatsappFill} from  'react-icons/ri'
  import emailjs from '@emailjs/browser'
  import {useRef} from 'react'


 
  
  const Contact = () => {
    const form = useRef(); 

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        e.target.reset()
    };

    return (
      <section id="contact">
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail/>
            <h4>Email</h4>
            <a href="mailto:sharathbau0596@gmail.com" target='www.gmail.com'> Send a message</a>
            </article>

            <article className="contact__option">
              <RiMessengerFill/>
            <h4>Messenger</h4>
            <a href='https://m.me/sharath.babu.9216' target='_blank'> Send a message</a>
            </article>

            <article className="contact__option">
              <RiWhatsappFill/>
            <h4>WhatsApp</h4>
            <h5>+91 7349402309</h5>
            <a href='https://api.whatsapp.com/send?phone+917349402309' target='_blank'> Send a message</a>
            </article>
          </div>
          {/* END OF CONATACT OPTION */}
          <form Ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your full name' required/>
            <input type="email" name='email' placeholder='Your email' required/>
            <textarea type="message" rows="7"  placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'> Send Message</button>
          </form>
        </div>
      </section>
    )
  }
  
  export default Contact