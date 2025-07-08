import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
function Homepage() {
  return (

    <div>
      <Navbar/>
<section className=" py-20 mt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Create Custom Websites with Notion
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
           Transform your Notion pages into fully customized, professional websites in less than a minute. Enjoy high performance, SEO optimization, and a compelling user experience with great-looking instant page loads. Focus on creating while Super handles the rest.


          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-md font-medium  border-white hover:border-yellow-300 border-3 transition-colors cursor-pointer">
              Get Started for free
            </button>

          </div>


        </div>
      </section>
           <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How to use Notion as a website
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your Notion pages into professional websites with just a few clicks
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="bg-gray-700 h-32 rounded-lg mb-6 flex items-center justify-center">
                
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Create a simple page</h3>
              <p className="text-gray-300">Start with a blank page or use one of our templates to get started quickly.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="bg-gray-700 h-32 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Add blocks like images, videos, and text</h3>
              <p className="text-gray-300">Build rich content with our powerful block editor and multimedia support.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="bg-gray-700 h-32 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-orange-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Share with your team</h3>
              <p className="text-gray-300">Collaborate in real-time and share your work with anyone, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join over 100,000 creators using Notion
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            See how teams and individuals are using Notion to organize their work and build amazing things.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "Notion has completely transformed how our team collaborates and organizes our work."
              </blockquote>
              <cite className="text-gray-500 text-sm">Sarah Johnson, Product Manager</cite>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "The flexibility and power of Notion is unmatched. It's our single source of truth."
              </blockquote>
              <cite className="text-gray-500 text-sm">Mike Chen, Engineering Lead</cite>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "I can't imagine running my business without Notion. It keeps everything organized."
              </blockquote>
              <cite className="text-gray-500 text-sm">Emma Davis, Founder</cite>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Alex Thompson</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Jessica Liu</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">David Park</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Rachel Green</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Tom Wilson</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Lisa Chang</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>

  )
}   

export default Homepage