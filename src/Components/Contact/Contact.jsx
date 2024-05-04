import React from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cs0smon', 'template_u0n745h', form.current, 'Rt4Zai-aN91hUyy31')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
    <div className='contact-form' id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{ background : darkMode? 'black': '', color : darkMode? 'white': ''  }}>Pour plus d'infos</span>
                <span>Contacter-Nous</span>
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Nom' />
                <input type="text" name='user_email' className='user' placeholder='Email' />
                <textarea name='message' className='user' placeholder='Message' />
                <input type="submit" value='Envoyer' className='button' />
                <span>{done && 'Merci de nous avoir contacter!'}</span>
                <div className="blur c-blur1" style={{background:'var(--purple)'}}></div>
            </form>
        </div>
    </div>
  );
}

export default Contact;
