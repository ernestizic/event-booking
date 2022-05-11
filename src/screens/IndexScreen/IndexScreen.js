import React from 'react'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import GetStarted from '../../components/GetStarted/GetStarted'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'

const IndexScreen = () => {
  return (
    <div>
        <Header />
        <Hero />
        <GetStarted />
        <Contact />
        <Footer />
    </div>
  )
}

export default IndexScreen