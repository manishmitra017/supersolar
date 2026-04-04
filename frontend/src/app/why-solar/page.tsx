'use client'

import Link from 'next/link'
import Image from 'next/image'
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

const benefits = [
  {
    title: 'Slash Your Energy Bills',
    subtitle: 'Save up to 90% on electricity',
    description:
      'Solar energy can dramatically reduce or even eliminate your electricity bills. With rising energy costs, solar provides predictable, stable energy costs for decades.',
    features: [
      'Save 70-90% on electricity bills',
      'Typical payback period of 4-7 years',
      '25+ years of free electricity after payback',
      'Protection against rising energy costs',
    ],
    image: '/solarroof4.jpg',
    imageAlt: 'Solar panels reducing energy bills on Australian home',
  },
  {
    title: 'Increase Property Value',
    subtitle: 'Up to $6,000 per kW installed',
    description:
      'Solar installations consistently increase property values. Studies show that homes with solar panels sell faster and for higher prices than comparable homes without solar.',
    features: [
      'Average increase of $6,000 per kW installed',
      'Homes sell 20% faster than non-solar homes',
      'Property tax exemptions in many areas',
      'Appeal to environmentally conscious buyers',
    ],
    image: '/solarroof9.jpg',
    imageAlt: 'Solar installation increasing home property value',
  },
  {
    title: 'Protect Against Rising Prices',
    subtitle: 'True energy independence',
    description:
      'Generate your own electricity and reduce dependence on the grid and volatile energy prices. With battery storage, you can achieve near-complete energy independence.',
    features: [
      'Lock in your energy costs for 25+ years',
      'No more bill shock from rate increases',
      'Feed-in tariffs earn you money',
      'Battery storage for 24/7 self-sufficiency',
    ],
    image: '/solarroof6.jpg',
    imageAlt: 'Energy independence with solar panels',
  },
  {
    title: 'Reduce Your Carbon Footprint',
    subtitle: 'Equivalent to planting 2,500 trees',
    description:
      'Solar energy is clean, renewable, and helps reduce greenhouse gas emissions. By choosing solar, you are making a positive impact on the environment for generations.',
    features: [
      'Zero emissions during operation',
      'Reduces dependence on fossil fuels',
      'Average system prevents 100,000+ lbs CO2 over lifetime',
      'Equivalent to planting 2,500 trees',
    ],
    image: '/solarroof7.jpg',
    imageAlt: 'Environmentally friendly solar energy installation',
  },
]

const stcData = [
  { period: '2025 (Current)', factor: '9.3', rebate: '$372', status: 'Current Rate', highlight: 'gold' },
  { period: 'Jan \u2013 Apr 2026', factor: '8.4', rebate: '$336', status: 'Upcoming', highlight: 'orange' },
  { period: 'May \u2013 Dec 2026', factor: '6.8', rebate: '$272', status: 'New Rules', highlight: 'red' },
  { period: '2027 H1', factor: '5.7', rebate: '$228', status: '\u2014', highlight: '' },
  { period: '2027 H2', factor: '5.2', rebate: '$208', status: '\u2014', highlight: '' },
  { period: '2028 H1', factor: '4.6', rebate: '$184', status: '\u2014', highlight: '' },
  { period: '2028 H2', factor: '4.1', rebate: '$164', status: '\u2014', highlight: '' },
  { period: '2029 H1', factor: '3.6', rebate: '$144', status: '\u2014', highlight: '' },
  { period: '2029 H2', factor: '3.1', rebate: '$124', status: '\u2014', highlight: '' },
  { period: '2030 H1', factor: '2.6', rebate: '$104', status: '\u2014', highlight: '' },
  { period: '2030 H2', factor: '2.1', rebate: '$84', status: '\u2014', highlight: '' },
]

