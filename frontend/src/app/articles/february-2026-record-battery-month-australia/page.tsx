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

const ChartIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
)

const MapPinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
)

const ShieldCheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

export default function FebruaryRecordBatteryArticle() {
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
              <span className="text-gray-700">February 2026 Smashes Battery Records: 1.2 GWh Installed ...</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <div className="bg-white py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm text-gray-500 mb-3">March 2026 &middot; 6 min read</p>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2332]">
                February 2026 Smashes Battery Records: 1.2 GWh Installed in a Single Month
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
                Record-Breaking Month
              </h2>
              <p className="text-[#0f1923] text-lg">
                February 2026 saw <strong>1.2 GWh</strong> of small-scale battery storage registered —
                the highest single month on record. The surge is being driven by homeowners racing to
                complete installations before the <strong>1 May 2026 rebate reduction</strong>. Rooftop
                solar also rebounded to its largest February total ever.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                A Record Month Driven by Urgency
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Data from solar industry analyst SunWiz confirms that <strong className="text-[#333333]">February
                2026 was the biggest month ever for home battery registrations in Australia</strong>. A total
                of 1.2 GWh of small-scale energy storage capacity was registered — a <strong className="text-[#333333]">24%
                increase from January 2026</strong>.
              </p>

              <p className="text-[#444444] text-lg mb-6">
                SunWiz Managing Director Warwick Johnston explained the surge: <em>&ldquo;The pressure
                to complete installations before rebate changes on 1 May pushed registrations to a record
                month.&rdquo;</em>
              </p>

              <p className="text-[#444444] text-lg mb-8">
                Johnston also noted that <em>&ldquo;this continues the volatile start to 2026 after a
                strong finish to 2025, with demand remaining robust despite signs of market maturity.&rdquo;</em>
              </p>

              {/* Stats Grid */}
              <div className="bg-[#efefef] p-8 mb-10 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-center text-[#333333]">February 2026 at a Glance</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center bg-white p-6 rounded-xl border border-gray-200">
                    <div className="w-14 h-14 bg-[#E8621A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BoltIcon className="w-7 h-7 text-[#E8621A]" />
                    </div>
                    <div className="text-3xl font-bold text-[#E8621A] mb-1">1.2 GWh</div>
                    <div className="text-[#666666] text-sm">Battery storage registered — an all-time record</div>
                  </div>
                  <div className="text-center bg-white p-6 rounded-xl border border-gray-200">
                    <div className="w-14 h-14 bg-[#E8621A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ChartIcon className="w-7 h-7 text-[#E8621A]" />
                    </div>
                    <div className="text-3xl font-bold text-[#E8621A] mb-1">+24%</div>
                    <div className="text-[#666666] text-sm">Month-on-month increase from January 2026</div>
                  </div>
                  <div className="text-center bg-white p-6 rounded-xl border border-gray-200">
                    <div className="w-14 h-14 bg-[#E8621A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ChartIcon className="w-7 h-7 text-[#E8621A]" />
                    </div>
                    <div className="text-3xl font-bold text-[#E8621A] mb-1">281 MW</div>
                    <div className="text-[#666666] text-sm">Rooftop solar added — largest February total on record</div>
                  </div>
                  <div className="text-center bg-white p-6 rounded-xl border border-gray-200">
                    <div className="w-14 h-14 bg-[#E8621A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ChartIcon className="w-7 h-7 text-[#E8621A]" />
                    </div>
                    <div className="text-3xl font-bold text-[#E8621A] mb-1">+6%</div>
                    <div className="text-[#666666] text-sm">Year-to-date solar volumes ahead of 2025</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Rooftop Solar Rebounds Alongside Batteries
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                It wasn&apos;t just batteries setting records. February 2026 also saw <strong className="text-[#333333]">281
                MW of new rooftop solar capacity</strong> registered — up 57 MW from January and the
                largest February total on record. Year-to-date solar installations are running
                <strong className="text-[#333333]"> 6% ahead of 2025 volumes</strong>.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                The data shows Australians are increasingly opting for combined solar-plus-battery
                systems. The average battery system size was <strong className="text-[#333333]">10.34
                kW</strong>, with the 40-50 kWh segment dominating installations as households invest
                in larger storage capacity to maximise self-consumption and grid independence.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Every State Saw Growth — Some Exceptional
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The February record was a nationwide phenomenon. All states and territories recorded
                increased battery registrations, with some regions seeing dramatic growth.
              </p>

              {/* State Growth */}
              <div className="bg-[#efefef] p-8 mb-10 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-[#333333]">State Highlights: February 2026</h3>
                <div className="space-y-4">
                  {[
                    {
                      state: 'Tasmania',
                      detail: 'Led the nation with a 58% growth in battery registrations — the strongest increase of any state or territory.',
                      color: 'bg-green-50 border-green-200'
                    },
                    {
                      state: 'Northern Territory',
                      detail: 'Led rooftop solar growth with a 73% increase in PV installations — remote and regional communities driving demand.',
                      color: 'bg-orange-50 border-orange-200'
                    },
                    {
                      state: 'All States',
                      detail: 'Every state and territory recorded increased battery registrations in February 2026 — confirming the nationwide surge.',
                      color: 'bg-blue-50 border-blue-200'
                    },
                  ].map((item, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${item.color}`}>
                      <div className="flex items-start gap-3">
                        <MapPinIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-[#333333]">{item.state}: </span>
                          <span className="text-[#444444]">{item.detail}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Why the May 1 Deadline Is Driving the Rush
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The record demand is directly linked to the <strong className="text-[#333333]">Cheaper
                Home Batteries Program</strong> undergoing significant changes on 1 May 2026. The
                federal STC factor drops from 8.4 to 6.8, immediately reducing the rebate value for
                new installations. Rebates will then decline every six months instead of annually —
                accelerating the cost increase for homeowners who delay.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                For a typical 13.5 kWh battery system, the difference between installing before and
                after the May 1 deadline can be <strong className="text-[#333333]">$2,000 to $3,000
                in lost rebate value</strong>. This financial reality is pushing homeowners to
                finalise installations now rather than waiting.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Larger Systems Are Becoming the Norm
              </h2>

              <p className="text-[#444444] text-lg mb-8">
                An emerging trend in the February data is the growing popularity of larger battery
                systems. The 40-50 kWh segment dominated installations, reflecting a shift toward
                whole-home energy independence rather than partial backup. While the average system
                size dipped slightly to 10.3 kW (from 10.34 kW in January), the industry is
                moving toward battery-centric installations where the battery is the primary
                investment, with solar designed to support it.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                How Super Solar Energy Can Help You Act Now
              </h2>

              <p className="text-[#444444] text-lg mb-8">
                With installers across Australia experiencing unprecedented demand, lead times are
                extending. <strong className="text-[#E8621A]">Super Solar Energy</strong> is
                prioritising installations to help homeowners beat the May 1 deadline.
              </p>

              {/* How Super Solar Energy Helps */}
              <div className="space-y-4 mb-10">
                {[
                  {
                    title: 'Priority Booking for Pre-May Installations',
                    desc: 'We\'re fast-tracking assessments and installations to ensure homeowners who act now can secure the maximum rebate before the 1 May deadline.',
                  },
                  {
                    title: 'Right-Sized System Recommendations',
                    desc: 'Whether you need a 10 kWh battery or a 50 kWh whole-home system, we analyse your energy usage to recommend the right size — not the biggest or cheapest option.',
                  },
                  {
                    title: 'CEC-Approved Premium Brands',
                    desc: 'We install Tesla Powerwall, FoxESS, GoodWe, and BYD — all Clean Energy Council approved with proven Australian track records and strong warranties.',
                  },
                  {
                    title: 'Complete Rebate Management',
                    desc: 'We handle all STC paperwork, federal Cheaper Home Batteries applications, and state-specific incentives. You receive every rebate dollar you\'re entitled to.',
                  },
                  {
                    title: 'Professional CEC-Accredited Installation',
                    desc: 'Every installation is performed by certified professionals to Australian electrical safety standards — ensuring your system is safe, compliant, and optimally configured.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white border-2 border-[#E8621A]/15 p-6 rounded-xl hover:border-[#E8621A]/30 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#E8621A] rounded-xl flex items-center justify-center">
                      <CheckIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#333333] text-lg mb-1">{item.title}</h4>
                      <p className="text-[#444444]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Closing Box */}
              <div className="bg-gradient-to-r from-[#0f1923] to-[#1a2e3d] p-8 mb-10 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-4 text-[#F9A825]">The Bottom Line</h3>
                <p className="text-white/90 text-lg mb-4">
                  February 2026 was the biggest single month for home battery installations in Australian
                  history — and March is shaping up to be even larger as the May 1 rebate deadline
                  approaches. Every state is participating, larger systems are becoming the norm, and
                  solar is rebounding alongside batteries.
                </p>
                <p className="text-white/90 text-lg">
                  <strong className="text-[#F9A825]">Super Solar Energy</strong> is here to help
                  you navigate the rush — with priority installation scheduling, expert system design,
                  and full rebate support so you don&apos;t leave money on the table.
                </p>
              </div>

              {/* Sources */}
              <div className="border border-gray-200 p-6 rounded-xl bg-gray-50">
                <h4 className="font-bold text-[#333333] mb-3 flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5 text-[#E8621A]" />
                  Sources &amp; Further Reading
                </h4>
                <ul className="text-sm text-[#666666] space-y-1">
                  <li>ESS News — Home battery demand hits record in Australia as rooftop solar rebounds (March 2026)</li>
                  <li>SunWiz — Monthly Australian PV and battery market analysis, February 2026</li>
                  <li>Department of Climate Change, Energy, the Environment and Water (DCCEEW) — Cheaper Home Batteries Program</li>
                  <li>Clean Energy Council — Battery and solar installation statistics</li>
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
