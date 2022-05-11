import React from 'react'
import Logo from '../../assets/logo.png'
import { FooterContainer } from './Footer.styled'

const Footer = () => {
  return (
    <FooterContainer>
      <img src={Logo} alt='logo'/> 

      <p>copyright Rudify 2022</p>
    </FooterContainer>
  )
}

export default Footer