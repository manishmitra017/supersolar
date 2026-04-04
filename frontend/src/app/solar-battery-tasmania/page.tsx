'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import StatsStrip from '@/components/StatsStrip'

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`w-5 h-5 text-[#E8621A] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

const QuoteIcon = () => (
  <svg className="w-10 h-10 text-[#E8621A]/20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
  </svg>
)

export default function SolarBatteryTasmania() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)

  const suburbs = [
    'Hobart', 'Battery Point', 'Sandy Bay', 'South Hobart', 'West Hobart', 'North Hobart',
    'Launceston', 'Riverside', 'Mowbray', 'Newstead', 'Trevallyn', 'Kings Meadows',
    'Devonport', 'East Devonport', 'Spreyton', 'Miandetta', 'Forth', 'Don',
    'Burnie', 'Somerset', 'Parklands', 'Shorewell Park', 'South Burnie', 'Cooee',
    'Kingston', 'Blackmans Bay', 'Howrah', 'Bellerive', 'Lindisfarne', 'Rosny',
    'Glenorchy', 'Moonah', 'Claremont', 'Lenah Valley', 'New Norfolk', 'Bridgewater'
  ]

  const accordionItems = [
    {
      title: 'Solar Battery Systems',
      content: 'We supply and install premium solar battery systems from leading brands including Tesla Powerwall, BYD, Sungrow, and Enphase. Our battery solutions range from 5kWh to 30kWh+ capacity, designed for Tasmania\'s unique climate and energy needs. All systems include smart monitoring, backup power capability, and 10-year manufacturer warranties.'
    },
    {
      title: 'Solar Panel Installation',
      content: 'Our CEC-accredited installers fit Tier 1 solar panels from brands like Jinko, Trina, and LONGi with efficiency ratings above 21%. Tasmania has excellent solar potential year-round, and modern panels perform well even in cooler conditions. We design arrays optimised for Tasmanian roof orientations and weather patterns.'
    },
    {
      title: 'Complete Solar Packages',
      content: 'Bundled solar panel and battery packages start from $9,400 installed. Our complete solutions include panels, inverter, battery, installation, and smart monitoring — ideal for achieving energy independence in Tasmania\'s remote and rural areas. We handle the entire process from design to grid connection.'
    },
    {
      title: 'Government Rebates',
      content: 'Tasmanian residents can access federal STCs (Small-scale Technology Certificates) to reduce upfront costs. We handle all rebate paperwork on your behalf, ensuring you receive the maximum discount available. Tasmania\'s clean energy focus and growing renewable sector make battery storage an excellent long-term investment for homeowners across the state.'
    }
  ]

  const testimonials = [
    {
      quote: 'Living in rural Tasmania near New Norfolk, reliable power was always a concern. Our Super Solar battery keeps us running through storms and outages. It\'s given us true energy independence and the savings are substantial.',
      name: 'John & Wendy S.',
      location: 'New Norfolk, Tasmania'
    },
    {
      quote: 'We had Super Solar install a 10kWh battery at our Sandy Bay home. Even in Hobart\'s winter months, we\'re generating and storing enough solar to cover most of our evening usage. Very happy with the investment.',
      name: 'Emma R.',
      location: 'Sandy Bay, Hobart'
    },
    {
      quote: 'As a Launceston homeowner, I was sceptical about solar in Tasmania. Super Solar showed me the data — we\'re now saving over $1,500 a year and have peace of mind with battery backup during weather events.',
      name: 'Bruce H.',
      location: 'Launceston, Tasmania'
    }
  ]

  return (
    <div className="bg-white">
      {/* Section 1: Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-[#1565C0] tracking-wide uppercase mb-4">
              Solar Batteries in Tasmania
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a2332] mb-4 font-display leading-tight">
              Tasmania Solar Battery Installation
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Energy independence for Australia&apos;s clean energy state. Reliable battery backup for remote and urban homes alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/solarroof11.jpg"
                alt="Solar panels on Tasmanian home"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#1a2332] mb-6 font-display">
                Why Tasmanian Homeowners Choose Solar Batteries
              </h2>
              <p className="text-gray-600 mb-4">
                Tasmania has excellent solar potential year-round, and modern panels perform exceptionally well in cooler conditions. As Australia&apos;s clean energy state, Tasmania is perfectly positioned for homeowners to maximise renewable energy self-sufficiency with battery storage.
              </p>
              <p className="text-gray-600 mb-4">
                Tasmanian electricity prices are 24-29c/kWh, and solar batteries reduce your energy bills significantly. Tasmania&apos;s rural and remote areas particularly benefit from battery backup during weather events and outages, providing reliable energy independence for properties across the state.
              </p>
              <p className="text-gray-600 mb-8">
                Join 600+ Tasmanian households already saving with solar battery storage from Super Solar Energy.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#E8621A] text-white font-semibold hover:bg-[#c74f12] transition-colors"
              >
                Get Your Free Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Stats Strip */}
      <StatsStrip variant="light" />

      {/* Section 4: Services Accordion */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.h2
            className="text-3xl font-bold text-[#1a2332] mb-10 text-center font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Solar Services in Tasmania
          </motion.h2>
          <div className="space-y-0">
            {accordionItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100">
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full flex items-center justify-between py-5 px-2 text-left bg-white hover:bg-gray-50 transition-colors"
                  aria-expanded={openAccordion === index}
                >
                  <span className="text-lg font-semibold text-[#1a2332]">{item.title}</span>
                  <ChevronIcon open={openAccordion === index} />
                </button>
                <AnimatePresence initial={false}>
                  {openAccordion === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-2 pb-5 text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Suburbs We Service */}
      <section className="py-12 bg-[#F0F5FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.h2
            className="text-3xl font-bold text-[#1a2332] mb-8 text-center font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Areas We Service in Tasmania
          </motion.h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {suburbs.map((suburb) => (
              <span
                key={suburb}
                className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700"
              >
                {suburb}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">
            Don&apos;t see your area? We service all Tasmania regions.{' '}
            <Link href="/contact" className="text-[#E8621A] font-semibold hover:underline">Contact us</Link> to confirm.
          </p>
        </div>
      </section>

      {/* Section 6: Customer Reviews */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.h2
            className="text-3xl font-bold text-[#1a2332] mb-10 text-center font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Tasmania Customers Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[#E8621A] border-t border-r border-b border-t-gray-100 border-r-gray-100 border-b-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <QuoteIcon />
                <p className="text-gray-600 mt-3 mb-4 text-sm leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[#1a2332] text-sm">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6 font-display">
              Ready to Go Solar in Tasmania?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#E8621A] text-white font-semibold hover:bg-[#c74f12] transition-colors"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:1300090984"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-[#1a2332] text-[#1a2332] font-semibold hover:bg-[#1a2332] hover:text-white transition-colors"
              >
                Call 1300 09 09 84
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
