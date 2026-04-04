'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const XMarkIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const batteries = [
  {
    name: "Tesla Powerwall 3",
    price: "From $13,990",
    capacity: "13.5kWh",
    warranty: "10 years",
    efficiency: "97.5%",
    backup: "Yes - Full Home",
    pros: ["Premium brand", "Tesla app", "Sleek design", "Best efficiency"],
    cons: ["Higher upfront cost", "Limited availability"],
    bestFor: "Premium buyers wanting the best technology and Tesla ecosystem integration",
  },
  {
    name: "Alpha ESS",
    price: "From $8,490",
    capacity: "10kWh (expandable)",
    warranty: "10 years",
    efficiency: "95%",
    backup: "Yes - UPS capable",
    pros: ["Great value", "Modular design", "LiFePO4 chemistry", "VPP ready"],
    cons: ["Less brand recognition"],
    bestFor: "Value-conscious buyers wanting reliable, expandable systems",
  },
  {
    name: "Sungrow",
    price: "From $9,200",
    capacity: "9.6-12.8kWh",
    warranty: "10 years",
    efficiency: "95%",
    backup: "Yes",
    pros: ["Proven reliability", "Good warranty", "Multiple sizes"],
    cons: ["Heavier unit"],
    bestFor: "Households wanting established brand with proven track record",
  },
]

export default function BatteryComparison() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Battery Comparison</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl heading-display text-[#1a2332] mt-3">
              Solar Battery Comparison 2026
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Compare top solar battery brands side-by-side to find the right system for your home
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: Cards */}
          <div className="block lg:hidden space-y-6">
            {batteries.map((battery, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-[#1a2332] p-4">
                  <h3 className="text-xl font-bold text-white">{battery.name}</h3>
                  <div className="text-xl font-bold mt-1 text-[#F9A825]">{battery.price}</div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-semibold text-gray-500">Capacity:</span>
                    <span className="text-[#1a2332]">{battery.capacity}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-semibold text-gray-500">Warranty:</span>
                    <span className="text-[#1a2332]">{battery.warranty}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-semibold text-gray-500">Efficiency:</span>
                    <span className="text-[#1a2332]">{battery.efficiency}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-semibold text-gray-500">Backup:</span>
                    <span className="text-[#1a2332]">{battery.backup}</span>
                  </div>

                  <div className="pt-2">
                    <p className="font-semibold text-[#E8621A] mb-2 text-sm">Pros:</p>
                    <ul className="text-sm space-y-1">
                      {battery.pros.map((pro, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <CheckIcon className="w-4 h-4 text-[#E8621A] mr-2 flex-shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <p className="font-semibold text-red-500 mb-2 text-sm">Cons:</p>
                    <ul className="text-sm space-y-1">
                      {battery.cons.map((con, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <XMarkIcon className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 bg-[#F0F5FA] rounded-lg p-3">
                    <p className="font-semibold text-sm mb-1 text-[#E8621A]">Best For:</p>
                    <p className="text-sm text-gray-600">{battery.bestFor}</p>
                  </div>

                  <Link
                    href="/quote"
                    className="block w-full bg-[#E8621A] text-white hover:bg-[#c74f12] text-center px-6 py-3 rounded-full font-semibold mt-4 transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Table */}
          <div className="hidden lg:block">
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-[#F0F5FA]">
                    <th className="px-6 py-4 text-left font-semibold text-[#1a2332]">Feature</th>
                    {batteries.map((battery, index) => (
                      <th key={index} className="px-6 py-4 text-center font-semibold text-[#1a2332]">
                        {battery.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-500">Price (After Rebates)</td>
                    {batteries.map((battery, index) => (
                      <td key={index} className="px-6 py-4 text-center font-bold text-[#E8621A] text-lg">
                        {battery.price}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-6 py-4 font-semibold text-gray-500">Capacity</td>
                    {batteries.map((battery, index) => (
                      <td key={index} className="px-6 py-4 text-center text-[#1a2332]">
                        {battery.capacity}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-500">Warranty</td>
                    {batteries.map((battery, index) => (
                      <td key={index} className="px-6 py-4 text-center text-[#1a2332]">
                        {battery.warranty}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-6 py-4 font-semibold text-gray-500">Round-Trip Efficiency</td>
                    {batteries.map((battery, index) => (
                      <td key={index} className="px-6 py-4 text-center text-[#1a2332]">
                        {battery.efficiency}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-500">Backup Power</td>
                    {batteries.map((battery, index) => (
                      <td key={index} className="px-6 py-4 text-center text-[#1a2332]">
                        {battery.backup}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-6 py-4 font-semibold text-gray-500 align-top">Pros</td>
                    {batteries.map((battery, index) => (
                      <td key={index} className="px-6 py-4">
                        <ul className="text-sm space-y-1">
                          {battery.pros.map((pro, i) => (
                            <li key={i} className="flex items-start text-gray-700">
                              <CheckIcon className="w-4 h-4 text-[#E8621A] mr-2 flex-shrink-0 mt-0.5" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-500 align-top">Cons</td>
                    {batteries.map((battery, index) => (
                      <td key={index} className="px-6 py-4">
                        <ul className="text-sm space-y-1">
                          {battery.cons.map((con, i) => (
                            <li key={i} className="flex items-start text-gray-700">
                              <XMarkIcon className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-6 py-4 font-semibold text-gray-500 align-top">Best For</td>
                    {batteries.map((battery, index) => (
                      <td key={index} className="px-6 py-4 text-sm text-gray-600">
                        {battery.bestFor}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4"></td>
                    {batteries.map((battery, index) => (
                      <td key={index} className="px-6 py-4 text-center">
                        <Link
                          href="/quote"
                          className="inline-block bg-[#E8621A] text-white hover:bg-[#c74f12] px-6 py-3 rounded-full font-semibold transition-colors"
                        >
                          Get Quote
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#F0F5FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl heading-display text-[#1a2332] mb-4">
              Not Sure Which Battery is Right for You?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get expert advice and a personalized recommendation based on your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-[#E8621A] text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#c74f12] transition-colors"
              >
                Get Free Quote
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <a
                href="tel:1300090984"
                className="bg-[#1a2332] text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#2a3342] transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                1300 09 09 84
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
