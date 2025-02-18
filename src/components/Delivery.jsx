import React from 'react'
import vehicle from '/deliveryvehicle.png'
import location from '/location.png'


const Delivery = () => {
  return (
    <div className=' bg-green-50 w-screen h-screen  p-15 relative'>
        <div className='transform transition-all duration-300 hover:translate-x-10 hover:translate-y-5'> 
            <div className='  p-2 text-2xl bg-white-20 backdrop-blur-3xl rounded-2xl flex absolute my-20 w-150 h-fit text-justify'>
                <h2 className=' text-orange-400 font-extrabold flex absolute w-fit h-fit mx-16'>
                Deliver with Ease, Earn with Confidence
                </h2>
                <p className='font-bold flex relative my-10 w-fit  h-fit'> 
                Join our team of professional delivery partners and enjoy a
                 hassle-free way to earn on your schedule. Our platform offers real-time order 
                 tracking, optimized routes, and instant notifications to make deliveries smooth
                  and efficient. Get access to fair payouts, flexible working hours, and 24/7 support to ensure a seamless 
                  experience. Whether you're delivering documents, packages, or essential goods, we make sure you have everything 
                  you need to succeed.
                </p>
            </div>
            
        </div>
        <div className='transform transition-all duration-1000 hover:mx-20 translate-y-10'>
        <img className='flex absolute my-100 ' src={location} alt="location" />
        <img className=' flex absolute right-10 my-50 w-150 ' src={vehicle} alt="Vehicle" />
        </div>
        
        <div className='transform transition-all duration-500 hover:translate-x-5 hover:translate-y-10 text-2xl flex relative w-fit h-fit rounded-2xl mx-170 p-2 text-justify'>
            <h2 className=' mx-13 font-extrabold text-orange-400 flex absolute w-fit h-fit'>Swift, Secure, and Stress-Free Deliveries</h2>
            <p className='font-bold flex relative my-10 w-150 '>Get your orders delivered quickly and reliably with our seamless service. Whether it’s documents, packages,
                 or everyday essentials, we ensure safe handling and timely arrivals. With real-time tracking and 
                 dedicated customer support, you stay informed every step of the way.Fast delivery,
                  complete peace of mind—right at your doorstep! 🚀
            </p>

        </div>
        <div className=' transform transition-all duration-700 hover:mx-20 hover:translate-y-20 flex absolute right-1/3 mx-20 my-60 text-6xl w-fit h-fit'>
            <h1 className=' font-extrabold text-orange-400 flex absolute w-140 h-10 '>Let's Get Start</h1>
            <h1 className='font-bold text-orange-500  w-150 h-20 my-20'>"Deliver with Speed, Earn with Pride!" 🚀</h1>
        </div>
      
    </div>
  )
}

export default Delivery
