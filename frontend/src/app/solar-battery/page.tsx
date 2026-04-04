'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
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

const ShieldIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const introFeatures = [
  'Store excess solar energy for use at night',
  'Backup power during blackouts',
  'Reduce bills by up to 90%',
  'Government rebates up to $8,000',
  'Real-time monitoring via smartphone app',
  '10-year manufacturer warranty',
]

const benefits = [
  {
    title: 'Energy Independence',
    description: 'Store solar energy during the day and use it at night. Reduce reliance on the grid with home battery storage systems.',
  },
  {
    title: 'Government Rebates',
    description: 'Access up to $8,000 in Australian government rebates for solar battery installations. We handle all paperwork.',
  },
  {
    title: 'Backup Power',
    description: 'Keep your home powered during blackouts with reliable solar battery backup systems for Australian homes.',
  },
  {
    title: 'Smart Savings',
    description: 'Use stored cheap off-peak power during expensive peak times. Maximise your savings with intelligent energy management.',
  },
]

const brands = [
  {
    name: 'Tesla Powerwall',
    description: 'Industry-leading lithium-ion solar battery with 13.5kWh capacity. Perfect for Australian homes with solar panels.',
    features: ['10-year warranty', 'Smartphone app control', 'Backup power capability'],
  },
  {
    name: 'FoxESS Battery Systems',
    description: 'Top-selling battery storage solutions trusted by thousands of Australian homeowners for reliable performance.',
    features: ['Industry-leading warranty', 'High efficiency', 'Australian approved'],
  },
  {
    name: 'GoodWe ESA All-in-One',
    description: 'CEC-approved three-phase energy storage system combining inverter, battery, and energy management in one unit.',
    features: ['5-108kWh capacity', 'Whole-home backup', 'Modular & expandable'],
  },
  {
    name: 'BYD Battery Box',
    description: 'Modular solar battery system that can be expanded as your energy storage needs grow.',
    features: ['Modular design', 'Long cycle life', 'Australian certified'],
  },
]

const cityLinks = [
  { name: 'Melbourne', href: '/solar-battery-melbourne' },
  { name: 'Sydney', href: '/solar-battery-sydney' },
  { name: 'Brisbane', href: '/solar-battery-brisbane' },
  { name: 'Perth', href: '/solar-battery-perth' },
  { name: 'Adelaide', href: '/solar-battery-adelaide' },
  { name: 'Canberra', href: '/solar-battery-canberra' },
  { name: 'Tasmania', href: '/solar-battery-tasmania' },
]

export default function SolarBattery() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Solar Battery Systems Australia",
    "description": "Premium solar battery installation services across Australia with government rebates up to $8,000",
    "brand": { "@type": "Brand", "name": "Super Solar Energy" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "AUD",
      "price": "2480",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "Super Solar Energy" },
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "927" },
  }

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Solar Batteries</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl heading-display text-[#1a2332] mt-3">
              Solar Battery Storage Solutions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Premium solar battery systems with government rebates up to $8,000.
              Professional installation across Melbourne, Sydney, Brisbane, Perth,
              Adelaide and all Australian cities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Image */}
            <div className="relative w-full h-[300px] lg:h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/batteryImage1.jpg"
                alt="Professional solar battery installation in Australian home"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div>
              <span className="bg-[#FFF5EE] text-[#E8621A] rounded-full px-4 py-1.5 text-sm font-semibold inline-block mb-4">
                $8,000 Rebates Available
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-4">
                Store Your Solar Energy
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Store excess solar energy and gain true energy independence. Our battery
                systems provide reliable backup power during outages and dramatically
                reduce your reliance on the grid.
              </p>
              <ul className="space-y-3">
                {introFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Battery Brands */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Premium Brands</span>
            <h2 className="text-3xl md:text-4xl heading-display text-[#1a2332] mt-3">
              Battery Brands We Install
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              We partner with the world&apos;s leading battery manufacturers to deliver
              reliable, high-performance energy storage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#E8621A]/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#F9A825]/20 rounded-lg flex items-center justify-center">
                    <ShieldIcon className="w-5 h-5 text-[#E8621A]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2332]">{brand.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{brand.description}</p>
                <ul className="space-y-3">
                  {brand.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-gray-700">
                      <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#F0F5FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Benefits</span>
            <h2 className="text-3xl md:text-4xl heading-display text-[#1a2332] mt-3">
              Why Choose Battery Storage?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-[#1a2332] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* City Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Service Areas</span>
            <h2 className="text-3xl md:text-4xl heading-display text-[#1a2332] mt-3">
              Find Solar Batteries Near You
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {cityLinks.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={city.href}
                  className="block text-center bg-[#F0F5FA] hover:bg-[#E8621A] hover:text-white text-[#1a2332] rounded-xl px-4 py-3 font-semibold transition-colors"
                >
                  {city.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F0F5FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl heading-display text-[#1a2332] mb-4">
              Ready for Solar Battery Installation?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of Australian families saving money with solar battery
              systems. Government rebates available now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-[#E8621A] text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#c74f12] transition-colors"
              >
                Get Free Battery Quote
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <a
                href="tel:1300090984"
                className="bg-[#1a2332] text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#2a3342] transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                Call Battery Specialists
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
