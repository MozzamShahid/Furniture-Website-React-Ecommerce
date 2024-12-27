import React from 'react'
import { MdMenu } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
// import { CiUser } from "react-icons/ci";
// import { FiShoppingCart } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";



import Logo from '../assets/logo-furntiure.svg'


const Headers = () => {
  return (
    <section className="flex h-[80px] p-8 justify-between items-center">
    <div className="flex items-center" >
        <div><MdMenu className='w-8 h-8' /></div>
        <div><h1 className='text-[32px] font-bold'>MENU</h1></div>
    </div>
    <div><img src={Logo} alt="furntiure logo" /></div>

    <div className="flex items-center gap-4">
    <div><IoSearch className='w-7 h-7' /></div>
    <div><FaRegUser className='w-6 h-6' /></div>
    <div><BsCart2 className='w-6 h-6' /></div>
    </div>
      
    </section>
  )
}

export default Headers
