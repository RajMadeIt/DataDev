import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
    return (
        <div className='w-full py-16 px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />

                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>

                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>

                    <p className='py-1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque porro, perferendis impedit esse ipsam, odio autem architecto debitis suscipit provident quidem inventore facere nesciunt, sit sed accusantium tempora voluptate rem. Perspiciatis unde cum velit laborum dignissimos dolorem, quo deserunt et corporis perferendis sint sed reprehenderit consectetur? Blanditiis, eum nesciunt! Facilis?
                    </p>

                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md py-3 mx-auto md:mx-0 font-medium my-6'>Get Started</button>

                </div>
            </div>
        </div>
    )
}

export default Analytics