import React from 'react'
import { Link } from 'react-router-dom'

import GetStartedImg from "../../assets/book-event.png"

import { GetStartedContainer } from './GetStarted.styled'

const GetStarted = () => {
  return (
    <GetStartedContainer >
        <div className='get-started'>
            <h1  data-aos="fade-up">Try to make yourself <span style={{color: '#ea7052'}}>available</span> for this</h1>
            <p>we've made it easy for you to reserve a seat from the comfort of your home!</p>
            <Link to='/register' >
              <button data-aos="zoom-out">Reserve a Seat</button>
            </Link>
        </div>
        <div className='image-container'>
            <img src={GetStartedImg} alt="illustration of a lady with a calendar" />
        </div>
    </GetStartedContainer>
  )
}

export default GetStarted