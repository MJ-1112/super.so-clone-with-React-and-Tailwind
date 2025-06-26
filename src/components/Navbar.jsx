import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='h-20 shadow flex items-center  pl-6 gap-30' >
            <div className='flex gap-90 items-center'>
               <Link to="/"> <img src="Logo.svg" alt="Logo"  className='h-6 cursor-pointer'/></Link>
            <ul className='flex items-center gap-5 font-inter cursor-pointer'>
               <Link to='/templates'><li className='text-gray-600  text-lg'>Templates</li></Link>
                <Link to="/showcase"><li className='text-gray-600  text-lg'>Showcase</li></Link>
                <Link to="/features"><li className='text-gray-600  text-lg'>Features</li></Link>
                <Link to="/pricing"><li className='text-gray-600  text-lg'>Pricing</li></Link>
                <Link to="/guides"><li className='text-gray-600  text-lg'>Guides</li></Link>
                <Link to="/blogs"><li className='text-gray-600  text-lg'>Blog</li></Link>
                <button className='rounded-xl shadow p-2 font-medium pl-2 cursor-pointer transition delay-50 duration-300 ease-in-out hover:bg-gray-100'>Sign in</button>
                <button className='bg-yellow-500 w-40 p-2 rounded-xl font-medium transition delay-50 duration-300 ease-in-out hover:opacity-25 cursor-pointer'>Get started free</button>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar