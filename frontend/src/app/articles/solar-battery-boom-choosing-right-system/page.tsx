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

const CurrencyDollarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const PlayIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
)

export default function SolarBatteryBoomArticle() {
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
              <span className="text-gray-700">The Battery Boom Is Real: Choosing the Right System and T...</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <div className="bg-white py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm text-gray-500 mb-3">March 2026 &middot; 6 min read</p>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2332]">
                The Battery Boom Is Real: Choosing the Right System and Trusted Installer
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
                The Bottom Line
              </h2>
              <p className="text-[#0f1923] text-lg">
                The battery boom is real, but the key is choosing the <strong>right system</strong> and a{' '}
                <strong>trusted installer</strong> &mdash; and that&apos;s where Super Solar Energy supports
                homeowners every step of the way.
              </p>
            </div>

            {/* Video Embed */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <PlayIcon className="w-5 h-5 text-[#E8621A]" />
                <h3 className="text-lg font-bold text-[#333333]">Watch: The Solar Battery Boom Explained</h3>
              </div>
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/zDvCT8wPQY0"
                  title="The Solar Battery Boom - Why Australian Homeowners Are Investing"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Huge Demand for Home Batteries
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Something remarkable is happening across Australian suburbs. With electricity prices climbing higher
                every quarter and energy uncertainty becoming the new normal, more homeowners than ever are investing
                in solar batteries to store their own energy and break free from grid dependency.
              </p>

              <p className="text-[#444444] text-lg mb-6">
                The numbers don&apos;t lie: battery installations have surged by <strong className="text-[#333333]">400%</strong> in
                the past year alone. But with that explosive growth comes an important question &mdash;{' '}
                <strong className="text-[#333333]">how do you make sure you&apos;re getting the right system,
                safely installed, at the best price?</strong>
              </p>

              <p className="text-[#444444] text-lg mb-8">
                Not all batteries are equal, and not all installers deliver the same quality. Rushing into a decision
                without proper guidance can mean an undersized system that doesn&apos;t cover your needs, an oversized
                one that wastes money, or worst of all, an unsafe installation that puts your home at risk.
              </p>

              {/* Why the boom section */}
              <div className="bg-[#efefef] p-8 mb-10 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-center text-[#333333]">Why the Battery Boom Is Happening</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-[#E8621A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CurrencyDollarIcon className="w-7 h-7 text-[#E8621A]" />
                    </div>
                    <h4 className="font-bold text-[#333333] mb-1">Rising Electricity Costs</h4>
                    <p className="text-[#666666] text-sm">Prices up over 50% since 2021 across most states</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-[#E8621A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <SunIcon className="w-7 h-7 text-[#E8621A]" />
                    </div>
                    <h4 className="font-bold text-[#333333] mb-1">Collapsing Feed-in Tariffs</h4>
                    <p className="text-[#666666] text-sm">Exporting solar earns as little as 2-5c/kWh</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-[#E8621A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ShieldCheckIcon className="w-7 h-7 text-[#E8621A]" />
                    </div>
                    <h4 className="font-bold text-[#333333] mb-1">Energy Uncertainty</h4>
                    <p className="text-[#666666] text-sm">Grid instability and coal closures drive demand</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                How Super Solar Energy Can Help
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                At <strong className="text-[#E8621A]">Super Solar Energy</strong>, we don&apos;t believe in
                one-size-fits-all solutions or high-pressure sales tactics. Instead of rushing installations,
                we focus on <strong className="text-[#333333]">smart, safe, and efficient energy solutions</strong>{' '}
                that help customers maximise savings and long-term benefits.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                Here&apos;s what sets us apart:
              </p>

              {/* How Cosmic Helps */}
              <div className="space-y-4 mb-10">
                {[
                  {
                    title: 'Professional Consultation',
                    desc: 'We assess your household energy usage, roof orientation, and lifestyle to recommend the right system size \u2014 not the biggest or cheapest, but the one that actually fits your needs.',
                    icon: 'consultation'
                  },
                  {
                    title: 'High-Quality Solar Panels and Battery Storage',
                    desc: 'We partner with trusted brands like FoxESS, GoodWe, Tesla Powerwall, and BYD \u2014 all CEC-approved products backed by solid warranties and proven performance.',
                    icon: 'quality'
                  },
                  {
                    title: 'Certified and Safe Installations',
                    desc: 'Every installation is carried out by CEC-accredited professionals who meet Australian electrical safety standards. No shortcuts, no compromises on safety.',
                    icon: 'safety'
                  },
                  {
                    title: 'Guidance on Rebates and Incentives',
                    desc: 'We handle the paperwork for federal STCs, the Cheaper Home Batteries Program, and state-specific incentives so you get every dollar you\u2019re entitled to.',
                    icon: 'rebates'
                  },
                  {
                    title: 'Reliable Backup Power Solutions',
                    desc: 'Our battery systems provide genuine energy independence \u2014 keeping your lights on, fridge running, and family comfortable during grid outages.',
                    icon: 'backup'
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

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Smart Decisions Over Rushed Installations
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                With the battery market booming, there&apos;s no shortage of installers promising the world.
                But a battery is a long-term investment &mdash; typically 10 to 15 years &mdash; and getting it
                wrong can be expensive and even dangerous.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                That&apos;s why Cosmic takes a different approach. We invest time upfront in understanding your
                energy needs, explaining your options honestly, and designing a system that delivers real value
                for years to come. No upselling, no cutting corners.
              </p>

              {/* Comparison: Rushed vs Smart */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                  <h4 className="font-bold text-red-800 text-lg mb-4">Rushed Installation</h4>
                  <ul className="space-y-3">
                    {[
                      'One-size-fits-all system sizing',
                      'Cheapest products with short warranties',
                      'Uncertified or inexperienced installers',
                      'No help with rebate applications',
                      'No ongoing support after install',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-red-700">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                  <h4 className="font-bold text-green-800 text-lg mb-4">The Cosmic Approach</h4>
                  <ul className="space-y-3">
                    {[
                      'Custom system sized to your usage',
                      'CEC-approved brands with full warranties',
                      'CEC-accredited professional installers',
                      'Full rebate and incentive assistance',
                      'Ongoing monitoring and support',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-green-700">
                        <CheckIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Moral / Conclusion Box */}
              <div className="bg-gradient-to-r from-[#0f1923] to-[#0a4e5a] p-8 mb-10 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-4 text-[#F9A825]">The Takeaway</h3>
                <p className="text-white/90 text-lg mb-4">
                  The battery boom is real &mdash; and it&apos;s only accelerating. But the key to making the most of it
                  isn&apos;t just buying any battery. It&apos;s choosing the <strong className="text-white">right system</strong>,
                  installed by a <strong className="text-white">trusted, certified team</strong>, with proper guidance on
                  rebates and long-term value.
                </p>
                <p className="text-white/90 text-lg">
                  That&apos;s exactly what <strong className="text-[#F9A825]">Super Solar Energy</strong> delivers &mdash;
                  supporting homeowners every step of the way, from the first conversation to years after installation.
                </p>
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
