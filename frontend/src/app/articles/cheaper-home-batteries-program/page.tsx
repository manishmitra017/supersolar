'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// SVG Icon Components
const BoltIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const CheckIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const XIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const CheckCircleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export default function CheaperHomeBatteriesArticle() {
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
              <span className="text-gray-700">$2.3 Billion Cheaper Home Batteries Program: Complete Guide</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <div className="bg-white py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm text-gray-500 mb-3">August 2025 &middot; 8 min read</p>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2332]">
                $2.3 Billion Cheaper Home Batteries Program: Complete Guide
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
            <div className="bg-[#F9A825] border-l-4 border-[#0f1923] p-6 rounded-r-xl mb-10">
              <h2 className="text-xl font-bold text-[#0f1923] mb-3">Key Takeaway</h2>
              <p className="text-[#0f1923] text-lg">
                The Cheaper Home Batteries Program provides approximately <strong>30% off the upfront cost</strong> of
                eligible battery systems (5-100kWh). The discount is applied automatically at checkout by your installer
                - you don&apos;t need to apply separately.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                What Is The Cheaper Home Batteries Program?
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The Cheaper Home Batteries Program is a landmark Australian Government initiative that launched on
                <strong className="text-[#333333]"> 1 July 2025</strong>. It provides around a 30% discount on the upfront cost of installing
                eligible small-scale battery systems connected to new or existing rooftop solar.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                The program aims to make home batteries more accessible for Australian households, small businesses,
                and community organisations by reducing the barrier of high upfront costs.
              </p>

              {/* How It Works */}
              <div className="bg-white p-6 mb-10 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
                  <BoltIcon className="w-6 h-6 text-[#E8621A]" />
                  How It Works
                </h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#E8621A] text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <strong className="text-[#333333]">Choose Your Battery</strong>
                      <p className="text-[#444444]">Select an eligible battery system (5kWh - 100kWh) from our range of CEC-approved products.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#E8621A] text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <strong className="text-[#333333]">Get Your Quote</strong>
                      <p className="text-[#444444]">We provide a quote with the rebate already deducted - you see the discounted price upfront.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#E8621A] text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <strong className="text-[#333333]">Professional Installation</strong>
                      <p className="text-[#444444]">Our SAA-accredited installers complete the installation to all required standards.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#E8621A] text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <strong className="text-[#333333]">We Handle The Paperwork</strong>
                      <p className="text-[#444444]">We manage all the STC paperwork and government claims - you don&apos;t need to do anything.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                How Much Can You Save?
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The rebate provides approximately <strong className="text-[#333333]">$372 per kWh of usable battery capacity</strong> in 2025
                (around $330 after administrative fees). This translates to roughly 30% off the upfront cost.
              </p>

              {/* Savings Examples */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 text-center rounded-xl shadow-lg border-2 border-[#E8621A]">
                  <div className="text-3xl font-bold text-[#E8621A] mb-2">~$3,300</div>
                  <div className="text-lg font-semibold text-[#333333] mb-2">10kWh Battery</div>
                  <div className="text-[#666666] text-sm">Typical home backup system</div>
                </div>
                <div className="bg-white p-6 text-center rounded-xl shadow-lg border-2 border-[#F9A825]">
                  <div className="text-3xl font-bold text-[#0f1923] mb-2">~$4,000</div>
                  <div className="text-lg font-semibold text-[#333333] mb-2">11.5kWh Battery</div>
                  <div className="text-[#666666] text-sm">Tesla Powerwall size</div>
                </div>
                <div className="bg-white p-6 text-center rounded-xl shadow-lg border-2 border-[#E8621A]">
                  <div className="text-3xl font-bold text-[#E8621A] mb-2">~$5,000</div>
                  <div className="text-lg font-semibold text-[#333333] mb-2">13.5kWh Battery</div>
                  <div className="text-[#666666] text-sm">Premium home storage</div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Eligibility Requirements
              </h2>

              <div className="bg-[#efefef] rounded-xl p-6 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
                      <CheckIcon className="w-6 h-6 text-[#E8621A]" />
                      What&apos;s Eligible
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[#E8621A] mt-1">&#10003;</span>
                        <span className="text-[#444444]">Battery systems 5kWh - 100kWh nominal capacity</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#E8621A] mt-1">&#10003;</span>
                        <span className="text-[#444444]">New batteries with new or existing solar PV</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#E8621A] mt-1">&#10003;</span>
                        <span className="text-[#444444]">Homes, small businesses, and community facilities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#E8621A] mt-1">&#10003;</span>
                        <span className="text-[#444444]">Both on-grid and off-grid systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#E8621A] mt-1">&#10003;</span>
                        <span className="text-[#444444]">CEC-approved battery products</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
                      <XIcon className="w-6 h-6 text-red-500" />
                      What&apos;s NOT Eligible
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">&#10007;</span>
                        <span className="text-[#444444]">Batteries installed without solar PV</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">&#10007;</span>
                        <span className="text-[#444444]">Systems certified before 1 July 2025</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">&#10007;</span>
                        <span className="text-[#444444]">Used or refurbished batteries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">&#10007;</span>
                        <span className="text-[#444444]">Electric vehicle batteries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">&#10007;</span>
                        <span className="text-[#444444]">Second battery at same premises (if first was rebated)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Technical Requirements
              </h2>

              <div className="bg-white p-6 mb-10 border-2 border-[#E8621A] rounded-xl">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#E8621A] flex-shrink-0 mt-0.5" />
                    <span className="text-[#444444]"><strong className="text-[#333333]">VPP Capable:</strong> On-grid batteries must be capable of Virtual Power Plant integration (able to connect to the internet)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#E8621A] flex-shrink-0 mt-0.5" />
                    <span className="text-[#444444]"><strong className="text-[#333333]">CEC Approved:</strong> Battery and inverter must be on the Clean Energy Council approved product list</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#E8621A] flex-shrink-0 mt-0.5" />
                    <span className="text-[#444444]"><strong className="text-[#333333]">Accredited Installer:</strong> Installation must be done by a Solar Accreditation Australia (SAA) accredited installer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#E8621A] flex-shrink-0 mt-0.5" />
                    <span className="text-[#444444]"><strong className="text-[#333333]">Safety Standards:</strong> Must comply with AS/NZS 5139:2019 and the Best Practice Guide for Battery Storage</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Annual Bill Savings
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Beyond the upfront rebate, a home battery can deliver significant ongoing savings on your electricity bills:
              </p>

              <div className="bg-[#F9A825] rounded-xl p-8 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#0f1923] mb-2">$700 - $1,600</div>
                    <div className="text-[#0f1923]">Total annual electricity savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#0f1923] mb-2">$300 - $900</div>
                    <div className="text-[#0f1923]">Savings directly from battery</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                No Means Test Required
              </h2>

              <p className="text-[#444444] text-lg mb-8">
                Unlike some state programs, the Cheaper Home Batteries Program has <strong className="text-[#333333]">no means test</strong>.
                All eligible Australian households, regardless of income, can access the rebate. There&apos;s also no limit
                on the number of subsidies available - the scheme is uncapped.
              </p>
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
              <Link href="/articles/stc-battery-rebate-countdown-2026" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition">
                  <div className="relative h-40">
                    <Image
                      src="/batteryImage2.jpg"
                      alt="Your Battery Rebate Is Shrinking Every 6 Months"
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-3 left-3 bg-[#E8621A] text-white text-xs font-semibold rounded-full px-3 py-1">
                      February 2026
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-[#1a2332] line-clamp-2 group-hover:text-[#E8621A] transition-colors">
                      Your Battery Rebate Is Shrinking Every 6 Months
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
