import React from 'react'
import Navbar from './components/Navbar'
import First from './components/First'
import Serv from './components/Serv'
import CardComponent from './components/CardComponent'

const App = () => {
  return (
    <div >
     <Navbar/>
     <div className='bg-[url("./bi.png")] bg-contain bg-no-repeat bg-center w-screen h-screen  '>
     <First/>
     </div>
     <Serv/>
     
     
    </div>
  )
}

export default App
