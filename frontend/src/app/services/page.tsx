'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const WrenchIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
)

const StarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
)

const ShieldIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const CurrencyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const MapPinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
)

const ChartIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

interface Service {
  title: string
  image: string
  price: string
  popular?: boolean
  description: string
  features: string[]
  link?: string
}

const services: Service[] = [
  {
    title: 'Solar Batteries',
    image: '/solarroof.jpg',
    price: 'Starting from $8,500',
    popular: true,
    description:
      'Store excess solar energy and gain true energy independence. Our battery systems provide reliable backup power during outages and dramatically reduce your reliance on the grid.',
    features: [
      'Store excess solar energy',
      'Backup power during outages',
      'Reduce bills by up to 90%',
      '10-year manufacturer warranty',
      'Real-time monitoring',
      'Government rebates available',
    ],
    link: '/solar-battery',
  },
  {
    title: 'Solar Panels',
    image: '/solarroof2.jpg',
    price: 'Starting from $2,480',
    description:
      'Harness the power of the sun with premium Tier 1 solar panels. Our CEC-accredited installers ensure your system is optimised for maximum energy production and long-term reliability.',
    features: [
      'Tier 1 panels with 25-year warranty',
      'Up to 22% panel efficiency',
      'CEC-accredited installation',
      'Real-time monitoring included',
      'String and micro-inverter options',
      'Same-day consultations',
    ],
  },
  {
    title: 'Hot Water Heat Pump',
    image: '/solarroof3.jpg',
    price: 'Starting from $4,200',
    description:
      'Replace your old gas or electric hot water system with an energy-efficient heat pump. Enjoy significant savings while reducing your carbon footprint in any climate.',
    features: [
      'Up to 75% energy savings',
      'Works in all weather',
      'Government rebates available',
      'Quiet efficient operation',
      'Replaces gas/electric systems',
      '5-year warranty',
    ],
  },
  {
    title: 'HVAC Systems',
    image: '/solarroof4.jpg',
    price: 'Starting from $3,500',
    description:
      'Stay comfortable year-round with energy-efficient heating, ventilation and air conditioning. Our professionally sized systems deliver optimal climate control with minimal energy use.',
    features: [
      'Energy-efficient climate control',
      'Ducted and split system options',
      'Smart thermostat integration',
      'Professional sizing',
      'Year-round comfort',
      'Quiet operation',
    ],
  },
  {
    title: 'Servicing & Maintenance',
    image: '/solarroof5.jpg',
    price: 'Starting from $299/year',
    description:
      'Protect your investment and keep your energy systems running at peak performance with our comprehensive servicing and maintenance plans.',
    features: [
      'Annual system health check',
      'Panel cleaning and inspection',
      'Inverter diagnostics',
      'Performance optimisation',
      'Priority support',
      'Warranty compliance',
    ],
  },
]

const whyChooseFeatures = [
  {
    icon: WrenchIcon,
    title: 'Expert Installation',
    description: 'CEC-accredited professionals with years of hands-on experience.',
  },
  {
    icon: StarIcon,
    title: 'Premium Products',
    description: 'Only Tier 1 components from industry-leading manufacturers.',
  },
  {
    icon: ShieldIcon,
    title: 'Comprehensive Warranty',
    description: 'Up to 25-year panel and 10-year workmanship warranties.',
  },
  {
    icon: CurrencyIcon,
    title: 'Transparent Pricing',
    description: 'No hidden fees. Clear, upfront quotes every time.',
  },
  {
    icon: MapPinIcon,
    title: 'Local Support',
    description: 'Australian-owned with dedicated local service teams.',
  },
  {
    icon: ChartIcon,
    title: 'Proven Results',
    description: '5,000+ installations and a 4.9-star customer rating.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const featureVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Our Services</span>
            <h1 className="text-display-lg heading-display text-[#1a2332] mt-3">
              Complete Energy Solutions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Professional solar, battery, heat pump, HVAC installation and
              servicing across Australia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services — Alternating Rows */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => {
            const isEven = index % 2 === 1
            const isLast = index === services.length - 1

            return (
              <div key={service.title}>
                <motion.div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 ${
                    isEven ? 'lg:direction-rtl' : ''
                  }`}
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Image */}
                  <div className={`${isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative w-full h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? 'lg:order-1' : ''}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h2 className="text-2xl font-bold text-[#1a2332]">
                        {service.title}
                      </h2>
                      {service.popular && (
                        <span className="bg-[#E8621A] text-white rounded-full px-3 py-1 text-xs font-semibold">
                          Most Popular
                        </span>
                      )}
                    </div>

                    <span className="bg-[#FFF5EE] text-[#E8621A] rounded-full px-4 py-1.5 text-sm font-semibold inline-block mb-4">
                      {service.price}
                    </span>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {service.features.map((feature) => (
                        <motion.div
                          key={feature}
                          className="flex items-start gap-2"
                          variants={featureVariants}
                        >
                          <CheckIcon className="w-5 h-5 text-[#E8621A] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>

                    <Link
                      href={service.link ?? '/quote'}
                      className="rounded-full bg-[#E8621A] text-white px-6 py-3 font-semibold inline-block hover:bg-[#c74f12] transition-colors"
                    >
                      Get Quote
                    </Link>
                  </div>
                </motion.div>

                {!isLast && (
                  <div className="border-b border-gray-100" />
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#F0F5FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
                Why Choose Super Solar Energy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                With over 10 years of experience and more than 5,000 successful
                installations across Australia, Super Solar Energy delivers
                premium renewable energy solutions you can trust. Our
                CEC-accredited team is committed to quality workmanship,
                transparent pricing, and ongoing support long after your system
                is switched on.
              </p>
            </motion.div>

            {/* Right — feature grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {whyChooseFeatures.map((feat) => (
                <motion.div
                  key={feat.title}
                  className="flex items-start gap-4"
                  variants={featureVariants}
                >
                  <div className="w-10 h-10 rounded-full bg-[#E8621A]/10 flex items-center justify-center flex-shrink-0">
                    <feat.icon className="w-5 h-5 text-[#E8621A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a2332]">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-gray-600">{feat.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-8">
              Ready to Transform Your Energy Future?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="rounded-full bg-[#E8621A] text-white px-8 py-4 text-lg font-semibold inline-block hover:bg-[#c74f12] transition-colors"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:1300090984"
                className="rounded-full border-2 border-[#E8621A] text-[#E8621A] px-8 py-4 text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#E8621A] hover:text-white transition-colors"
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
