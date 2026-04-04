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

const ChartIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
)

const ClockIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CurrencyDollarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const HomeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
)

const ShieldCheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

export default function BatteryBoomRecordDemandArticle() {
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
                Australia&apos;s Battery Boom Hits{' '}
                <span className="text-[#F9A825]">Record Highs</span> — and the May 1 Deadline Is Weeks Away
              </h1>
              <p className="text-xl text-white/90 mb-6">
                A record 1.2 GWh of home batteries were registered in February 2026 alone. With the federal
                rebate dropping on 1 May, here&apos;s what every Australian homeowner needs to know right now.
              </p>
              <div className="flex items-center justify-center gap-4 text-white/80">
                <span>March 2026</span>
                <span className="text-[#F9A825]">|</span>
                <span>7 min read</span>
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
                  alt="Home battery installation - Australia battery boom 2026"
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
                <ClockIcon className="w-6 h-6" />
                Act Before 1 May 2026
              </h2>
              <p className="text-[#0f1923] text-lg">
                The federal STC factor drops from <strong>8.4 to 6.8</strong> on 1 May 2026, and rebates will
                then decline every six months. Homeowners who install before the deadline save thousands more
                than those who wait. <strong>Super Solar Energy can help you lock in the maximum rebate.</strong>
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                February 2026: A Record Month for Australian Batteries
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                New data from solar industry analyst SunWiz confirms that <strong className="text-[#333333]">February 2026 was the
                biggest month ever for home battery registrations in Australia</strong> — with a record 1.2 GWh of
                small-scale energy storage capacity registered in a single month. That&apos;s a 24% jump on
                January 2026 alone.
              </p>

              <p className="text-[#444444] text-lg mb-6">
                SunWiz Managing Director Warwick Johnston put it plainly: <em>&ldquo;The pressure to complete
                installations before rebate changes on 1 May pushed registrations to a record month.&rdquo;</em>
              </p>

              <p className="text-[#444444] text-lg mb-8">
                The full-year picture is just as remarkable. Australia is now on track to install <strong className="text-[#333333]">12 GWh
                of residential battery storage via 520,000 home batteries in 2026</strong> — a staggering figure
                that underscores how quickly solar batteries have moved from niche product to mainstream home upgrade.
              </p>

              {/* Stats Grid */}
              <div className="bg-[#efefef] p-8 mb-10 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-center text-[#333333]">Australia&apos;s Solar &amp; Battery Landscape in 2026</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center bg-white p-6 rounded-xl border border-gray-200">
                    <div className="w-14 h-14 bg-[#E8621A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <HomeIcon className="w-7 h-7 text-[#E8621A]" />
                    </div>
                    <div className="text-3xl font-bold text-[#E8621A] mb-1">28.3 GW</div>
                    <div className="text-[#666666] text-sm">Rooftop solar installed across ~4.3 million homes</div>
                  </div>
                  <div className="text-center bg-white p-6 rounded-xl border border-gray-200">
                    <div className="w-14 h-14 bg-[#E8621A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ChartIcon className="w-7 h-7 text-[#E8621A]" />
                    </div>
                    <div className="text-3xl font-bold text-[#E8621A] mb-1">155,000+</div>
                    <div className="text-[#666666] text-sm">Households already installed under the federal program</div>
                  </div>
                  <div className="text-center bg-white p-6 rounded-xl border border-gray-200">
                    <div className="w-14 h-14 bg-[#E8621A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BoltIcon className="w-7 h-7 text-[#E8621A]" />
                    </div>
                    <div className="text-3xl font-bold text-[#E8621A] mb-1">1 in 3</div>
                    <div className="text-[#666666] text-sm">Australian homes now has rooftop solar panels</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                What Changes on 1 May 2026?
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The Australian Government&apos;s <strong className="text-[#333333]">Cheaper Home Batteries Program</strong> — now
                expanded from $2.3 billion to a $7.2 billion commitment — has been the primary driver of this
                boom. It delivers upfront discounts of approximately 30% on battery installation costs through
                the federal Small-scale Technology Certificates (STC) scheme.
              </p>

              <p className="text-[#444444] text-lg mb-6">
                But the rules change on 1 May 2026 — and the changes are significant:
              </p>

              {/* What Changes List */}
              <div className="bg-[#F9A825]/15 border border-[#F9A825]/40 p-6 mb-8 rounded-xl">
                <h3 className="text-xl font-bold text-[#0f1923] mb-4">Changes Taking Effect 1 May 2026</h3>
                <ul className="space-y-3">
                  {[
                    'The STC Factor drops from 8.4 to 6.8 — reducing the rebate value immediately.',
                    'Rebates become tiered: 0–14 kWh capacity receives 100% of the STC factor; 14–28 kWh receives only 60%; 28–50 kWh receives just 15%.',
                    'Rebates will now decline every six months (previously annually), accelerating the reduction.',
                    'Hardware costs remain stable or falling — so the effective price increase is entirely driven by this rebate reduction.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#333333]">
                      <div className="w-6 h-6 bg-[#0f1923] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#F9A825] text-xs font-bold">{i + 1}</span>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                What This Means in Dollars
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The rebate reduction translates directly into higher out-of-pocket costs for homeowners
                installing after 1 May. Based on current market pricing:
              </p>

              {/* Pricing Table */}
              <div className="overflow-x-auto mb-10">
                <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#E8621A] text-white">
                      <th className="p-4 text-left font-semibold">System Size</th>
                      <th className="p-4 text-left font-semibold">Current Cost (before May 1)</th>
                      <th className="p-4 text-left font-semibold">After May 1 (higher cost)</th>
                      <th className="p-4 text-left font-semibold">Extra You Pay</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-50 border-b border-gray-200">
                      <td className="p-4 font-medium text-[#333333]">10 kWh battery</td>
                      <td className="p-4 text-green-700 font-bold">~$8,650</td>
                      <td className="p-4 text-red-700 font-bold">~$10,200</td>
                      <td className="p-4 text-red-700 font-semibold">~$1,550 more</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-4 font-medium text-[#333333]">13.5 kWh battery</td>
                      <td className="p-4 text-green-700 font-bold">~$10,500</td>
                      <td className="p-4 text-red-700 font-bold">~$13,300</td>
                      <td className="p-4 text-red-700 font-semibold">~$2,800 more</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="p-4 font-medium text-[#333333]">20 kWh battery</td>
                      <td className="p-4 text-green-700 font-bold">~$14,700</td>
                      <td className="p-4 text-red-700 font-bold">~$18,500+</td>
                      <td className="p-4 text-red-700 font-semibold">~$3,800+ more</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-[#666666] mt-2 italic">Indicative estimates based on market pricing and rebate calculations. Exact savings vary by location and system specification.</p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Australia&apos;s Solar Story: World-Leading and Still Growing
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The urgency of the May 1 deadline sits within a larger story of Australian solar dominance.
                According to PV Magazine Australia, the country&apos;s rooftop solar fleet reached{' '}
                <strong className="text-[#333333]">28.3 GW by the end of 2025</strong> — representing approximately
                4.3 million installations. Rooftop solar now contributes <strong className="text-[#333333]">14.2% of
                total electricity generation</strong>, up from 13.4% the year before.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                The trajectory is clear: solar is now mainstream Australian infrastructure. And as feed-in
                tariffs continue to fall — from 60c/kWh a few years ago to under 5c/kWh in many states today —
                batteries have shifted from &ldquo;nice to have&rdquo; to &ldquo;essential&rdquo; for maximising
                the value of existing solar systems.
              </p>

              {/* State-by-State Snapshot */}
              <div className="bg-[#efefef] p-8 mb-10 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-[#333333]">State-by-State Snapshot: March 2026</h3>
                <div className="space-y-4">
                  {[
                    {
                      state: 'New South Wales',
                      detail: 'Up to $1,500 bonus available for connecting batteries to a Virtual Power Plant (VPP). NSW solar farms broke the 1 TWh generation barrier in January 2026.',
                      color: 'bg-blue-50 border-blue-200'
                    },
                    {
                      state: 'Victoria',
                      detail: 'Up to $1,400 discount for new solar systems. The interest-free battery loan has ended — the federal program is now the primary Victorian incentive.',
                      color: 'bg-purple-50 border-purple-200'
                    },
                    {
                      state: 'Queensland',
                      detail: 'State Battery Booster closed; relies on federal program. The Queensland Supercharged Solar for Renters program has 250+ approvals and is expanding.',
                      color: 'bg-yellow-50 border-yellow-200'
                    },
                    {
                      state: 'South Australia',
                      detail: 'Highest electricity prices in Australia. Battery + VPP participation can save SA households up to $3,000 per year.',
                      color: 'bg-red-50 border-red-200'
                    },
                    {
                      state: 'Western Australia',
                      detail: 'Rock-bottom 2.25c/kWh feed-in tariff makes solar curtailment a real issue. Federal rebate of ~$4,500 dropping from May 2026.',
                      color: 'bg-orange-50 border-orange-200'
                    },
                  ].map((item, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${item.color}`}>
                      <div className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
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
                How Super Solar Energy Can Help You Beat the Deadline
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                With 40 days left before the May 1 rebate reduction, time is genuinely short. Installation
                lead times, assessment scheduling, and approval processing all take time — which is why
                homeowners who want to secure the maximum rebate need to act now.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                At <strong className="text-[#E8621A]">Super Solar Energy</strong>, we&apos;ve guided hundreds of
                Australian households through this process. Here&apos;s how we help:
              </p>

              {/* How Cosmic Helps */}
              <div className="space-y-4 mb-10">
                {[
                  {
                    title: 'Fast-Track Assessment and Consultation',
                    desc: 'We assess your household energy usage, roof setup, and budget to recommend the right battery size — so you\'re not paying for more than you need, or less than you deserve.',
                  },
                  {
                    title: 'CEC-Approved Products with Proven Track Records',
                    desc: 'We install industry-leading brands including Tesla Powerwall, FoxESS, GoodWe, and BYD — all Clean Energy Council approved and backed by solid manufacturer warranties.',
                  },
                  {
                    title: 'Full Rebate and Incentive Management',
                    desc: 'We handle all STC paperwork and rebate applications on your behalf, including the federal Cheaper Home Batteries Program and applicable state incentives.',
                  },
                  {
                    title: 'CEC-Accredited Professional Installation',
                    desc: 'Every installation is carried out by certified professionals who meet Australian electrical safety standards — no shortcuts, no subcontracting to unqualified crews.',
                  },
                  {
                    title: 'Transparent Pricing with No Hidden Costs',
                    desc: 'You\'ll know exactly what you\'re paying and exactly what rebates are being applied before you sign anything. No surprises on the day.',
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
                The Technology Is Getting Better, Too
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                While the rebate deadline is the immediate trigger to act, the underlying technology case for
                solar batteries has never been stronger. Next-generation solar panels — using TOPCon, HJT, and
                tandem-cell technology — are reaching <strong className="text-[#333333]">25–28% efficiency in 2026</strong>,
                significantly higher than the 20–22% typical just a few years ago.
              </p>

              <p className="text-[#444444] text-lg mb-6">
                New battery brands are entering the Australian market with competitive pricing. The residential
                battery storage market — valued at USD $646.5 million in 2025 — is projected to reach
                <strong className="text-[#333333]"> USD $3 billion by 2034</strong>. Australia&apos;s position as
                a solar leader means Australians are among the first to benefit from these advances.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                In the longer term, emerging technologies like solid-state batteries and sodium-ion chemistry
                promise further cost reductions. But the batteries available today — from Tesla, GoodWe, FoxESS,
                and BYD — are proven, warrantied, and eligible for the current government rebate.
                <strong className="text-[#333333]"> The smart move is to act now while the rebate is at its highest.</strong>
              </p>

              {/* Closing Box */}
              <div className="bg-gradient-to-r from-[#0f1923] to-[#0a4e5a] p-8 mb-10 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-4 text-[#F9A825]">The Bottom Line</h3>
                <p className="text-white/90 text-lg mb-4">
                  Australia&apos;s battery boom is real, well-documented, and accelerating. Record demand in
                  February 2026 reflects a simple truth: <strong className="text-white">homeowners who act before
                  1 May 2026 save thousands more</strong> than those who wait.
                </p>
                <p className="text-white/90 text-lg mb-4">
                  With 155,000 households already on board, the program&apos;s popularity is proven. The only
                  question is whether you capture the maximum rebate now — or pay more later for the same system.
                </p>
                <p className="text-white/90 text-lg">
                  <strong className="text-[#F9A825]">Super Solar Energy</strong> is ready to help you move
                  quickly and confidently — with expert guidance, quality products, and full rebate support from
                  start to finish.
                </p>
              </div>

              {/* Sources */}
              <div className="border border-gray-200 p-6 rounded-xl bg-gray-50">
                <h4 className="font-bold text-[#333333] mb-3 flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5 text-[#E8621A]" />
                  Sources &amp; Further Reading
                </h4>
                <ul className="text-sm text-[#666666] space-y-1">
                  <li>SunWiz / ESS News — Home battery registrations, February 2026 (March 2026)</li>
                  <li>Department of Climate Change, Energy, the Environment and Water (DCCEEW) — Cheaper Home Batteries Program</li>
                  <li>PV Magazine Australia — Rooftop solar hits 28.3 GW, February 2026</li>
                  <li>Energy Matters — Cheaper Home Batteries Program changes from 1 May 2026</li>
                  <li>Solar Choice — Changes to federal battery rebate from 1 May 2026</li>
                  <li>MPV Solar — Solar battery prices and rebate cuts, March 2026</li>
                </ul>
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
                <ClockIcon className="w-5 h-5 text-[#F9A825]" />
                <span className="text-white font-semibold text-sm">Rebate Drops 1 May 2026</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Lock In the Maximum Rebate{' '}
                <span className="text-[#F9A825]">Before It&apos;s Gone</span>
              </h2>

              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                The federal battery rebate drops significantly on 1 May 2026. Get a free consultation from
                Cosmic today — find out how much you save and how quickly we can have your system installed.
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
