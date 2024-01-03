import React from 'react'
import Hero from '../../components/Hero'
import Slider from '../../components/Slider'
import Sponsor from '../../components/Sponsor'
import Work from '../../components/Work'
import Payverter from '../../components/Payverter'
import Halal from '../../components/Halal'
import Getstarted from '../../components/Getstarted'
import './home.css'


const Home = () => {
  return (
    <div>
     <Hero />
     <Slider/>
     <Sponsor/>
     <Work />
     <Payverter />
     <Halal/>
     <Getstarted />
    </div>
  )
}

export default Home