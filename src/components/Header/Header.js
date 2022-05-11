import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.png'

import { HeaderContainer } from './Header.styled'

const Header = () => {
  return (
    <HeaderContainer>
        <Link to='/'> <img src={Logo} alt="logo"/> </Link>

        <Link to='/register' id='reg'> Register </Link>
    </HeaderContainer>
  )
}

export default Header