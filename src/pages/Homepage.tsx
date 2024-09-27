import React from 'react'
import HeroTop from '../components/marketing/pageSection/HeroTop'
import LastProducts from '../components/marketing/pageSection/LastProducts'
import Product from '../components/marketing/pageSection/Product'
import Events from '../components/marketing/pageSection/Events/Events'
import Booking from '../components/marketing/pageSection/Booking'
import Footer from '../components/marketing/pageSection/Footer'

const Homepage = () => {
  return (
    <>
    <HeroTop/>
    <LastProducts/>
    <Product/>
    <Events/>
    <Booking/>
    <Footer/>
    </>
  )
}

export default Homepage