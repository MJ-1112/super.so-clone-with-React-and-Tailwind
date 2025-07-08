import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Templates() {
  return (
    <div className='bg-white font-sans text-gray-800 px-4 md:px-20'>
      <Navbar/>
      <section className="py-16">
        <h3 className="text-sm uppercase text-gray-500 mb-2">Templates</h3>
        <h1 className="text-3xl font-semibold mb-4 max-w-3xl">Beautiful Notion templates to kickstart your website idea</h1>
        <p className="text-gray-600 max-w-2xl">Super templates combine the best parts of Notion templates for your website content and layout, and Super themes that define a unique style and layout for the experience. You can easily switch between the Super dashboard or Notion. You can even design custom pages that mix a Super theme with your own design, alongside those that use a template.</p>
      </section>

      <section className="flex flex-wrap gap-2 text-sm pb-8">
        <button className="border px-3 py-1 rounded-full">All</button>
        <button className="border px-3 py-1 rounded-full">Free</button>
        <button className="border px-3 py-1 rounded-full">Personal/Portfolio</button>
        <button className="border px-3 py-1 rounded-full">Notion default style</button>
        <button className="border px-3 py-1 rounded-full">Notion curated page</button>
        <button className="border px-3 py-1 rounded-full">Mobile links</button>
        <button className="border px-3 py-1 rounded-full">Documentation</button>
        <button className="border px-3 py-1 rounded-full">Landing</button>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-100 h-48 w-full"></div>
            <div className="p-4">
              <div className="text-sm text-gray-500">Free</div>
              <h2 className="font-medium">Template Name</h2>
              <p className="text-sm text-gray-500">by Super</p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-orange-100 rounded-xl p-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Create Something Super</h2>
        <button className="bg-black text-white px-4 py-2 rounded">Get started today for free</button>
      </section>
      <Footer/>
    </div>
  )
}

export default Templates