import { useState } from 'react'
import Navbar from './components/Navbar'
import Templates from './components/Templates'
import { Routes,Route } from 'react-router-dom'
import Showcase from './components/Showcase'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Guides from './components/Guides'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
// import NotionClone from './Test'


function App() {
  

  return (
   <div>
    <Navbar/>
    {/* <NotionClone/> */}
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/templates' element={<Templates/>}></Route>
      <Route path='/showcase' element={<Showcase/>}></Route>
      <Route path='/features' element={<Features/>}></Route>
      <Route path='/pricing' element={<Pricing/>}></Route>
      <Route path='/guides' element={<Guides/>}></Route>
      <Route path='/blogs' element={<Blog/>}></Route>
    </Routes>
    {/* <Footer/> */}
   </div>
  )
}

export default App
