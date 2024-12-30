import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";




const Footer = () => {
  return (
    <section className='bg-[#2A2A2A]  text-white p-2'>
    <section className='h-[450px] pt-10  flex gap-5 justify-between pl-20 pr-20'>
    
    <div className='flex flex-col gap-10'>
        <h2 className='text-[44px]'>Le Furniture</h2>
        <div className='flex flex-col gap-4'>
        <input type="text" placeholder='Enter your email' className='p-3 bg-transparent border border-white rounded-3xl' />
        <button className='bg-white text-black p-2 rounded-3xl w-[40%]'>Submit</button>
        </div>

        <div className='flex gap-5'>
        <FaFacebook className='w-8 h-8'/>
        <FaInstagram className='w-8 h-8'/>
        <FaXTwitter className='w-8 h-8'/>
        <IoLogoTiktok className='w-8 h-8'/>
        </div>
    </div>

    <div className='flex flex-col gap-10'>
        <h2 className='text-[44px]'>Quick Links</h2>
        <ul className='text-[20px] flex flex-col gap-5' >
            <li>Home</li>
            <li>Our Collections</li>
            <li>On Sales 70% Off</li>
            <li>Track Your Order</li>
        </ul>
    </div>

    <div className='flex flex-col gap-10'>
        <h2 className='text-[44px]'>Policies</h2>
        <ul className='text-[20px] flex flex-col gap-5' >
            <li>Shipping Policy</li>
            <li>Tracking Policy</li>
            <li>Refund Policy</li>
            <li>Term & Services</li>
        </ul>
    </div>

    <div className='flex flex-col gap-10'>
        <h2 className='text-[44px]'>Partners</h2>
        <ul className='text-[20px] flex flex-col gap-5' >
            <li>Shipping Partner</li>
            <li>Store Partner</li>
            <li>Wholesaler</li>
            <li>Retailers</li>
        </ul>
    </div>
      
    </section>
    <h2 className='text-[20px] text-center'>Made with Love By Mozzam Shahid</h2>
    </section>
  )
}

export default Footer
