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

const HomeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
)

const SunIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

const ShieldCheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

export default function RooftopSolarSurpassesCoalArticle() {
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
              <span className="text-gray-700">Australia\'s Rooftop Solar Hits 28.3 GW — Now Bigger Than ...</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <div className="bg-white py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm text-gray-500 mb-3">March 2026 &middot; 6 min read</p>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2332]">
                Australia\'s Rooftop Solar Hits 28.3 GW — Now Bigger Than the Entire Coal Fleet
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
                <SunIcon className="w-6 h-6" />
                A Historic Milestone
              </h2>
              <p className="text-[#0f1923] text-lg">
                Australia&apos;s combined rooftop solar capacity of <strong>28.3 GW</strong> now exceeds
                the nation&apos;s entire coal-fired power fleet of 22.5 GW. The country&apos;s biggest
                power station is now on 4.3 million Australian rooftops — and batteries are supercharging the shift.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Rooftop Solar: Australia&apos;s Biggest Power Station
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Australia reached a landmark energy milestone at the end of 2025: the nation&apos;s
                combined rooftop solar capacity hit <strong className="text-[#333333]">28.3 GW</strong>,
                representing approximately <strong className="text-[#333333]">4.3 million installations</strong> across
                the country. To put that in perspective, Australia&apos;s entire coal-fired power fleet
                stands at just 22.5 GW — meaning rooftop solar alone now surpasses coal by nearly 6 GW.
              </p>

              <p className="text-[#444444] text-lg mb-6">
                Clean Energy Council Chief Executive Jackie Trad summed it up: <em>&ldquo;Our biggest
                power station now resides on the rooftops of more than 4.3 million households.&rdquo;</em>
              </p>

              <p className="text-[#444444] text-lg mb-8">
                In the second half of 2025, rooftop solar contributed <strong className="text-[#333333]">14.2%
                of total electricity generation</strong>, up from 13.4% in the same period of 2024. This
                steady growth confirms that solar is no longer a niche technology — it is mainstream Australian
                energy infrastructure.
              </p>

              {/* Stats Grid */}
              <div className="bg-[#efefef] p-8 mb-10 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-center text-[#333333]">Australia&apos;s Rooftop Solar by the Numbers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center bg-white p-6 rounded-xl border border-gray-200">
                    <div className="w-14 h-14 bg-[#E8621A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <SunIcon className="w-7 h-7 text-[#E8621A]" />
                    </div>
                    <div className="text-3xl font-bold text-[#E8621A] mb-1">28.3 GW</div>
                    <div className="text-[#666666] text-sm">Total rooftop solar capacity — exceeding the 22.5 GW coal fleet</div>
                  </div>
                  <div className="text-center bg-white p-6 rounded-xl border border-gray-200">
                    <div className="w-14 h-14 bg-[#E8621A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <HomeIcon className="w-7 h-7 text-[#E8621A]" />
                    </div>
                    <div className="text-3xl font-bold text-[#E8621A] mb-1">4.3M</div>
                    <div className="text-[#666666] text-sm">Australian homes with rooftop solar panels installed</div>
                  </div>
                  <div className="text-center bg-white p-6 rounded-xl border border-gray-200">
                    <div className="w-14 h-14 bg-[#E8621A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ChartIcon className="w-7 h-7 text-[#E8621A]" />
                    </div>
                    <div className="text-3xl font-bold text-[#E8621A] mb-1">14.2%</div>
                    <div className="text-[#666666] text-sm">Share of total electricity generation from rooftop solar in H2 2025</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                2025 Installation Trends: Fewer Systems, More Power
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                While the total number of new installations dipped 15% year-over-year — from 300,375 in
                2024 to <strong className="text-[#333333]">254,664 in 2025</strong> — the story is more
                nuanced than it first appears. The capacity added in 2025 reached <strong className="text-[#333333]">2.6
                GW</strong>, with 1.5 GW installed in the second half alone. Australian households are
                increasingly choosing larger, higher-capacity systems that generate more power per installation.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                Over the past five years, Australia has averaged <strong className="text-[#333333]">2.7 GW
                of new rooftop solar capacity annually</strong>. At this trajectory, AEMO&apos;s 2030
                forecast of 36.1 GW capacity could be exceeded by 1 GW ahead of schedule — a remarkable
                achievement driven largely by household investment.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Batteries: The Next Chapter of Australia&apos;s Solar Story
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The real headline from 2025 was home batteries. In the second half of the year alone,
                <strong className="text-[#333333]"> 183,245 home batteries were installed</strong> — a
                fourfold increase over H2 2024. To put that in context, the H2 2025 battery installations
                were equivalent to <strong className="text-[#333333]">99% of all battery sales from 2020
                to 2024 combined</strong>.
              </p>

              <p className="text-[#444444] text-lg mb-6">
                By the end of 2025, <strong className="text-[#333333]">454,753 Australian households</strong> had
                home battery systems installed. Jackie Trad noted that the government&apos;s $7.3 billion
                Cheaper Home Batteries initiative, launched on 1 July 2025, had &ldquo;strapped a rocket&rdquo;
                to battery adoption.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                The driving forces are clear: falling feed-in tariffs (now under 5c/kWh in many states)
                have made it uneconomical to simply export solar power to the grid. Batteries allow
                households to store excess solar generation for use during expensive peak evening hours —
                turning a depreciating solar asset back into a money-saving one.
              </p>

              {/* Battery Growth Box */}
              <div className="bg-[#efefef] p-8 mb-10 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-[#333333]">Battery Uptake: Explosive Growth</h3>
                <div className="space-y-4">
                  {[
                    {
                      label: 'H2 2025 Battery Installations',
                      value: '183,245 units',
                      detail: 'Fourfold increase over H2 2024',
                      color: 'bg-green-50 border-green-200'
                    },
                    {
                      label: 'Total Batteries by End 2025',
                      value: '454,753 households',
                      detail: 'Australia-wide cumulative installations',
                      color: 'bg-blue-50 border-blue-200'
                    },
                    {
                      label: 'Government Investment',
                      value: '$7.3 billion',
                      detail: 'Cheaper Home Batteries initiative launched July 2025',
                      color: 'bg-yellow-50 border-yellow-200'
                    },
                    {
                      label: 'H2 2025 vs 2020-2024 Combined',
                      value: '99% equivalent',
                      detail: 'One half-year matched nearly five years of prior sales',
                      color: 'bg-purple-50 border-purple-200'
                    },
                  ].map((item, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${item.color}`}>
                      <div className="flex items-start gap-3">
                        <BoltIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-[#333333]">{item.label}: </span>
                          <span className="font-bold text-[#E8621A]">{item.value}</span>
                          <span className="text-[#444444]"> — {item.detail}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Why This Matters for Every Australian Homeowner
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The shift from coal to rooftop solar is not just an environmental story — it has direct
                financial implications for households. As more solar floods the grid during the day, daytime
                electricity prices fall. But evening peak prices remain high, creating a growing gap between
                what solar exports earn and what grid electricity costs during the hours families actually
                use the most power.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                A home battery bridges this gap. By storing cheap daytime solar and discharging it during
                expensive peak periods, a well-sized battery can save the average Australian household
                <strong className="text-[#333333]"> $1,500 to $2,500 per year</strong> on electricity
                bills — and provide backup power during grid outages.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                How Super Solar Energy Can Help
              </h2>

              <p className="text-[#444444] text-lg mb-8">
                Whether you&apos;re adding solar for the first time or looking to pair your existing
                system with a battery, <strong className="text-[#E8621A]">Super Solar Energy</strong> makes
                the entire process simple, transparent, and hassle-free.
              </p>

              {/* How Super Solar Energy Helps */}
              <div className="space-y-4 mb-10">
                {[
                  {
                    title: 'Expert System Design',
                    desc: 'We assess your energy usage, roof orientation, and household needs to recommend a solar and battery system that maximises your savings — not an oversized system you don\'t need.',
                  },
                  {
                    title: 'Premium CEC-Approved Products',
                    desc: 'We install market-leading brands including Tesla Powerwall, FoxESS, GoodWe, and BYD — all Clean Energy Council approved with manufacturer warranties of up to 15 years.',
                  },
                  {
                    title: 'Full Rebate and STC Management',
                    desc: 'We handle all federal STC paperwork, the Cheaper Home Batteries rebate application, and any applicable state incentives — so you receive every dollar you\'re entitled to.',
                  },
                  {
                    title: 'Fast-Track Installation Before Rebate Changes',
                    desc: 'With federal battery rebates dropping on 1 May 2026, our priority booking system helps you lock in the maximum rebate before the deadline.',
                  },
                  {
                    title: 'Ongoing Support and Monitoring',
                    desc: 'We don\'t disappear after installation. Our team provides ongoing system monitoring, maintenance guidance, and warranty support for years to come.',
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
              <div className="bg-gradient-to-r from-[#0f1923] to-[#0a4e5a] p-8 mb-10 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-4 text-[#F9A825]">The Bottom Line</h3>
                <p className="text-white/90 text-lg mb-4">
                  Australia&apos;s rooftop solar fleet has officially surpassed the country&apos;s entire
                  coal generation capacity — a turning point in the nation&apos;s energy transition.
                  With battery adoption accelerating at four times the previous rate and federal rebates
                  declining from May 2026, <strong className="text-white">the window to maximise your
                  savings is narrowing</strong>.
                </p>
                <p className="text-white/90 text-lg">
                  <strong className="text-[#F9A825]">Super Solar Energy</strong> is ready to help
                  you join the 4.3 million Australian households already powering their homes from
                  their rooftops — with expert guidance, quality products, and full rebate support.
                </p>
              </div>

              {/* Sources */}
              <div className="border border-gray-200 p-6 rounded-xl bg-gray-50">
                <h4 className="font-bold text-[#333333] mb-3 flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5 text-[#E8621A]" />
                  Sources &amp; Further Reading
                </h4>
                <ul className="text-sm text-[#666666] space-y-1">
                  <li>PV Magazine — Australia&apos;s rooftop solar hits 28.3 GW as home battery uptake surges (February 2026)</li>
                  <li>Clean Energy Council — Solar and battery installation statistics, H2 2025</li>
                  <li>AEMO — 2030 capacity forecast and generation projections</li>
                  <li>Department of Climate Change, Energy, the Environment and Water (DCCEEW) — Cheaper Home Batteries Program</li>
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
