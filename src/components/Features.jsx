import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Features() {
  return (
    <div className="bg-white font-sans text-gray-800 px-4 md:px-20">
      <Navbar/>
      <section className="py-20">
        <div className="mb-6">
          
          <h1 className="text-3xl font-bold mt-4 mb-4">Incredible performance, out of the box.</h1>
          <p className="text-gray-600 max-w-2xl mb-6">Creating with Super is more than just building a website; it’s about enabling you to communicate with and connect to your audience. Our automatic optimizations take care of the technicalities, so you can focus on creating engaging content, delivered at unbeatable speeds.</p>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded">Create a high performance site</button>
        </div>

        <div className="my-10 w-full rounded-xl overflow-hidden">
          <div className="bg-orange-100 w-full h-64"></div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Lightning fast load speeds verified by the Lighthouse scores</h2>
          <p className="text-gray-600 max-w-2xl mb-6">Super ensures your site loads rapidly, satisfying your visitors and search engine expectations. Fast page loads boost retention and reduce bounce rates—Google agrees. Every additional second wasted slows down your site and its opportunity to draw your connection with them.</p>
          <ul className="text-gray-600 list-disc pl-6 mb-6">
            <li>Unmatched load speeds</li>
            <li>Improved user experience</li>
          </ul>
          <div className="bg-green-300 w-60 h-60 mx-auto rounded-xl flex items-center justify-center text-5xl font-bold text-white">100</div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Fast speeds no matter where your users are based with our Global CDN</h2>
          <p className="text-gray-600 max-w-2xl mb-6">With our Global Content Delivery Network (CDN), Super ensures fast, reliable access to your content from any location, regardless of the timezone. This helps you to grow your reach, optimizing and enhancing your site’s performance across borders.</p>
          <ul className="text-gray-600 list-disc pl-6">
            <li>Reliable, global access</li>
            <li>Scalable and resilient</li>
          </ul>
          <div className="bg-blue-300 w-full h-64 mt-6 rounded-xl"></div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Give your users the best experience with state of the art web technologies</h2>
          <p className="text-gray-600 max-w-2xl mb-6">By leveraging the latest and greatest in web technology, Super allows you to build an engaging, dynamic, and interactive online experience that turns casual visitors into loyal followers or customers.</p>
          <ul className="text-gray-600 list-disc pl-6">
            <li>Innovative platform</li>
            <li>Up-to-date technologies</li>
          </ul>
          <div className="bg-purple-500 w-full h-64 mt-6 rounded-xl"></div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Increase your site ranking and load times with Server side rendering</h2>
          <p className="text-gray-600 max-w-2xl mb-6">Super’s use of server-side rendering (SSR) isn’t just a technical specification—it’s a strategy to increase your website’s visibility. SSR enables faster page load times, better scalability, and enhanced SEO, giving more value to your site and better performance on cellular devices or visitors via links.</p>
          <ul className="text-gray-600 list-disc pl-6">
            <li>Boosted site performance</li>
            <li>Enhanced SEO</li>
          </ul>
          <div className="bg-orange-200 w-full h-64 mt-6 rounded-xl"></div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">Learn more about the tech we use tech stack on our Vercel customer story</h2>
          <p className="text-gray-600 max-w-xl mb-6">Super serves thousands of domains from a single platform.</p>
          <div className="bg-black w-full h-32 rounded-xl"></div>
        </div>

        <div className="bg-orange-100 rounded-xl p-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Create Something Super</h2>
          <button className="bg-black text-white px-4 py-2 rounded">Get started today for free</button>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Features