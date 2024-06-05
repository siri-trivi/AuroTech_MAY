import React, { useRef } from 'react';
import './contact.css';
import i1 from '../../Assests/i1.png';
import i2 from '../../Assests/i2.png';
import i3 from '../../Assests/i3.png';
import i4 from '../../Assests/i4.png';
import i5 from '../../Assests/i5.png';
import linkedin from '../../Assests/linkedin.jpg';
import github from '../../Assests/github.jpg';
import youtube from '../../Assests/utube.jpg';
import emailjs from '@emailjs/browser';;

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_0dhswaj', 'template_hnwl86f', form.current, {publicKey: 'Aj7NCT6yfhIE_YzlI'})
          .then((result) => {
              console.log(result.text);
              alert('Email Sent');
              e.target.reset();
            },(error) => {
              console.log(error.text);
            });
    };
    return (
        <section id='contactpage'>
            <div id='clients'>
                <h1 className='contactpageTitle'>Projects</h1>
                <p className='clientsdesc'>This section showcases various projects, 
                including a cutting-edge mini project utilizing the Generative AI framework Llama2.</p>
                <div className='clientImgs'>
                    <img src={i1} alt='client' className='clientImg'/>
                    <img src={i2} alt='client' className='clientImg'/>
                    <img src={i3} alt='client' className='clientImg'/>
                    <img src={i4} alt='client' className='clientImg'/>
                    <img src={i5} alt='client' className='clientImg'/>
                </div>
            </div>
            <div id='contact'>
                <h1 className='contactpageTitle'>Contact Me</h1>
                <span className='contactdesc'>Please fill out the form for any job opportunities or queries</span>
                <form className='contactform' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='your name' name='your_name'/>
                    <input type='email' className='email' placeholder='your email' name='your_email'/>
                    <textarea name='message' rows={5} placeholder='your message' className='msg'></textarea>
                    <button className='SubmitBtn' type='submit' value='send'>Submit</button>
                </form>
                <div className='links'>
                    <img src={linkedin} alt='' className='link'/>
                    <img src={github} alt='' className='link'/>
                    <img src={youtube} alt='' className='link'/>
                </div>
            </div>
        </section>
    );
}

export default Contact