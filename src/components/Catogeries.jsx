import React from 'react'
import BannerOne from '../assets/banner-one.png'
import BannerTwo from '../assets/banner-two.png'
import BannerThree from '../assets/banner-three.png'


const Catogeries = () => {
    return (
        <div className="flex flex-col gap-5 p-10 pr-20 pl-20 h-auto">
            <h1 className="text-left text-[32px] font-light">Our Category</h1>
            <div className="flex flex-col gap-10">
                <div className="p-5 h-[300px] bg-cover bg-center text-right rounded-[5px]" style={{ backgroundImage: `url(${BannerOne})` }}>
                    <button className="btn btn-primary bg-[#2A2A2A] border-none">Your favourite Right?</button>
                </div>

                <div className="p-5 h-[300px] bg-cover bg-center text-right rounded-[5px]" style={{ backgroundImage: `url(${BannerTwo})` }}>
                    <button className="btn btn-primary bg-[#2A2A2A] border-none">Your favourite Right?</button>
                </div>

                <div className="p-5 h-[300px] bg-cover bg-center text-right rounded-[5px]" style={{ backgroundImage: `url(${BannerThree})` }}>
                    <button className="btn btn-primary bg-[#2A2A2A] border-none">Your favourite Right?</button>
                </div>
            </div>

        </div>
    )
}

export default Catogeries
