import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className='h-20 shadow flex items-center  pl-6 gap-30' >
            <div className='flex gap-100'>
                <img src="Logo.svg" alt="Logo"  className='h-6'/>
            <ul className='flex items-center gap-10'>
                <li>Templates</li>
                <li>Showcase</li>
                <li>Features</li>
                <li>Templates</li>
                <li>Templates</li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar