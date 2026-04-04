'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// SVG Icon Components
const ArrowLeftIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
)

const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

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

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const ExternalLinkIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
)

const ChartBarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
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

export default function RecordHomeBatterySurgeArticle() {
  return (
    <div className="bg-white">
      <article>
        {/* Header */}
        <header className="relative py-16 sm:py-24 bg-[#E8621A] overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Link href="/articles" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowLeftIcon className="w-4 h-4" />
                  Back to Articles
                </Link>
                <span className="text-white/50">|</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm text-white border border-white/30">Industry News</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Record Home Battery Surge Charges Up{' '}
                <span className="text-[#F9A825]">Australia&apos;s Biggest Power Station</span> on Aussie Rooftops
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Australian households installed more home batteries in the second half of 2025 than during the entire five-year period from 2020 to 2024 combined. Here&apos;s what this means for you &mdash; and how Super Solar Energy can help.
              </p>
              <div className="flex items-center justify-center gap-4 text-white/80">
                <span>March 2026</span>
                <span className="text-[#F9A825]">|</span>
                <span>8 min read</span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-12 z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <Image
                  src="/batteryImage1.jpg"
                  alt="Home battery storage systems driving Australia's energy revolution"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Key Takeaway Box */}
            <div className="bg-[#F9A825] p-6 mb-10 border-l-4 border-[#0f1923] rounded-r-xl">
              <h2 className="text-xl font-bold text-[#0f1923] mb-3 flex items-center gap-2">
                <BoltIcon className="w-6 h-6" />
                Key Takeaway
              </h2>
              <p className="text-[#0f1923] text-lg">
                <strong>183,245 home batteries</strong> were installed in the second half of 2025 alone &mdash; a four-fold increase on the same period in 2024.
                With over <strong>454,753 batteries</strong> now installed across Australia, home energy storage has moved from niche to mainstream.
                If you&apos;ve been waiting for the right time to add a battery, that time is now.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The Numbers Are Staggering
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                According to the Clean Energy Council&apos;s latest <em>Rooftop Solar and Storage Report</em> (July&ndash;December 2025),
                Australian households installed <strong className="text-[#333333]">183,245 battery units</strong> in just six months.
                That&apos;s not a typo &mdash; it&apos;s a <strong className="text-[#333333]">four-fold increase</strong> compared to the same period in 2024,
                and it represents more batteries than the <strong className="text-[#333333]">entire five-year stretch from 2020 to 2024 combined</strong>.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                Australia now has <strong className="text-[#333333]">454,753 home batteries</strong> installed nationwide.
                The message from households is clear: storing your own solar energy is no longer a luxury &mdash; it&apos;s the smart move.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                <div className="bg-[#E8621A] p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-[#F9A825] mb-1">183,245</div>
                  <div className="text-white text-sm">Batteries installed in H2 2025</div>
                </div>
                <div className="bg-[#E8621A] p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-[#F9A825] mb-1">4x</div>
                  <div className="text-white text-sm">Increase on H2 2024</div>
                </div>
                <div className="bg-[#E8621A] p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-[#F9A825] mb-1">454,753</div>
                  <div className="text-white text-sm">Total home batteries nationwide</div>
                </div>
                <div className="bg-[#E8621A] p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-[#F9A825] mb-1">$106</div>
                  <div className="text-white text-sm">Quarterly VPP savings</div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Rooftop Solar: Australia&apos;s Biggest Power Station
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The battery boom is happening on top of an already dominant rooftop solar market.
                Over <strong className="text-[#333333]">4.3 million Australian households</strong> now have rooftop solar panels,
                and in 2025 alone, <strong className="text-[#333333]">254,664 new solar systems</strong> were installed,
                adding <strong className="text-[#333333]">2.6 GW of new capacity</strong>.
              </p>

              <p className="text-[#444444] text-lg mb-6">
                Australia&apos;s total rooftop solar capacity now stands at a remarkable <strong className="text-[#333333]">28.3 GW</strong> &mdash;
                exceeding the entire coal fleet&apos;s <strong className="text-[#333333]">22.5 GW</strong>.
                Rooftop solar now supplies <strong className="text-[#333333]">14.2% of grid electricity</strong>,
                nearly double the 7.2% it contributed in 2020.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                The nation&apos;s largest power station isn&apos;t a coal mine or a gas turbine &mdash; it&apos;s on Aussie rooftops.
                And with batteries, households are turning that power station into a 24-hour operation.
              </p>

              {/* Solar vs Coal Comparison */}
              <div className="bg-[#efefef] p-8 mb-10 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-center text-[#333333]">Rooftop Solar vs Coal Fleet</h3>
                <div className="flex items-center justify-between max-w-2xl mx-auto">
                  <div className="text-center">
                    <SunIcon className="w-10 h-10 text-[#F9A825] mx-auto mb-2" />
                    <div className="text-4xl font-bold text-[#E8621A]">28.3 GW</div>
                    <div className="text-[#666666]">Rooftop Solar</div>
                  </div>
                  <div className="text-center px-4">
                    <div className="text-2xl font-bold text-[#E8621A]">vs</div>
                  </div>
                  <div className="text-center">
                    <ChartBarIcon className="w-10 h-10 text-[#666666] mx-auto mb-2" />
                    <div className="text-4xl font-bold text-[#666666]">22.5 GW</div>
                    <div className="text-[#666666]">Coal Fleet</div>
                  </div>
                </div>
                <p className="text-center text-[#E8621A] font-semibold mt-4">
                  Australian rooftops now generate more capacity than all coal plants combined
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                State-by-State: Where the Growth Is Happening
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The battery revolution is spreading across every state:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-[#333333] text-lg mb-2">New South Wales</h4>
                  <p className="text-[#444444]">Leading the charge with <strong>8 GW</strong> of installed rooftop solar capacity &mdash; the highest of any state.</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-[#333333] text-lg mb-2">Queensland</h4>
                  <p className="text-[#444444]">Home to <strong>1.16 million systems</strong> &mdash; the most rooftop solar installations of any state nationwide.</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-[#333333] text-lg mb-2">Victoria</h4>
                  <p className="text-[#444444]">Surging battery uptake driven by rising electricity prices and declining feed-in tariffs.</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-[#333333] text-lg mb-2">South Australia</h4>
                  <p className="text-[#444444]">Highest electricity costs in the nation, making battery + VPP the most financially compelling option.</p>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Virtual Power Plants: Earn While You Store
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                One of the most exciting findings from the report is the financial benefit of Virtual Power Plants (VPPs).
                According to ACCC analysis, households with solar and batteries that participate in a VPP achieve the{' '}
                <strong className="text-[#333333]">lowest power bills of any household type</strong>,
                saving approximately <strong className="text-[#333333]">$106 per quarter</strong> compared to non-participants.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                That&apos;s over <strong className="text-[#333333]">$420 per year</strong> in additional savings,
                on top of what you already save by using your own stored solar energy instead of buying from the grid.
                VPPs allow your battery to export stored energy back to the grid during peak demand periods &mdash;
                and you get paid for it.
              </p>

              {/* VPP Savings Box */}
              <div className="bg-gradient-to-r from-[#0f1923] to-[#1a2e3d] p-8 mb-10 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-4 text-[#F9A825]">VPP Savings Breakdown</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F9A825]">$106</div>
                    <div className="text-white/80 text-sm mt-1">Savings per quarter</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F9A825]">$420+</div>
                    <div className="text-white/80 text-sm mt-1">Annual VPP savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F9A825]">Lowest</div>
                    <div className="text-white/80 text-sm mt-1">Power bills of any household</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Why the Surge Is Happening Now
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Several factors are driving this unprecedented battery uptake:
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { title: 'Federal Rebates', desc: 'The $7.2 billion Cheaper Home Batteries Program is making batteries thousands of dollars more affordable \u2014 but the STC factor is dropping from May 2026.' },
                  { title: 'Collapsing Feed-in Tariffs', desc: 'With feed-in rates as low as 2\u20135c/kWh in many states, exporting solar to the grid earns almost nothing. Storing it in a battery is far more valuable.' },
                  { title: 'Rising Electricity Prices', desc: 'Household electricity costs have surged over 50% since 2021 across most states. A battery shields you from peak-rate price shocks.' },
                  { title: 'Battery Prices Falling', desc: 'Battery technology costs have dropped significantly, making the payback period shorter than ever \u2014 often under 5 years with rebates.' },
                  { title: 'Energy Independence', desc: 'With coal closures and grid instability, more households want the security of backup power during outages.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-[#efefef] p-5 rounded-xl">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#E8621A] rounded-full flex items-center justify-center">
                      <CheckIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#333333] mb-1">{item.title}</h4>
                      <p className="text-[#444444]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                How Super Solar Energy Can Help
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                At <strong className="text-[#E8621A]">Super Solar Energy</strong>, we&apos;ve been helping Australian households
                join this battery revolution from day one. Whether you&apos;re adding a battery to an existing solar system
                or starting fresh with a complete solar + battery package, here&apos;s how we make the process simple:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white border-2 border-[#E8621A]/20 p-6 rounded-xl hover:border-[#E8621A]/40 transition-colors">
                  <div className="w-12 h-12 bg-[#E8621A]/10 rounded-xl flex items-center justify-center mb-4">
                    <BoltIcon className="w-6 h-6 text-[#E8621A]" />
                  </div>
                  <h4 className="font-bold text-[#333333] text-lg mb-2">CEC-Approved Products</h4>
                  <p className="text-[#444444]">
                    We only install batteries from the CEC approved product list &mdash; including FoxESS, GoodWe, Tesla Powerwall, and BYD &mdash;
                    ensuring you qualify for every available rebate.
                  </p>
                </div>
                <div className="bg-white border-2 border-[#E8621A]/20 p-6 rounded-xl hover:border-[#E8621A]/40 transition-colors">
                  <div className="w-12 h-12 bg-[#E8621A]/10 rounded-xl flex items-center justify-center mb-4">
                    <HomeIcon className="w-6 h-6 text-[#E8621A]" />
                  </div>
                  <h4 className="font-bold text-[#333333] text-lg mb-2">Rebate Maximisation</h4>
                  <p className="text-[#444444]">
                    Our team handles the entire rebate process for you &mdash; federal STCs, state-specific incentives,
                    and the Cheaper Home Batteries Program &mdash; so you get every dollar you&apos;re entitled to.
                  </p>
                </div>
                <div className="bg-white border-2 border-[#E8621A]/20 p-6 rounded-xl hover:border-[#E8621A]/40 transition-colors">
                  <div className="w-12 h-12 bg-[#E8621A]/10 rounded-xl flex items-center justify-center mb-4">
                    <ChartBarIcon className="w-6 h-6 text-[#E8621A]" />
                  </div>
                  <h4 className="font-bold text-[#333333] text-lg mb-2">VPP-Ready Systems</h4>
                  <p className="text-[#444444]">
                    Every battery we install is VPP-compatible, so you can start earning money from your stored energy
                    immediately. We&apos;ll help you set up and join a VPP program.
                  </p>
                </div>
                <div className="bg-white border-2 border-[#E8621A]/20 p-6 rounded-xl hover:border-[#E8621A]/40 transition-colors">
                  <div className="w-12 h-12 bg-[#E8621A]/10 rounded-xl flex items-center justify-center mb-4">
                    <SunIcon className="w-6 h-6 text-[#E8621A]" />
                  </div>
                  <h4 className="font-bold text-[#333333] text-lg mb-2">Nationwide Coverage</h4>
                  <p className="text-[#444444]">
                    From Melbourne to Brisbane, Sydney to Perth &mdash; Super Solar Energy installs across Australia.
                    No matter where you are, we&apos;ll design a system tailored to your home and energy usage.
                  </p>
                </div>
              </div>

              {/* Urgency Box */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-10 rounded-r-xl">
                <h3 className="text-xl font-bold text-red-800 mb-2">The Clock Is Ticking on Rebates</h3>
                <p className="text-red-700 text-lg">
                  The federal STC factor drops from <strong>8.4 to 6.8 in May 2026</strong> and continues falling every six months.
                  On a 13.5kWh battery, that&apos;s up to <strong>$2,800 in lost rebates by 2028</strong>.
                  The 183,245 households that installed batteries in H2 2025 locked in the best rebate rates &mdash;
                  but there&apos;s still time to act before the next drop.
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Don&apos;t Get Left Behind
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The data is unambiguous: Australians are choosing batteries in record numbers.
                The combination of generous government rebates, plummeting feed-in tariffs, rising electricity costs,
                and affordable battery technology means there has never been a better time to install a home battery system.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                With <strong className="text-[#333333]">Super Solar Energy</strong>, you get CEC-accredited installers,
                premium battery brands, full rebate assistance, and a system designed for your household.
                Join the 454,753 Australian homes already powered by batteries.
              </p>

              {/* Source Attribution */}
              <div className="bg-[#efefef] p-4 mb-10 rounded-xl text-sm text-[#666666]">
                <p>
                  <strong>Source:</strong> Clean Energy Council &mdash; <em>Rooftop Solar and Storage Report (July&ndash;December 2025)</em>.{' '}
                  <a
                    href="https://cleanenergycouncil.org.au/news-resources/record-home-battery-surge-charges-up-australia-s-biggest-power-station-on-aussie-rooftops"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E8621A] hover:underline inline-flex items-center gap-1"
                  >
                    Read the original article <ExternalLinkIcon className="w-3 h-3" />
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-[#E8621A] relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
                <BoltIcon className="w-5 h-5 text-[#F9A825]" />
                <span className="text-white font-semibold text-sm">Join the Battery Revolution</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Ready to Install Your{' '}
                <span className="text-[#F9A825]">Home Battery?</span>
              </h2>

              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                183,245 Australians added a battery in the last six months. Get a free quote from Super Solar Energy
                and find out how much you can save before rebates drop again.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="bg-[#F9A825] text-[#0f1923] px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#e09000] transition-all"
                >
                  Get Free Quote
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <a
                  href="tel:1300090984"
                  className="bg-white text-[#E8621A] px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call 1300 09 09 84
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </article>
    </div>
  )
}
