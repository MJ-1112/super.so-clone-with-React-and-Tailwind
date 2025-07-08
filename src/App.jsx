import { useState } from 'react'
import Navbar from './components/Navbar'
import Templates from './components/Templates'
import { Routes,Route } from 'react-router-dom'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Homepage from './components/Homepage'



function App() {
  

  return (
   <div>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/templates' element={<Templates/>}></Route>
      <Route path='/features' element={<Features/>}></Route>
      <Route path='/pricing' element={<Pricing/>}></Route>
    </Routes>
    {/* <Footer/> */}
   </div>
  )
}

export default App
