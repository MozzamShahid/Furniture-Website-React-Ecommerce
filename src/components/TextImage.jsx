import React from 'react'
import SofaImage from '../assets/imgSofa.png'

const TextImage = () => {
  return (
    <section className="h-[600px] flex justify-center gap-10 items-center pl-20 pr-20">
      <div className="flex-1">
        <div className="flex flex-col gap-4">
            <h2 className="text-[42px] font-bold" >Fast delivery, Easy assembly, & 100% satisfaction</h2>
            <p className="font-[20px] pr-12">Whether you're upgrading your living space or starting fresh, let us help you create a home you love. Our exclusive collections are designed to elevate your lifestyle.</p>
            <button className="bg-[#2A2A2A] p-2 w-1/3 rounded-[20px] text-white">See Our Collections</button>
        </div>
      </div>

      <div className='flex-1'>
        <div className='flex justify-end'>
        <img src={SofaImage} alt="SofaImage" />
        </div>
       
      </div>

    </section>
  )
}

export default TextImage
