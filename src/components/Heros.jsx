import React from 'react'
import ImageSofa from '../assets/Sofasimagee.png'

const Heros = () => {
  return (
    <section className='h-[600px] text-white gap-5 p-4 flex flex-col justify-center items-center' style={{backgroundImage: `url(${ImageSofa})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'  }}>
      <h2 className='text-[44px] w-[60%] text-center font-semibold '>Transform Your Space with Furniture That Fits Your Style and Budge</h2>
      <p className='text-[20px] text-center w-[55%]'>Discover premium designs, fast delivery, and exclusive discounts to make your dream home a reality—starting today.</p>
    </section>
  )
}

export default Heros
