'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

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

const jargonTerms = [
  { term: "kWh (Kilowatt-hour)", definition: "The amount of energy your battery can store. Think of it like the size of your fuel tank. A 10kWh battery can power a 1kW appliance for 10 hours." },
  { term: "DoD (Depth of Discharge)", definition: "How much of the battery\u0027s total capacity you can safely use. A 90% DoD on a 10kWh battery means you can use 9kWh before recharging." },
  { term: "Round-Trip Efficiency", definition: "How much energy you get back compared to what you put in. A 90% efficiency means you get 9kWh back for every 10kWh stored." },
  { term: "Cycle Life", definition: "How many times you can charge and discharge before capacity degrades. 6,000 cycles = 16+ years of daily use." },
  { term: "AC vs DC Coupling", definition: "AC-coupled batteries work with existing solar systems. DC-coupled batteries are more efficient but usually need new solar installation." },
  { term: "UPS (Uninterruptible Power Supply)", definition: "Instant backup power during blackouts. No delay between power outage and battery takeover - like having a generator that starts instantly." },
  { term: "LiFePO4 (Lithium Iron Phosphate)", definition: "Safer battery chemistry than standard lithium-ion. No cobalt, more stable, longer-lasting, and won\u0027t overheat." },
  { term: "EMS (Energy Management System)", definition: "Smart software that decides when to store energy, use it, or send it to the grid based on your usage patterns and electricity rates." },
  { term: "VPP (Virtual Power Plant)", definition: "A network of batteries that work together to stabilize the grid. You might get paid for letting your battery help during peak demand." },
  { term: "Peak/Off-Peak Rates", definition: "Electricity costs more during peak times (usually 2-8pm). Batteries let you use stored cheap off-peak power during expensive peak times." },
]

const howItWorks = [
  {
    step: '1',
    title: 'Solar Panels Generate Power',
    description: 'During the day, your solar panels convert sunlight into DC electricity. This power first goes to your home to run appliances.',
  },
  {
    step: '2',
    title: 'Excess Power Gets Stored',
    description: "Any extra solar power your home doesn\u0027t use immediately gets stored in your battery for later. This is when electricity is free!",
  },
  {
    step: '3',
    title: 'Battery Powers Your Home at Night',
    description: 'When the sun goes down or on cloudy days, your battery automatically powers your home instead of drawing expensive grid electricity.',
  },
  {
    step: '4',
    title: 'Blackout Protection',
    description: 'If the grid goes down, your battery instantly takes over (with UPS feature) - keeping lights, fridge, and essential appliances running.',
  },
]

const faqs = [
  { question: "How much does a solar battery cost in Australia?", answer: "With government rebates, battery systems start from around $4,000-$6,000 for a 5kWh system. A 10kWh system typically costs $8,000-$12,000 after rebates. The Cheaper Home Batteries program can reduce costs by up to $3,500." },
  { question: "Will a battery save me money?", answer: "Yes! Most households save 70-90% on electricity bills. If you\u0027re paying $500+/quarter for electricity, a battery typically pays for itself in 4-7 years, then provides 15+ years of free power." },
  { question: "What size battery do I need?", answer: "For an average household: 5kWh covers essentials (fridge, lights, TV), 10kWh powers most of your home, 13.5kWh+ provides full energy independence. Check your evening electricity usage (typically 5-8pm) to determine the right size." },
  { question: "Can I add a battery to my existing solar system?", answer: "Absolutely! AC-coupled batteries work with any existing solar system. We\u0027ll assess your current setup and recommend the best compatible battery." },
  { question: "How long do solar batteries last?", answer: "Quality batteries like Tesla Powerwall, Alpha ESS, and others last 10-15 years with warranties covering 10 years or 6,000-10,000 cycles. That\u0027s roughly 16+ years of daily use." },
  { question: "Are solar batteries safe?", answer: "Modern lithium batteries (especially LiFePO4 chemistry) are extremely safe. They have multiple safety features: thermal protection, overcharge prevention, and fire-resistant casings. We only install batteries meeting Australian safety standards." },
  { question: "What happens during a blackout?", answer: "With backup-enabled batteries, your home switches to battery power instantly (0.02 seconds with UPS). You won\u0027t even notice the power went out! Essential circuits stay powered for hours or days depending on battery size and usage." },
  { question: "Can I go completely off-grid?", answer: "Technically yes, but most people stay grid-connected for backup. A typical off-grid system needs 15-30kWh+ of batteries and 10kW+ solar. For most households, a grid-connected battery system is more cost-effective." },
]

export default function BatteryGuide() {
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
            <span className="section-label">Battery Guide</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl heading-display text-[#1a2332] mt-3">
              Solar Battery 101: Complete Buyer&apos;s Guide
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Everything you need to know about solar batteries -- explained simply
            </p>
          </motion.div>
        </div>
      </section>

      {/* Jargon Buster */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Terminology</span>
            <h2 className="text-3xl heading-display text-[#1a2332] mt-3 mb-2">
              Battery Jargon Buster
            </h2>
            <p className="text-gray-600">
              No more confusion! Here&apos;s what all those technical terms actually mean:
            </p>
          </motion.div>

          <div className="space-y-4">
            {jargonTerms.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#F0F5FA] rounded-xl p-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <h3 className="text-lg font-bold text-[#E8621A] mb-2">{item.term}</h3>
                <p className="text-gray-600 leading-relaxed">{item.definition}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Batteries Work */}
      <section className="py-12 bg-[#F0F5FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">How It Works</span>
            <h2 className="text-3xl heading-display text-[#1a2332] mt-3">
              How Solar Batteries Actually Work
            </h2>
          </motion.div>

          <div className="space-y-4">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E8621A] flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a2332] mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">FAQ</span>
            <h2 className="text-3xl heading-display text-[#1a2332] mt-3">
              Most Common Questions Answered
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-[#F0F5FA] rounded-xl p-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <h3 className="text-lg font-bold text-[#1a2332] mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
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
              Ready to Get Your Solar Battery?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a free personalized quote with government rebate calculations
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
                Call 1300 09 09 84
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
