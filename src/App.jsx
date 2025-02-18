import React from 'react'
import Navbar from './components/Navbar'
import First from './components/First'
import Serv from './components/Serv'
import CardComponent from './components/CardComponent'
import Delivery from './components/Delivery'
import Review from './components/Review'
import Foot from './components/Foot'

const App = () => {
  return (
    <div >
     <Navbar/>    
     <First/>
     <Serv/>
     <Delivery/>
     <Review/>
     <Foot/>
     
     
    </div>
  )
}

export default App
