'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const ArrowRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

interface Service {
  tab: string
  title: string
  image: string
  description: string
  features: string[]
  link: string
}

const services: Service[] = [
  {
    tab: 'Solar Batteries',
    title: 'Solar Battery Storage',
    image: '/solarroof.jpg',
    description:
      'Store excess solar energy and power your home day and night. Our premium battery systems maximise your solar investment.',
    features: [
      'Store excess solar energy for night use',
      'Backup power during grid outages',
      'Reduce electricity bills by up to 90%',
      '10-year manufacturer warranty',
    ],
    link: '/solar-battery',
  },
  {
    tab: 'Solar Panels',
    title: 'Premium Solar Panels',
    image: '/solarroof2.jpg',
    description:
      'Tier 1 solar panels with industry-leading efficiency. Professional installation backed by comprehensive warranties.',
    features: [
      'Tier 1 panels with 25-year warranty',
      'Up to 22% panel efficiency',
      'Professional CEC-accredited installation',
      'Real-time monitoring included',
    ],
    link: '/services',
  },
  {
    tab: 'Heat Pump',
    title: 'Hot Water Heat Pump',
    image: '/solarroof3.jpg',
    description:
      'Energy-efficient hot water solutions that reduce your energy consumption by up to 75% compared to traditional systems.',
    features: [
      'Up to 75% energy savings',
      'Works in all weather conditions',
      'Government rebates available',
      'Quiet, efficient operation',
    ],
    link: '/services',
  },
  {
    tab: 'HVAC',
    title: 'HVAC Systems',
    image: '/solarroof4.jpg',
    description:
      'Complete heating, ventilation and air conditioning solutions for year-round comfort with maximum energy efficiency.',
    features: [
      'Energy-efficient climate control',
      'Ducted and split system options',
      'Smart thermostat integration',
      'Professional sizing and installation',
    ],
    link: '/services',
  },
  {
    tab: 'Servicing',
    title: 'Servicing & Maintenance',
    image: '/solarroof5.jpg',
    description:
      'Keep your solar system performing at its best with our comprehensive servicing and maintenance plans.',
    features: [
      'Annual system health check',
      'Panel cleaning and inspection',
      'Inverter diagnostics',
      'Performance optimisation',
    ],
    link: '/services',
  },
]

export default function TabbedServices() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-16 sm:py-20 bg-white" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2332] font-display"
          >
            Our Services
          </h2>
          <p className="mt-3 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Complete energy solutions for your home and business
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <nav
            className="-mb-px flex overflow-x-auto scrollbar-hide gap-0"
            role="tablist"
            aria-label="Service categories"
          >
            {services.map((service, index) => (
              <button
                key={service.tab}
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={`tabpanel-${index}`}
                id={`tab-${index}`}
                onClick={() => setActiveTab(index)}
                className={`whitespace-nowrap px-4 sm:px-6 py-3 text-sm sm:text-base font-medium transition-colors duration-200 border-b-[3px] shrink-0 cursor-pointer ${
                  activeTab === index
                    ? 'border-[#E8621A] text-[#E8621A]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {service.tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            role="tabpanel"
            id={`tabpanel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={services[activeTab].image}
                alt={services[activeTab].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={activeTab === 0}
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-[#1a2332]">
                {services[activeTab].title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {services[activeTab].description}
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-3" role="list">
                {services[activeTab].features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 text-[#E8621A]">
                      <CheckIcon className="w-5 h-5" />
                    </span>
                    <span className="text-gray-700 text-sm sm:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Learn More link */}
              <Link
                href={services[activeTab].link}
                className="mt-8 inline-flex items-center gap-2 text-[#E8621A] font-semibold hover:underline transition-colors"
              >
                Learn More
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
