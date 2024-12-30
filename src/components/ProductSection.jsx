import React from 'react'
import { CiHeart } from "react-icons/ci";
import ProductData from './ProductData';


const ProductSection = () => {

    return (
        <div className='flex flex-col gap-5 h-auto p-10'>
            <h2 className="text-[32px] text-center mb-10 font-bold">Our Exclusive Collection</h2>

            {/* Product Section */}
            <div className='flex flex-wrap gap-10 justify-center'>
            {ProductData.map((product, index) => (
                <div key={index} className='w-[400px] h-[500px] bg-cover bg-center rounded-[10px] flex flex-col justify-between p-4' style={{ backgroundImage: `url(${product.image})` }}>
                <div></div>
                <div className='flex justify-between font-normal text-white'>

                    <div className='flex flex-col text-left'>
                        <h2 className='text-[32px]'>{product.name}</h2>
                        <p className='text-[16px]'>Starting From</p>
                        <h2 className='text-[32px]'>${product.price}</h2>
                    </div>

                    <div className='flex gap-2 mb-2 items-end'>
                        <button className='btn px-1'><CiHeart className='h-6 w-6' /></button>
                        <button className='btn'>Buy Now</button>
                    </div>

                </div>
            </div>
            ))}
                

            </div>

        </div>
    )
}

export default ProductSection
