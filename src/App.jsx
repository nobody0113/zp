import React from 'react'
import Navbar from './components/Navbar'
import First from './components/First'
import Serv from './components/Serv'
import CardComponent from './components/CardComponent'

const App = () => {
  return (
    <div >
     <Navbar/>
     <div className='bg-[url("/home/jack/JS_16/Zerox_Point_16/Landing_Page/public/bi.png")] bg-contain bg-no-repeat bg-center w-screen h-screen  '>
     <First/>
     </div>
     <Serv/>
     
     
    </div>
  )
}

export default App
