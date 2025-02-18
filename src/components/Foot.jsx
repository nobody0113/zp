import React from 'react'

const Foot = () => {
  return (
    <div>
        <footer className='bg-black h-fit '>

        <div className='flex absolute right-1/4 my-5 '>
          <ul className='list-none flex absolute w-50'>
            <li > <img className=' p-1 mx-20 w-10' src="/youtube.png" alt="" /></li>
            <li><img className='p-1 mx-20 w-10' src="/whatsapp.png" alt="" /></li>
            <li><img className='p-1 mx-20 w-10' src="/insta.png" alt="" /></li>
          </ul>
          </div>

          <div> <h1 className='text-3xl text-white font-extrabold p-6'>Zerox Point</h1> </div>

          <div>
          <h2 className='text-white text-2xl text-center'>© {new Date().getFullYear()} All Rights Reserved </h2>
          </div>
          

        </footer>
      
    </div>
  )
}

export default Foot
