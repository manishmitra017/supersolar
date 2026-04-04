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

const ClockIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ExclamationTriangleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
)

export default function MaximizeGovernmentBenefitsArticle() {
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
              <span className="text-gray-700">How Solar Households Can Maximize Government Benefits in ...</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <div className="bg-white py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm text-gray-500 mb-3">August 2025 &middot; 12 min read</p>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2332]">
                How Solar Households Can Maximize Government Benefits in 2025
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
                In 2025, Australian households can access <strong>multiple incentives</strong> for solar and batteries.
                By combining federal STC rebates with the new battery program and state-specific incentives, you can
                save <strong>$6,000 - $10,000+</strong> on a solar and battery system.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Federal Government Programs
              </h2>

              <h3 className="text-xl font-bold text-[#333333] mb-4">
                1. Small-scale Renewable Energy Scheme (SRES) - Solar Panel Rebate
              </h3>

              <p className="text-[#444444] text-lg mb-6">
                The SRES remains the backbone of Australia&apos;s solar incentive system. When you install a solar system
                under 100kW, you generate Small-scale Technology Certificates (STCs) which are typically redeemed as
                an <strong className="text-[#333333]">upfront discount</strong> on your installation.
              </p>

              <div className="bg-white p-6 mb-8 border-2 border-[#E8621A] rounded-xl">
                <h4 className="font-bold text-[#E8621A] mb-3">2025 Solar Rebate Value</h4>
                <ul className="space-y-2 text-[#444444]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8621A]">&#8226;</span>
                    <span>Average 6.6kW system: <strong className="text-[#333333]">~$2,400</strong> rebate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8621A]">&#8226;</span>
                    <span>The rebate reduces each year until 2030 when SRES ends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8621A]">&#8226;</span>
                    <span>Act sooner to maximize your savings</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-[#333333] mb-4">
                2. Cheaper Home Batteries Program - Battery Rebate
              </h3>

              <p className="text-[#444444] text-lg mb-6">
                From 1 July 2025, the Cheaper Home Batteries Program provides around <strong className="text-[#333333]">30% off</strong> the cost
                of installing a battery. This is delivered through the same STC mechanism, with the government funding
                additional certificates for battery installations.
              </p>

              <div className="bg-white p-6 mb-8 border-2 border-[#F9A825] rounded-xl">
                <h4 className="font-bold text-[#0f1923] mb-3">Battery Rebate Value</h4>
                <ul className="space-y-2 text-[#444444]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8621A]">&#8226;</span>
                    <span>Up to <strong className="text-[#333333]">$372 per usable kWh</strong> (~$330 after admin fees)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8621A]">&#8226;</span>
                    <span>10-13.5kWh battery: <strong className="text-[#333333]">~$3,300 - $4,000</strong> savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8621A]">&#8226;</span>
                    <span>Can be combined with state battery incentives</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-[#333333] mb-4">
                3. Community Solar Banks Program
              </h3>

              <p className="text-[#444444] text-lg mb-8">
                For those who can&apos;t install their own solar (renters, apartment dwellers), the Community Solar Banks
                Program supports shared solar installations in apartment buildings and multi-unit dwellings, helping
                up to 25,000 households access solar benefits.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                State-by-State Incentives
              </h2>

              {/* State Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* NSW */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#E8621A] rounded-full flex items-center justify-center text-white font-bold">
                      NSW
                    </div>
                    <h4 className="text-lg font-bold text-[#333333]">New South Wales</h4>
                  </div>
                  <ul className="space-y-3 text-[#444444]">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-[#333333]">Empowering Homes:</strong> Interest-free loans up to $14,000 for solar-battery (income under $180,000)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-[#333333]">VPP Incentive:</strong> Up to $1,500 for connecting to a Virtual Power Plant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ExclamationTriangleIcon className="w-5 h-5 text-[#e09000] flex-shrink-0 mt-0.5" />
                      <span>Peak Demand Reduction Scheme ended June 2025</span>
                    </li>
                  </ul>
                </div>

                {/* Victoria */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#c74f12] rounded-full flex items-center justify-center text-white font-bold">
                      VIC
                    </div>
                    <h4 className="text-lg font-bold text-[#333333]">Victoria</h4>
                  </div>
                  <ul className="space-y-3 text-[#444444]">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-[#333333]">Solar Panel Rebate:</strong> Up to $1,400 for solar panels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-[#333333]">Solar for Rentals:</strong> $1,400 rebate for landlords</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-[#333333]">Apartments:</strong> Up to $2,800 per apartment for shared solar</span>
                    </li>
                  </ul>
                </div>

                {/* South Australia */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      SA
                    </div>
                    <h4 className="text-lg font-bold text-[#333333]">South Australia</h4>
                  </div>
                  <ul className="space-y-3 text-[#444444]">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-[#333333]">Concession Swap:</strong> Trade 10 years of concessions for a 4.4kW solar system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-[#333333]">VPP Battery Rebate:</strong> Up to $2,050 for REPS-approved VPP connection</span>
                    </li>
                  </ul>
                </div>

                {/* ACT */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#F9A825] rounded-full flex items-center justify-center text-[#0f1923] font-bold">
                      ACT
                    </div>
                    <h4 className="text-lg font-bold text-[#333333]">ACT (Canberra)</h4>
                  </div>
                  <ul className="space-y-3 text-[#444444]">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-[#333333]">Pensioner Rebate:</strong> Up to 50% off solar (max $2,500)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-[#333333]">Sustainable Household Scheme:</strong> Zero-interest loans $2,000 - $15,000 for solar, battery, EV chargers</span>
                    </li>
                  </ul>
                </div>

                {/* WA */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center text-[#F9A825] font-bold border border-[#F9A825]">
                      WA
                    </div>
                    <h4 className="text-lg font-bold text-[#333333]">Western Australia</h4>
                  </div>
                  <ul className="space-y-3 text-[#444444]">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-[#333333]">DEBS Feed-in Tariff:</strong> Up to 10c/kWh (peak) for exported energy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                      <span>Plus federal battery rebate available</span>
                    </li>
                  </ul>
                </div>

                {/* NT */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      NT
                    </div>
                    <h4 className="text-lg font-bold text-[#333333]">Northern Territory</h4>
                  </div>
                  <ul className="space-y-3 text-[#444444]">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-[#333333]">Highest STC Value:</strong> ~$2,200 off a 6.6kW system in Darwin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                      <span>Federal battery rebate (~30% off) available</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                How to Stack Multiple Incentives
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The federal battery rebate was designed to be &quot;stackable&quot; with state programs. Here&apos;s how to maximize your savings:
              </p>

              <div className="bg-[#F9A825] p-8 mb-10 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-[#0f1923]">Example: Maximum Savings in Victoria</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-[#0f1923]/20 pb-3">
                    <span className="text-[#0f1923]">Federal Solar STC Rebate (6.6kW)</span>
                    <span className="font-bold text-[#0f1923]">~$2,400</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#0f1923]/20 pb-3">
                    <span className="text-[#0f1923]">Victorian Solar Panel Rebate</span>
                    <span className="font-bold text-[#0f1923]">$1,400</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#0f1923]/20 pb-3">
                    <span className="text-[#0f1923]">Federal Battery Rebate (13.5kWh)</span>
                    <span className="font-bold text-[#0f1923]">~$4,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 text-xl">
                    <span className="font-bold text-[#0f1923]">Total Potential Savings</span>
                    <span className="font-bold text-[#0f1923]">~$7,800+</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Tips to Maximize Your Benefits
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="w-12 h-12 bg-[#E8621A]/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl text-[#E8621A] font-bold">1</span>
                  </div>
                  <h4 className="font-bold text-[#333333] mb-2">Act in 2025</h4>
                  <p className="text-[#444444]">Both the solar STC rebate and battery rebate reduce each year. Acting now maximizes your savings before reductions kick in.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="w-12 h-12 bg-[#E8621A]/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl text-[#E8621A] font-bold">2</span>
                  </div>
                  <h4 className="font-bold text-[#333333] mb-2">Combine Solar + Battery</h4>
                  <p className="text-[#444444]">Installing both solar and battery together qualifies you for both rebate programs and is often more cost-effective than separate installations.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="w-12 h-12 bg-[#E8621A]/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl text-[#E8621A] font-bold">3</span>
                  </div>
                  <h4 className="font-bold text-[#333333] mb-2">Check State Programs</h4>
                  <p className="text-[#444444]">Research your state&apos;s specific incentives. Many can be stacked with federal programs for additional savings.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="w-12 h-12 bg-[#E8621A]/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl text-[#E8621A] font-bold">4</span>
                  </div>
                  <h4 className="font-bold text-[#333333] mb-2">Maximize Self-Consumption</h4>
                  <p className="text-[#444444]">Greater savings come from using your own solar power rather than exporting it. A battery helps you use more of what you generate.</p>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Why Act Now?
              </h2>

              <div className="bg-white p-6 mb-10 border-2 border-[#E8621A] rounded-xl">
                <h4 className="font-bold text-[#E8621A] mb-4 flex items-center gap-2">
                  <ClockIcon className="w-6 h-6" />
                  Time-Sensitive Incentives
                </h4>
                <ul className="space-y-3 text-[#444444]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E8621A] font-bold">&#8226;</span>
                    <span>The SRES solar rebate <strong className="text-[#333333]">decreases annually</strong> and ends completely in 2030</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E8621A] font-bold">&#8226;</span>
                    <span>Battery rebate will decline faster from May 2026 (every 6 months instead of annually)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E8621A] font-bold">&#8226;</span>
                    <span>State programs frequently change or end (e.g., NSW PDRS ended June 2025)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E8621A] font-bold">&#8226;</span>
                    <span>Electricity prices continue to rise, making solar+battery more valuable over time</span>
                  </li>
                </ul>
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
