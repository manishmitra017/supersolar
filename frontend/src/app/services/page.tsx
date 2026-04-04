'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const BatteryIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
  </svg>
)

const SunIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

const FireIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
  </svg>
)

const SnowflakeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3" />
  </svg>
)

const WrenchIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const StarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
)

interface Service {
  title: string
  image: string
  price: string
  popular?: boolean
  description: string
  features: string[]
  link: string
  icon: React.ComponentType<{ className?: string }>
}

const services: Service[] = [
  {
    title: 'Solar Batteries',
    image: '/solarroof.jpg',
    price: 'Starting from $8,500',
    popular: true,
    icon: BatteryIcon,
    description: 'Store excess solar energy and gain true energy independence with reliable backup power.',
    features: ['Store excess solar energy for night use', 'Backup power during grid outages', 'Reduce bills by up to 90%', '10-year manufacturer warranty', 'Real-time monitoring', 'Government rebates available'],
    link: '/solar-battery',
  },
  {
    title: 'Solar Panels',
    image: '/solarroof2.jpg',
    price: 'Starting from $2,480',
    icon: SunIcon,
    description: 'Premium Tier 1 panels with industry-leading efficiency and professional CEC-accredited installation.',
    features: ['Tier 1 panels with 25-year warranty', 'Up to 22% panel efficiency', 'CEC-accredited installation', 'Real-time monitoring included', 'String and micro-inverter options', 'Same-day consultations'],
    link: '/quote',
  },
  {
    title: 'Hot Water Heat Pump',
    image: '/solarroof3.jpg',
    price: 'Starting from $4,200',
    icon: FireIcon,
    description: 'Energy-efficient hot water that reduces consumption by up to 75% compared to traditional systems.',
    features: ['Up to 75% energy savings', 'Works in all weather conditions', 'Government rebates available', 'Quiet efficient operation', 'Replaces gas/electric systems', '5-year warranty'],
    link: '/quote',
  },
  {
    title: 'HVAC Systems',
    image: '/solarroof4.jpg',
    price: 'Starting from $3,500',
    icon: SnowflakeIcon,
    description: 'Year-round comfort with energy-efficient heating, ventilation and air conditioning solutions.',
    features: ['Energy-efficient climate control', 'Ducted and split system options', 'Smart thermostat integration', 'Professional sizing & installation', 'Year-round comfort', 'Quiet operation'],
    link: '/quote',
  },
  {
    title: 'Servicing & Maintenance',
    image: '/solarroof5.jpg',
    price: 'Starting from $299/year',
    icon: WrenchIcon,
    description: 'Keep your solar system performing at its best with comprehensive maintenance plans.',
    features: ['Annual system health check', 'Panel cleaning & inspection', 'Inverter diagnostics', 'Performance optimisation', 'Priority support', 'Warranty compliance'],
    link: '/quote',
  },
]

const steps = [
  { number: '1', title: 'Free Consultation', description: 'We assess your property, energy usage and recommend the best solution.' },
  { number: '2', title: 'Custom Design', description: 'Our engineers design a system tailored to your home and energy goals.' },
  { number: '3', title: 'Professional Installation', description: 'CEC-accredited installers complete your setup safely and efficiently.' },
  { number: '4', title: 'Ongoing Support', description: 'Monitoring, maintenance and support to keep your system at peak performance.' },
]

export default function Services() {
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
            <span className="section-label">Our Services</span>
            <h1 className="text-display-lg heading-display text-[#1a2332] mt-3">
              Complete Energy Solutions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Professional solar, battery, heat pump, HVAC installation and servicing across Australia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Government Rebate Banner */}
      <section className="bg-[#F9A825] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#1a2332] font-bold text-lg">
            Government Battery Rebates Available — Save Up to $8,000
          </p>
          <p className="text-[#1a2332]/80 text-sm mt-1">
            We handle all the rebate paperwork for you. Lock in your savings before they decrease.
          </p>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-16 bg-[#F0F5FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg border ${
                  service.popular
                    ? 'ring-2 ring-[#E8621A] border-[#E8621A]/30'
                    : 'border-gray-200'
                } flex flex-col group`}
              >
                {/* Image Header with Gradient Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#E8621A]/80 via-[#E8621A]/30 to-transparent" />

                  {/* Icon centered on overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Popular badge */}
                  {service.popular && (
                    <div className="absolute top-3 right-3 bg-[#F9A825] text-[#1a2332] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <StarIcon className="w-3.5 h-3.5" />
                      Most Popular
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#1a2332] mb-1">
                    {service.title}
                  </h3>

                  <span className="text-[#E8621A] font-bold text-sm mb-3">
                    {service.price}
                  </span>

                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6 flex-1">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckIcon className="w-4 h-4 text-[#E8621A] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Link
                      href="/quote"
                      className="flex-1 text-center rounded-full bg-[#E8621A] text-white py-2.5 text-sm font-bold hover:bg-[#c74f12] transition-colors"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href={service.link}
                      className="flex-1 text-center rounded-full border-2 border-gray-200 text-gray-700 py-2.5 text-sm font-semibold hover:border-[#E8621A] hover:text-[#E8621A] transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mt-3">
              Our Installation Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#F9A825] text-[#1a2332] flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="font-bold text-[#1a2332] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#E8621A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Super Solar Energy
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-12">
              Over 10 years of experience and 5,000+ successful installations across Australia
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '5,000+', label: 'Installations Completed' },
              { value: '10+', label: 'Years Experience' },
              { value: '4.9★', label: 'Google Rating' },
              { value: '10yr', label: 'Warranty Coverage' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">
              Ready to Transform Your Energy Future?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Get a free, no-obligation quote tailored to your home and energy needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="rounded-full bg-[#E8621A] text-white px-8 py-4 text-lg font-semibold hover:bg-[#c74f12] transition-colors"
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
