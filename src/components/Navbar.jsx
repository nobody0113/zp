
import React from 'react'



const Navbar = () => {
  return (
    <div>
      <div className='h-35  flex relative '> 
        <img className='w-35 flex absolute bottom-1 ' src='./logo_black.svg' alt="" />
        <h1 className='text-3xl font-extrabold mx-32 my-12'>Zerox Point</h1>
        <div className='text-2xl font-bold flex absolute right-10 gap-10 list-none bottom-13 '>
        
        <li >Home</li>
        <li>Services</li>
        <li> About</li>
        <li>Contact</li>
        <button>Login</button>
        <button> Register</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
