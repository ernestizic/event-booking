import React from 'react'

import ContactImg from '../../assets/contact.png'
import WhatsappImg from '../../assets/whatsapp.png'
import MailImg from '../../assets/mail.png'

import { ContactUsContainer } from './Contact.styled'

const Contact = () => {
  return (
    <ContactUsContainer>
        <div className='contact' data-aos="fade-up-right">
            <h1>Contact Us</h1>
            <p>Got any questions, feedback, request and complaints? Reach out...</p>
            <div className='whatsapp'>
                <img src={WhatsappImg} alt="whatsapp" />
                <p>+2348232323892</p>
            </div>
            <div className='mail'>
                <div className='mail-img'>
                    <img src={MailImg} alt='mail' />
                </div>
                <p>contact@us.com</p>
            </div>
        </div>

        <div className='contact-image-container'>
            <img src={ContactImg} alt='illustration of message dialogue' data-aos="fade-left" />
        </div>
    </ContactUsContainer>
  )
}

export default Contact