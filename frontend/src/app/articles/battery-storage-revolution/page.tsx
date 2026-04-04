'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// SVG Icon Components
const BoltIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const XIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const ShieldCheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const SunIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

const UserIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
)

const CheckBadgeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>
)

const InformationCircleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
)

export default function BatteryStorageRevolutionArticle() {
  return (
    <div className="bg-white">
      <article>
        {/* Breadcrumb */}
        <div className="bg-white pt-8 pb-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-gray-500">
              <Link href="/" className="hover:text-[#E8621A] transition-colors">Home</Link>
              <span className="mx-2">&gt;</span>
              <Link href="/articles" className="hover:text-[#E8621A] transition-colors">Articles</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-gray-700">Battery Storage Revolution: 5kWh to 100kWh Systems Now El...</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <div className="bg-white py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm text-gray-500 mb-3">August 2025 &middot; 7 min read</p>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2332]">
                Battery Storage Revolution: 5kWh to 100kWh Systems Now Eligible
              </h1>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
            <div className="bg-[#F9A825] p-6 mb-10 border-l-4 border-[#0f1923] rounded-r-xl">
              <h2 className="text-xl font-bold text-[#0f1923] mb-3 flex items-center gap-2">
                <BoltIcon className="w-6 h-6" />
                Key Takeaway
              </h2>
              <p className="text-[#0f1923] text-lg">
                The Cheaper Home Batteries Program covers a wide range of battery sizes from <strong>5kWh to 100kWh</strong>,
                but only batteries on the <strong>CEC approved product list</strong> and installed by accredited
                professionals qualify for the rebate.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Battery Size Requirements
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The Cheaper Home Batteries Program applies to battery systems with a <strong className="text-[#333333]">nominal capacity between
                5kWh and 100kWh</strong>. The nominal capacity is the maximum amount of energy a battery can store at
                full charge - typically the capacity shown on the product label.
              </p>

              {/* Capacity Range Visual */}
              <div className="bg-[#efefef] p-8 mb-10 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-center text-[#333333]">Eligible Capacity Range</h3>
                <div className="flex items-center justify-between max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#E8621A]">5kWh</div>
                    <div className="text-[#666666]">Minimum</div>
                  </div>
                  <div className="flex-1 mx-8 h-4 bg-gray-300 rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E8621A] to-[#F9A825] rounded-full"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#0f1923]">100kWh</div>
                    <div className="text-[#666666]">Maximum</div>
                  </div>
                </div>
                <p className="text-center text-[#666666] mt-6">
                  Rebate applies to the first 50kWh of usable capacity
                </p>
              </div>

              <h3 className="text-xl font-bold text-[#333333] mb-4">
                Stacking Smaller Batteries
              </h3>

              <p className="text-[#444444] text-lg mb-8">
                If you have modular batteries, you can combine them to meet the minimum 5kWh threshold. When combining
                batteries as one system, the combined capacity needs to be at least 5kWh and not exceed 100kWh in
                nominal capacity.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                CEC Approval Requirements
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                To qualify for the rebate, both the battery and its inverter must appear on the
                <strong className="text-[#333333]"> Clean Energy Council&apos;s (CEC) approved product list</strong>. This ensures all installed
                equipment meets Australian safety and performance standards.
              </p>

              <div className="bg-white p-6 mb-10 border-2 border-[#E8621A] rounded-xl">
                <h4 className="font-bold text-[#E8621A] mb-4 flex items-center gap-2">
                  <ShieldCheckIcon className="w-6 h-6" />
                  CEC Approval Ensures:
                </h4>
                <ul className="space-y-3 text-[#444444]">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                    <span>Batteries meet relevant Australian safety standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                    <span>Products are tested by IEC or JAS-ANZ accredited bodies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                    <span>Compliance with industry best practice requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                    <span>Only lithium-based batteries currently qualify</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Technical Requirements
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="w-12 h-12 bg-[#E8621A]/10 rounded-full flex items-center justify-center mb-4">
                    <BoltIcon className="w-6 h-6 text-[#E8621A]" />
                  </div>
                  <h4 className="font-bold text-[#333333] mb-2">VPP Capability</h4>
                  <p className="text-[#444444]">On-grid batteries must be VPP (Virtual Power Plant) capable - able to connect to the internet and respond to external signals. You don&apos;t have to join a VPP, but the battery must be capable.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="w-12 h-12 bg-[#E8621A]/10 rounded-full flex items-center justify-center mb-4">
                    <SunIcon className="w-6 h-6 text-[#E8621A]" />
                  </div>
                  <h4 className="font-bold text-[#333333] mb-2">Solar PV Required</h4>
                  <p className="text-[#444444]">Batteries must be installed with new or existing solar PV (up to 100kW). Standalone batteries without solar are not eligible for the rebate.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="w-12 h-12 bg-[#E8621A]/10 rounded-full flex items-center justify-center mb-4">
                    <CheckBadgeIcon className="w-6 h-6 text-[#E8621A]" />
                  </div>
                  <h4 className="font-bold text-[#333333] mb-2">Safety Standards</h4>
                  <p className="text-[#444444]">Must comply with AS/NZS 5139:2019 and the Best Practice Guide: Battery Storage Equipment for safe installation.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="w-12 h-12 bg-[#E8621A]/10 rounded-full flex items-center justify-center mb-4">
                    <UserIcon className="w-6 h-6 text-[#E8621A]" />
                  </div>
                  <h4 className="font-bold text-[#333333] mb-2">Accredited Installer</h4>
                  <p className="text-[#444444]">Installation must be carried out or supervised by a technician accredited by Solar Accreditation Australia (SAA).</p>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                What Qualifies and What Doesn&apos;t
              </h2>

              <div className="bg-[#efefef] p-6 mb-10 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
                      <CheckIcon className="w-6 h-6 text-[#E8621A]" />
                      Eligible Systems
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                        <span className="text-[#444444]">New CEC-approved lithium batteries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                        <span className="text-[#444444]">On-grid systems (VPP capable)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                        <span className="text-[#444444]">Off-grid systems (no VPP requirement)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                        <span className="text-[#444444]">Residential, small business, community</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                        <span className="text-[#444444]">Additions to existing solar systems</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
                      <XIcon className="w-6 h-6 text-red-500" />
                      NOT Eligible
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <XIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[#444444]">Electric vehicle (EV) batteries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[#444444]">EV charging systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[#444444]">Used or refurbished batteries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[#444444]">Grid-only storage (no solar)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[#444444]">Non-CEC approved products</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Popular CEC-Approved Batteries
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Here are some of the most popular battery brands and models that are CEC-approved and eligible for
                the rebate:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {['Tesla Powerwall', 'BYD Battery-Box', 'Enphase IQ', 'SolarEdge Home Battery', 'LG RESU', 'Sungrow SBR', 'Alpha ESS', 'Huawei LUNA'].map((brand) => (
                  <div key={brand} className="bg-white px-4 py-3 rounded-lg text-center border border-gray-200 shadow-sm">
                    <span className="text-[#333333] font-medium">{brand}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 mb-10 border-2 border-[#F9A825] rounded-xl">
                <h4 className="font-bold text-[#0f1923] mb-3 flex items-center gap-2">
                  <InformationCircleIcon className="w-6 h-6" />
                  Important Note
                </h4>
                <p className="text-[#444444]">
                  The CEC approved product list is regularly updated. Always verify that your chosen battery is on
                  the current list at the time of installation. We can help you select a compliant system that
                  qualifies for the full rebate.
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Rebate Value by Battery Size
              </h2>

              <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-200">
                <table className="w-full">
                  <thead className="bg-[#E8621A]">
                    <tr>
                      <th className="text-left p-4 text-white">Battery Size</th>
                      <th className="text-right p-4 text-white">Estimated Rebate (2025)</th>
                      <th className="text-center p-4 text-white">Common Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-medium text-[#333333]">5 kWh</td>
                      <td className="p-4 text-right font-bold text-[#E8621A]">~$1,650</td>
                      <td className="p-4 text-center text-[#666666]">Basic backup</td>
                    </tr>
                    <tr className="bg-[#efefef]">
                      <td className="p-4 font-medium text-[#333333]">10 kWh</td>
                      <td className="p-4 text-right font-bold text-[#E8621A]">~$3,300</td>
                      <td className="p-4 text-center text-[#666666]">Average home</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-[#333333]">13.5 kWh</td>
                      <td className="p-4 text-right font-bold text-[#E8621A]">~$4,450</td>
                      <td className="p-4 text-center text-[#666666]">Tesla Powerwall</td>
                    </tr>
                    <tr className="bg-[#efefef]">
                      <td className="p-4 font-medium text-[#333333]">20 kWh</td>
                      <td className="p-4 text-right font-bold text-[#E8621A]">~$6,600</td>
                      <td className="p-4 text-center text-[#666666]">Large home</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-[#333333]">30 kWh</td>
                      <td className="p-4 text-right font-bold text-[#E8621A]">~$9,900</td>
                      <td className="p-4 text-center text-[#666666]">Small business</td>
                    </tr>
                    <tr className="bg-[#efefef]">
                      <td className="p-4 font-medium text-[#333333]">50 kWh+</td>
                      <td className="p-4 text-right font-bold text-[#E8621A]">~$16,500 (capped)</td>
                      <td className="p-4 text-center text-[#666666]">Commercial</td>
                    </tr>
                  </tbody>
                </table>
                <div className="p-4 bg-[#efefef] text-sm text-[#666666]">
                  * Rebate capped at 50kWh usable capacity. Based on $330/kWh after admin fees.
                </div>
              </div>
            </div>

            
            </motion.div>
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
      </article>
    </div>
  )
}