export default function WhySolar() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Why Solar</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl heading-display text-[#1a2332] mt-3">
              Why Choose Solar Energy?
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Join millions of Australians who have already made the switch to clean,
              renewable solar energy. Save money, increase property value, and help
              create a sustainable future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits — Alternating Rows */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {benefits.map((benefit, index) => {
            const isEven = index % 2 === 1

            return (
              <div key={benefit.title}>
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12"
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Image */}
                  <div className={isEven ? 'lg:order-2' : ''}>
                    <div className="relative w-full h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={benefit.image}
                        alt={benefit.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? 'lg:order-1' : ''}>
                    <span className="bg-[#FFF5EE] text-[#E8621A] rounded-full px-4 py-1.5 text-sm font-semibold inline-block mb-4">
                      {benefit.subtitle}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-4">
                      {benefit.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {benefit.description}
                    </p>
                    <ul className="space-y-3">
                      {benefit.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {index < benefits.length - 1 && (
                  <div className="border-b border-gray-100" />
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* STC Rebate Table */}
      <section className="py-16 bg-[#F0F5FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Government Rebates</span>
            <h2 className="text-3xl md:text-4xl heading-display text-[#1a2332] mt-3">
              STC Factor Timeline
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Solar rebates are declining every year. The sooner you install, the more you save.
              Here is the projected STC factor schedule showing how rebate values decrease over time.
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#F0F5FA]">
                      <th className="text-left p-4 font-semibold text-[#1a2332]">Period</th>
                      <th className="text-right p-4 font-semibold text-[#1a2332]">STC Factor</th>
                      <th className="text-right p-4 font-semibold text-[#1a2332]">Rebate per kWh*</th>
                      <th className="text-center p-4 font-semibold text-[#1a2332]">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {stcData.map((row, index) => (
                      <tr
                        key={index}
                        className={
                          row.highlight === 'gold'
                            ? 'bg-[#F9A825]/10'
                            : row.highlight === 'red'
                              ? 'bg-red-50'
                              : index % 2 === 0
                                ? 'bg-white'
                                : 'bg-gray-50/50'
                        }
                      >
                        <td className={`p-4 ${row.highlight === 'gold' ? 'font-semibold text-[#1a2332]' : row.highlight === 'red' ? 'font-semibold text-red-700' : 'text-gray-600'}`}>
                          {row.period}
                        </td>
                        <td className={`p-4 text-right font-semibold ${row.highlight === 'gold' ? 'text-[#1a2332] text-lg' : row.highlight === 'red' ? 'text-red-700 text-lg' : 'text-[#1a2332]'}`}>
                          {row.factor}
                        </td>
                        <td className={`p-4 text-right font-semibold ${row.highlight === 'gold' ? 'text-[#1a2332] text-lg' : row.highlight === 'red' ? 'text-red-700' : 'text-[#1a2332]'}`}>
                          {row.rebate}
                        </td>
                        <td className="p-4 text-center">
                          {row.highlight === 'gold' && (
                            <span className="bg-[#F9A825] text-[#1a2332] px-3 py-1 rounded-full text-sm font-semibold">
                              {row.status}
                            </span>
                          )}
                          {row.highlight === 'orange' && (
                            <span className="bg-[#E8621A]/10 text-[#E8621A] border border-[#E8621A]/30 px-3 py-1 rounded-full text-sm">
                              {row.status}
                            </span>
                          )}
                          {row.highlight === 'red' && (
                            <span className="bg-red-100 text-red-700 border border-red-300 px-3 py-1 rounded-full text-sm">
                              {row.status}
                            </span>
                          )}
                          {!row.highlight && (
                            <span className="text-gray-400">{row.status}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-gray-50 text-sm text-gray-500 border-t border-gray-100">
                * Rebate per kWh calculated at STC market rate of ~$40 each. New tiered rebate system applies from May 2026 onwards.
              </div>
            </div>
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
              Ready to Make the Switch to Solar?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who are saving money and helping
              the environment with clean solar energy.
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
