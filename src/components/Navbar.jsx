import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className='h-20 shadow flex items-center  pl-6 gap-30' >
            <div className='flex gap-90 items-center'>
                <img src="Logo.svg" alt="Logo"  className='h-6 cursor-pointer'/>
            <ul className='flex items-center gap-5 font-inter cursor-pointer'>
                <li className='text-gray-600  text-lg'>Templates</li>
                <li className='text-gray-600  text-lg'>Showcase</li>
                <li className='text-gray-600  text-lg'>Features</li>
                <li className='text-gray-600  text-lg'>Pricing</li>
                <li className='text-gray-600  text-lg'>Guides</li>
                <li className='text-gray-600  text-lg'>Blog</li>
                <button className='rounded-xl shadow p-2 font-medium pl-2 cursor-pointer transition delay-50 duration-300 ease-in-out hover:bg-gray-100'>Sign in</button>
                <button className='bg-yellow-500 w-40 p-2 rounded-xl font-medium transition delay-50 duration-300 ease-in-out hover:opacity-25 cursor-pointer'>Get started free</button>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar