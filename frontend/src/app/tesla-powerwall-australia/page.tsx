'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Script from 'next/script'

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

const features = [
  { title: '13.5kWh Capacity', description: 'Enough to power most homes through the night' },
  { title: '97.5% Efficiency', description: 'Industry-leading round-trip efficiency' },
  { title: '10 Year Warranty', description: 'Comprehensive coverage for peace of mind' },
  { title: 'Tesla App Control', description: 'Monitor and control from anywhere' },
  { title: 'Storm Watch', description: 'Auto-charges before severe weather' },
  { title: 'Time-Based Control', description: 'Maximize savings with smart scheduling' },
]

const benefits = [
  'Full home backup during power outages',
  'Integrated solar inverter (no separate unit needed)',
  'Sleek, compact wall-mounted design',
  'Works with existing solar systems',
  'Compatible with Tesla Solar Roof',
  'OTA updates for new features',
  'VPP ready for grid services income',
  '24/7 monitoring via Tesla app',
]

export default function TeslaPowerwallAustralia() {
  return (
    <div className="bg-white">
      <Script id="tesla-powerwall-schema" type="application/ld+json" strategy="afterInteractive">
        {`{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Tesla Powerwall 3 Australia",
          "description": "Tesla Powerwall 3 home battery system with professional installation across Australia",
          "brand": "Tesla",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "AUD",
            "price": "12000",
            "availability": "https://schema.org/InStock"
          }
        }`}
      </Script>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Tesla Powerwall</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl heading-display text-[#1a2332] mt-3">
              Tesla Powerwall 3 Australia
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Australia&apos;s most advanced home battery system. 13.5kWh capacity,
              integrated inverter, smartphone control. From $12,000 installed with
              government rebates up to $4,600.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-[#FFF5EE] text-[#E8621A] rounded-full px-6 py-2 text-sm font-semibold">
                Government Rebate: Save $4,600
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-[#F0F5FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Key Features</span>
            <h2 className="text-3xl md:text-4xl heading-display text-[#1a2332] mt-3">
              Why Choose Powerwall 3?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <h3 className="text-lg font-bold text-[#1a2332] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Benefits</span>
            <h2 className="text-3xl md:text-4xl heading-display text-[#1a2332] mt-3">
              What You Get
            </h2>
          </motion.div>

          <motion.div
            className="bg-[#F0F5FA] rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-[#F0F5FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Pricing</span>
            <h2 className="text-3xl md:text-4xl heading-display text-[#1a2332] mt-3">
              Tesla Powerwall 3 Pricing
            </h2>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <div className="text-gray-500 text-lg mb-2">Starting from</div>
              <div className="text-5xl md:text-6xl font-bold text-[#1a2332] mb-2">$12,000</div>
              <div className="text-[#E8621A] font-semibold">Fully installed with rebates</div>
            </div>

            <div className="bg-[#FFF5EE] rounded-xl p-4 mb-6 inline-block">
              <div className="text-sm text-gray-500 mb-1">Government rebate saves you</div>
              <div className="text-2xl font-bold text-[#E8621A]">Up to $4,600</div>
            </div>

            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Price includes professional CEC-certified installation, 10-year warranty,
              and full system configuration. Finance options available.
            </p>

            <Link
              href="/quote"
              className="bg-[#E8621A] text-white hover:bg-[#c74f12] px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-2 transition-colors"
            >
              Get Your Custom Quote
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl heading-display text-[#1a2332] mb-4">
              Ready for Energy Independence?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of Australian households powered by Tesla Powerwall
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
