import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Pricing() {
  return (
    <div>
      <Navbar/>
      <section className="text-center py-16">
        <h1 className="text-3xl font-semibold mb-4">Simple pricing, Super features</h1>
        <div className="space-x-2">
          <button className="border px-4 py-1 rounded-full text-sm">Monthly billing</button>
          <button className="border px-4 py-1 rounded-full text-sm bg-black text-white">Yearly billing</button>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-start gap-6 px-4 md:px-20">
        <div className="border rounded-lg p-6 w-full md:w-1/4">
          <h2 className="text-lg font-semibold mb-2">Free</h2>
          <p className="text-2xl font-bold mb-2">$0</p>
          <ul className="text-sm space-y-1">
            <li>Free forever</li>
            <li>Publish 1 site</li>
            <li>Custom domains</li>
            <li>Fast site speed</li>
          </ul>
        </div>
        <div className="border rounded-lg p-6 w-full md:w-1/4 bg-yellow-50">
          <h2 className="text-lg font-semibold mb-2">Personal</h2>
          <p className="text-2xl font-bold mb-2">$16</p>
          <ul className="text-sm space-y-1">
            <li>Everything in Free</li>
            <li>Unlimited pages</li>
            <li>No Super branding</li>
            <li>Email support</li>
          </ul>
        </div>
        <div className="border rounded-lg p-6 w-full md:w-1/4">
          <h2 className="text-lg font-semibold mb-2">Pro</h2>
          <p className="text-2xl font-bold mb-2">$28</p>
          <ul className="text-sm space-y-1">
            <li>Everything in Personal</li>
            <li>Custom code</li>
            <li>Advanced integrations</li>
            <li>Priority support</li>
          </ul>
        </div>
        <div className="border rounded-lg p-6 w-full md:w-1/4">
          <h2 className="text-lg font-semibold mb-2">Custom</h2>
          <button className="mt-4 bg-black text-white px-4 py-1 rounded">Contact Sales</button>
        </div>
      </section>

      <section className="py-16 text-center bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Join over 30,000 creators using Super</h2>
        <p className="max-w-xl mx-auto text-sm mb-8">Our mission is to create the best tools to publish websites — not just for individuals but for businesses too.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20">
          <div className="bg-white shadow rounded-lg p-4">“Super has changed the way I build sites. It’s easy and fast.”</div>
          <div className="bg-white shadow rounded-lg p-4">“I love using Super for its simplicity and great design!”</div>
          <div className="bg-white shadow rounded-lg p-4">“Super sites are beautiful, and setting them up is fun.”</div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-20">
        <h2 className="text-xl font-semibold mb-8 text-center">Compare plans</h2>
        <div className="overflow-auto">
          <table className="min-w-full border text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2">Feature</th>
                <th className="p-2">Free</th>
                <th className="p-2">Personal</th>
                <th className="p-2">Pro</th>
                <th className="p-2">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Custom domains</td>
                <td className="p-2">✔️</td>
                <td className="p-2">✔️</td>
                <td className="p-2">✔️</td>
                <td className="p-2">✔️</td>
              </tr>
              <tr>
                <td className="p-2">Email support</td>
                <td className="p-2">❌</td>
                <td className="p-2">✔️</td>
                <td className="p-2">✔️</td>
                <td className="p-2">✔️</td>
              </tr>
              <tr>
                <td className="p-2">Priority support</td>
                <td className="p-2">❌</td>
                <td className="p-2">❌</td>
                <td className="p-2">✔️</td>
                <td className="p-2">✔️</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Pricing