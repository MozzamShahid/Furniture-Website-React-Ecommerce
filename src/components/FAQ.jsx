import React, { useState } from 'react'
import FAQImage from '../assets/SofaImage2.png'
import { FaChevronDown } from "react-icons/fa";


const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    const data = [
        {
            headline: 'Do you provide customization options?',
            description: 'Yes, some of our furniture items can be customized in terms of material, color, or size. Look for the "Customizable" label on the product page.',
        },
        {
            headline: 'What is your delivery time?',
            description: 'Our delivery time is 7am to 8pm EST',
        },
        {
            headline: 'Do you offer assembly services?',
            description: 'Only in selected Cities, California & New York, Our Instructions are so easy you can do it yourself.',
        },
        {
            headline: 'What is your return policy?',
            description: 'Our Return policy allow cusotmer to return in 30-Days no questions asked!',
        },
    ]
    return (
        <section className="h-[600px] pl-20 pr-20 flex justify-center items-center gap-5">
            <div className="flex-1">
                <div className='flex justify-start'><img src={FAQImage} alt="Image of Sofa" /></div>
            </div>
            <div className="flex-1">
                <div className='flex flex-col justify-start gap-5'>
                    <h2 className="text-[42px] text-left font-bold">Frequently Asked Questions</h2>

                    <div className='flex flex-col gap-4'>
                        {data.map((datas, index) => (
                            <div key={index} className='flex flex-col gap-5' >
                                <div className='flex justify-between items-center cursor-pointer' onClick={() => handleToggle(index)}>
                                    <div clas><h2 className='text-[28px]'>{datas.headline}</h2></div>
                                    <div><FaChevronDown className='w-6 h-6' /></div>
                                </div>
                                {openIndex === index && (<p className="font-[16px] text-gray-500">{datas.description}</p>)}
                                <hr />
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    )
}

export default FAQ
