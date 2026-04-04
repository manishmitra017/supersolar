'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// SVG Icon Components
const BoltIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const CheckCircleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ShieldIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const BatteryIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h14a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2zm18 4v2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 11v2m3-2v2m3-2v2" />
  </svg>
)

const HomeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
)

export default function GoodWeArticle() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-white pt-8 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#E8621A] transition-colors">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link href="/articles" className="hover:text-[#E8621A] transition-colors">Articles</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-700">GoodWe ESA All-in-One: How Cosmic Renewable Can Help You ...</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-gray-500 mb-3">March 2026 &middot; 6 min read</p>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2332]">
              GoodWe ESA All-in-One: How Cosmic Renewable Can Help You Get Australia\'s Most Advanced Energy Storage System
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
{/* Product Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[300px] sm:h-[450px] rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white">
              <Image
                src="/banners/goodwe-all-in-one.png"
                alt="GoodWe ESA Three-Phase All-in-One Energy Storage System"
                fill
                className="object-contain p-6"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* What Is the GoodWe ESA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#333333] mb-4">
                    What Is the GoodWe ESA <span className="text-[#E8621A]">All-in-One?</span>
                  </h2>
                  <p className="text-[#666666] text-lg leading-relaxed mb-4">
                    The GoodWe ESA (Energy Storage All-in-One) is a revolutionary three-phase energy storage system that combines a solar inverter, high-voltage lithium iron phosphate (LFP) battery, and intelligent energy management into a single, pre-wired enclosure.
                  </p>
                  <p className="text-[#666666] text-lg leading-relaxed mb-4">
                    This CEC-approved system has secured all necessary Australian safety and performance certifications, making it one of the most advanced residential and commercial energy storage solutions available in the country.
                  </p>
                  <p className="text-[#666666] text-lg leading-relaxed">
                    With inverter capacity ranging from <strong>5kW to 29.9kW</strong> and storage from <strong>5kWh to 108kWh</strong>, the ESA is designed for everything from standard family homes to large rural properties and commercial premises.
                  </p>
                </motion.div>

                {/* Key Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#efefef] rounded-2xl p-6 sm:p-8"
                >
                  <h2 className="text-2xl font-display font-bold text-[#333333] mb-6 flex items-center gap-3">
                    <BoltIcon className="w-6 h-6 text-[#E8621A]" />
                    Key Features
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      'Pre-wired modular design in single enclosure',
                      'Modular battery for easy capacity expansion',
                      'Whole-home backup with ultra-fast switching',
                      'Arc-fault detection & fire suppression',
                      'High solar input with DC oversizing support',
                      'Intelligent tariff optimisation',
                      'Grid-connected and off-grid capable',
                      'Parallel capability for larger systems',
                      'LFP battery chemistry for safety & longevity',
                      'Future Amber integration for energy trading'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                        <span className="text-[#444444]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Who Is It For */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#333333] mb-4 flex items-center gap-3">
                    <HomeIcon className="w-6 h-6 text-[#E8621A]" />
                    Who Is the GoodWe ESA <span className="text-[#E8621A]">For?</span>
                  </h2>
                  <p className="text-[#666666] text-lg leading-relaxed mb-4">
                    The three-phase ESA is ideal for properties that need more power than a standard single-phase system can deliver:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Larger homes with high energy consumption (ducted AC, pool pumps, EVs)',
                      'Rural and regional properties seeking energy independence',
                      'Workshops, sheds, and home-based businesses',
                      'Commercial premises wanting to reduce electricity costs',
                      'Households wanting whole-home blackout protection',
                      'Properties planning to add battery capacity over time'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-[#666666] text-lg">
                        <CheckCircleIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* How Cosmic Can Help */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#E8621A] rounded-2xl p-6 sm:p-8 text-white"
                >
                  <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6">
                    How Super Solar Energy <span className="text-[#F9A825]">Can Help</span>
                  </h2>
                  <p className="text-white/90 text-lg mb-6">
                    As a CEC-approved installer with over 10 years of experience, Super Solar Energy is positioned to be one of the first installers offering the GoodWe ESA All-in-One system in Australia.
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Early Access & Priority Installation',
                        desc: 'Register your interest now and be among the first to have the GoodWe ESA installed when stock arrives from mid-March 2026.'
                      },
                      {
                        title: 'Expert System Design',
                        desc: 'Our team will assess your property to determine the optimal inverter and battery configuration for your energy needs.'
                      },
                      {
                        title: 'Government Rebate Maximisation',
                        desc: 'We handle all paperwork to ensure you receive the maximum available government rebates, potentially saving thousands.'
                      },
                      {
                        title: 'Professional Installation & Support',
                        desc: 'CEC-accredited installation with comprehensive warranty support and ongoing monitoring assistance.'
                      },
                      {
                        title: 'Future-Ready Planning',
                        desc: 'We help you plan for future expansion, including additional battery modules and Amber energy trading integration.'
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white/10 rounded-xl p-4 border border-white/10">
                        <h3 className="font-bold text-[#F9A825] mb-1">{item.title}</h3>
                        <p className="text-white/80 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Specifications Table */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#333333] mb-6 flex items-center gap-3">
                    <BatteryIcon className="w-6 h-6 text-[#E8621A]" />
                    Technical Specifications
                  </h2>
                  <div className="overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full">
                      <tbody className="divide-y divide-gray-200">
                        {[
                          ['Inverter Capacity', '5kW to 29.9kW'],
                          ['Storage Capacity', '5kWh to 108kWh'],
                          ['Battery Chemistry', 'Lithium Iron Phosphate (LFP)'],
                          ['Phase Output', 'Three-Phase'],
                          ['Design', 'Pre-wired, modular, single enclosure'],
                          ['Backup', 'Whole-home with ultra-fast switching'],
                          ['Safety', 'Arc-fault detection & fire suppression'],
                          ['Expandability', 'Modular battery architecture'],
                          ['CEC Approved', 'Yes - Australian certified'],
                          ['Availability', 'Late March / Early April 2026']
                        ].map(([label, value], index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-[#efefef]' : 'bg-white'}>
                            <td className="px-4 sm:px-6 py-3 font-semibold text-[#333333] text-sm sm:text-base">{label}</td>
                            <td className="px-4 sm:px-6 py-3 text-[#666666] text-sm sm:text-base">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>

                {/* Government Rebates Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#F9A825]/10 border border-[#F9A825]/30 rounded-2xl p-6 sm:p-8"
                >
                  <h2 className="text-2xl font-display font-bold text-[#333333] mb-4 flex items-center gap-3">
                    <ShieldIcon className="w-6 h-6 text-[#E8621A]" />
                    Government Rebates Apply
                  </h2>
                  <p className="text-[#666666] text-lg mb-4">
                    The GoodWe ESA system is eligible for Australian government battery rebates under the Cheaper Home Batteries Program. With federal rebates currently available up to $8,000, acting early ensures you lock in the maximum savings before STC values drop.
                  </p>
                  <p className="text-[#666666] text-lg">
                    Super Solar Energy handles all rebate applications and paperwork, ensuring you receive every dollar you&apos;re entitled to.
                  </p>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Register Interest CTA */}
                <div className="bg-[#0f1923] rounded-2xl p-6 text-white sticky top-24">
                  <div className="bg-[#F9A825] text-[#0f1923] px-3 py-1.5 rounded-full text-sm font-bold inline-block mb-4 animate-pulse">
                    COMING SOON
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display">Register Your Interest</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Be among the first in Australia to install the GoodWe ESA All-in-One. Stock expected from mid-March 2026.
                  </p>
                  <div className="space-y-3">
                    <Link
                      href="/quote"
                      className="block bg-[#F9A825] text-[#0f1923] px-6 py-3 rounded-lg font-bold text-center hover:bg-[#e09000] transition-all"
                    >
                      Get Free Quote
                    </Link>
                    <a
                      href="tel:1300090984"
                      className="block bg-white/10 text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-white/20 transition-all border border-white/20"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <PhoneIcon className="w-4 h-4" />
                        1300 09 09 84
                      </span>
                    </a>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/20">
                    <h4 className="font-semibold text-[#F9A825] mb-2 text-sm">Why Cosmic?</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-[#F9A825] flex-shrink-0" />
                        CEC Approved Installer
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-[#F9A825] flex-shrink-0" />
                        10+ Years Experience
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-[#F9A825] flex-shrink-0" />
                        5000+ Happy Customers
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-[#F9A825] flex-shrink-0" />
                        Full Rebate Assistance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-[#F9A825] flex-shrink-0" />
                        5-Star Google Rating
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="bg-[#efefef] rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#333333] mb-4 font-display">Related Articles</h3>
                  <div className="space-y-3">
                    {[
                      {
                        title: 'Battery Storage Revolution: 5kWh to 100kWh Systems',
                        slug: 'battery-storage-revolution'
                      },
                      {
                        title: '$2.3 Billion Cheaper Home Batteries Program',
                        slug: 'cheaper-home-batteries-program'
                      },
                      {
                        title: 'Federal Battery Rebate Changes: $7.2B Expansion',
                        slug: 'federal-battery-rebate-changes-2025'
                      }
                    ].map((article, index) => (
                      <Link
                        key={index}
                        href={`/articles/${article.slug}`}
                        className="block p-3 bg-white rounded-lg hover:bg-[#E8621A]/5 transition-colors border border-gray-200"
                      >
                        <span className="text-sm font-medium text-[#333333] hover:text-[#E8621A]">
                          {article.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
          </div>
        </div>
      </div>

      {/* More Articles */}
      <section className="bg-[#F0F5FA] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1a2332] mb-6">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/articles/australia-battery-boom-record-demand-may-2026-deadline" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition">
                  <div className="relative h-40">
                    <Image
                      src="/batteryImage1.jpg"
                      alt="Australia\'s Battery Boom Hits Record Highs"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-3 left-3 bg-[#E8621A] text-white text-xs font-semibold rounded-full px-3 py-1">
                      March 2026
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-[#1a2332] line-clamp-2 group-hover:text-[#E8621A] transition-colors">
                      Australia's Battery Boom Hits Record Highs
                    </h3>
                    <span className="text-[#E8621A] text-sm font-semibold mt-3 inline-block">Read more &rarr;</span>
                  </div>
                </div>
              </Link>
              <Link href="/articles/rooftop-solar-surpasses-coal-28gw-australia-2025" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition">
                  <div className="relative h-40">
                    <Image
                      src="/solarroof8.jpg"
                      alt="Australia\'s Rooftop Solar Hits 28.3 GW"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-3 left-3 bg-[#E8621A] text-white text-xs font-semibold rounded-full px-3 py-1">
                      March 2026
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-[#1a2332] line-clamp-2 group-hover:text-[#E8621A] transition-colors">
                      Australia's Rooftop Solar Hits 28.3 GW
                    </h3>
                    <span className="text-[#E8621A] text-sm font-semibold mt-3 inline-block">Read more &rarr;</span>
                  </div>
                </div>
              </Link>
              <Link href="/articles/cheaper-home-batteries-program" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition">
                  <div className="relative h-40">
                    <Image
                      src="/batteryImage2.jpg"
                      alt="$2.3 Billion Cheaper Home Batteries Program"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-3 left-3 bg-[#E8621A] text-white text-xs font-semibold rounded-full px-3 py-1">
                      August 2025
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-[#1a2332] line-clamp-2 group-hover:text-[#E8621A] transition-colors">
                      $2.3 Billion Cheaper Home Batteries Program
                    </h3>
                    <span className="text-[#E8621A] text-sm font-semibold mt-3 inline-block">Read more &rarr;</span>
                  </div>
                </div>
              </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a2332] mb-4">Ready to Go Solar?</h2>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-[#E8621A] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#c74f12] transition-colors"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
