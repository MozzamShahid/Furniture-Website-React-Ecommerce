import React from 'react'
import Heroo from '../assets/main-img.png'

const Hero = () => {
  return (
    <section className="hero h-[600px] p-4 flex justify-center items-center">
      <img src={Heroo} alt="main image" />
    </section>
  )
}

export default Hero
