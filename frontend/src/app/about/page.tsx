'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import StatsStrip from '@/components/StatsStrip'

const TrophyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
  </svg>
)

const HeartIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
)

const LightBulbIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const values = [
  {
    title: 'Quality First',
    icon: TrophyIcon,
    description:
      'We use only premium Tier 1 components and maintain the highest installation standards, backed by comprehensive manufacturer and workmanship warranties.',
  },
  {
    title: 'Customer Focus',
    icon: HeartIcon,
    description:
      'Every solution is tailored to your specific needs, energy usage patterns, and budget. We provide ongoing support throughout your entire solar journey.',
  },
  {
    title: 'Innovation',
    icon: LightBulbIcon,
    description:
      'We stay at the cutting edge of solar technology, partnering with leading manufacturers to deliver the most efficient and reliable systems available.',
  },
]

const certifications = [
  {
    abbr: 'CEC',
    name: 'CEC Approved',
    description: 'Clean Energy Council Approved Installer',
  },
  {
    abbr: 'NETCC',
    name: 'NETCC Member',
    description: 'National Electrical & Communications Association',
  },
  {
    abbr: 'ISO',
    name: 'ISO Certified',
    description: 'ISO 9001 Quality Management',
  },
  {
    abbr: 'LEC',
    name: 'Licensed',
    description: 'Licensed Electrical Contractor',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function About() {
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
            <span className="section-label">About Us</span>
            <h1 className="text-display-lg heading-display text-[#1a2332] mt-3">
              About Super Solar Energy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Melbourne&apos;s trusted provider of premium solar and battery
              solutions since 2014
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-full h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/solarroof11.jpg"
                  alt="Super Solar Energy installation"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
                Leading Solar Innovation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                With over a decade of experience, Super Solar Energy has been at
                the forefront of Australia&apos;s renewable energy transition.
                From our base in Richmond, Melbourne, we&apos;ve helped more
                than 5,000 homes and businesses make the switch to clean,
                sustainable energy.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team of CEC-accredited installers delivers professional,
                safe installations using only premium Tier 1 components. We
                believe every Australian deserves access to affordable, reliable
                solar energy.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="inline-flex items-center gap-3 bg-[#FFF5EE] rounded-xl p-4">
                  <span className="text-2xl font-bold text-[#E8621A]">10+</span>
                  <span className="text-sm text-gray-700 font-medium">
                    Years Experience
                  </span>
                </div>
                <div className="inline-flex items-center gap-3 bg-[#FFF5EE] rounded-xl p-4">
                  <span className="text-2xl font-bold text-[#E8621A]">
                    5,000+
                  </span>
                  <span className="text-sm text-gray-700 font-medium">
                    Happy Customers
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-[#F0F5FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332]">
              Our Mission &amp; Values
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                className="card-super bg-white rounded-xl p-8 border-l-4 border-l-[#E8621A]"
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-full bg-[#E8621A]/10 flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-[#E8621A]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a2332] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <StatsStrip variant="orange" />

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#1a2332] text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Certifications
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.abbr}
                className="text-center"
                variants={itemVariants}
              >
                <div className="w-16 h-16 rounded-full bg-[#E8621A] text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold">{cert.abbr}</span>
                </div>
                <h3 className="font-semibold text-[#1a2332] mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-8">
              Ready to Go Solar?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="rounded-full bg-[#E8621A] text-white px-8 py-4 text-lg font-semibold inline-block hover:bg-[#c74f12] transition-colors"
              >
                Get Free Quote
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-[#E8621A] text-[#E8621A] px-8 py-4 text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#E8621A] hover:text-white transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
