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

const SunIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

const DocumentIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
)

const ShieldCheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

export default function CERProjectionsBatteriesArticle() {
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
                CER Projects Up to{' '}
                <span className="text-[#F9A825]">520,000 Home Batteries</span> and 12 GWh of Storage in 2026
              </h1>
              <p className="text-xl text-white/90 mb-6">
                The Clean Energy Regulator forecasts a massive year for Australian residential storage —
                with up to 12 GWh from half a million batteries. Large-scale solar approvals also hit record levels.
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
                  src="/batteryImage3.jpg"
                  alt="Home battery storage systems - CER 2026 projections"
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
                <DocumentIcon className="w-6 h-6" />
                Official CER Projections for 2026
              </h2>
              <p className="text-[#0f1923] text-lg">
                The Clean Energy Regulator projects <strong>350,000 to 520,000 home battery
                installations</strong> delivering <strong>8 to 12 GWh</strong> of storage capacity in
                2026. Rooftop solar is forecast at <strong>3-3.7 GW</strong> of new capacity. These
                figures confirm 2026 will be the biggest year ever for Australian residential energy storage.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The CER&apos;s Landmark 2026 Projections
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The Clean Energy Regulator (CER) has released its most ambitious projections for
                residential energy storage: <strong className="text-[#333333]">350,000 to 520,000
                home battery installations</strong> in 2026, delivering between <strong className="text-[#333333]">8
                and 12 GWh of new storage capacity</strong>. At the upper end, this would represent
                more than double the capacity installed in 2025.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                To put the 12 GWh figure in perspective: that single year of residential battery
                installations would exceed the combined storage capacity of the 12 largest in-service
                large-scale batteries in the National Electricity Market (NEM). Australia&apos;s
                household battery fleet is becoming a genuinely significant energy infrastructure asset.
              </p>

              {/* Stats Grid */}
              <div className="bg-[#efefef] p-8 mb-10 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-center text-[#333333]">2026 CER Projections at a Glance</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center bg-white p-6 rounded-xl border border-gray-200">
                    <div className="w-14 h-14 bg-[#E8621A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BoltIcon className="w-7 h-7 text-[#E8621A]" />
                    </div>
                    <div className="text-3xl font-bold text-[#E8621A] mb-1">520,000</div>
                    <div className="text-[#666666] text-sm">Home batteries projected (upper estimate) for 2026</div>
                  </div>
                  <div className="text-center bg-white p-6 rounded-xl border border-gray-200">
                    <div className="w-14 h-14 bg-[#E8621A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ChartIcon className="w-7 h-7 text-[#E8621A]" />
                    </div>
                    <div className="text-3xl font-bold text-[#E8621A] mb-1">12 GWh</div>
                    <div className="text-[#666666] text-sm">Storage capacity projected — exceeding all large-scale NEM batteries combined</div>
                  </div>
                  <div className="text-center bg-white p-6 rounded-xl border border-gray-200">
                    <div className="w-14 h-14 bg-[#E8621A]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <SunIcon className="w-7 h-7 text-[#E8621A]" />
                    </div>
                    <div className="text-3xl font-bold text-[#E8621A] mb-1">3.7 GW</div>
                    <div className="text-[#666666] text-sm">Rooftop solar capacity projected (upper estimate) for 2026</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                2025 Set the Stage: What the Cheaper Home Batteries Scheme Delivered
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The CER&apos;s optimism is grounded in the remarkable results from 2025. The federal
                Cheaper Home Batteries Scheme (CHBS), launched on 1 July 2025, delivered <strong className="text-[#333333]">193,000+
                valid battery installations</strong> in its first six months — representing <strong className="text-[#333333]">4.6
                GWh of storage capacity</strong>.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                On the solar side, 2025 saw <strong className="text-[#333333]">2.8 GW of new rooftop
                solar from approximately 270,000 systems</strong>. For 2026, the CER projects this will
                grow to <strong className="text-[#333333]">3 to 3.7 GW</strong>, driven in part by
                homeowners upgrading older systems alongside new battery installations.
              </p>

              {/* 2025 Performance Box */}
              <div className="bg-[#efefef] p-8 mb-10 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-[#333333]">2025 Performance: The Foundation for 2026</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      label: 'Batteries Installed (CHBS)',
                      value: '193,000+',
                      detail: 'Valid battery installations under the Cheaper Home Batteries Scheme',
                      icon: BoltIcon
                    },
                    {
                      label: 'Battery Storage Delivered',
                      value: '4.6 GWh',
                      detail: 'More than all 12 largest NEM large-scale batteries combined',
                      icon: ChartIcon
                    },
                    {
                      label: 'Rooftop Solar Installed',
                      value: '2.8 GW',
                      detail: 'From approximately 270,000 new systems across Australia',
                      icon: SunIcon
                    },
                    {
                      label: 'Large-Scale Solar Approvals',
                      value: '3 GW',
                      detail: 'Record year — smashing the previous 2.5 GW record from 2018',
                      icon: DocumentIcon
                    },
                  ].map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-[#E8621A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-[#E8621A]" />
                          </div>
                          <div>
                            <div className="text-sm text-[#666666] mb-1">{item.label}</div>
                            <div className="text-2xl font-bold text-[#E8621A] mb-1">{item.value}</div>
                            <div className="text-sm text-[#444444]">{item.detail}</div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Large-Scale Solar: Record Approvals Signal Long-Term Shift
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The CER data also revealed that <strong className="text-[#333333]">2025 was the largest
                year on record for large-scale solar approvals</strong>, with 4 GW of total renewable
                capacity approved — including 3 GW of solar and 1 GW of wind. This smashes the previous
                record of 2.5 GW set in 2018.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                Large-scale Generation Certificates (LGCs) also exceeded expectations, with <strong className="text-[#333333]">59.7
                million LGCs created in 2025</strong> against a forecast of 54-57 million. For 2026,
                the CER projects 64-66 million LGCs, with oversupply likely to persist through to the
                conclusion of the Renewable Energy Target in 2030.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                What This Means for Australian Homeowners
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                The CER projections confirm what the market data has been suggesting: <strong className="text-[#333333]">2026
                is the year of the home battery</strong>. The Cheaper Home Batteries Scheme is the primary
                driver, delivering substantial upfront discounts that make battery storage financially
                attractive for most solar households.
              </p>

              <p className="text-[#444444] text-lg mb-6">
                However, the program&apos;s generosity is not permanent. The STC factor drops from 8.4
                to 6.8 on <strong className="text-[#333333]">1 May 2026</strong>, and will then decline
                every six months. Homeowners who install earlier in 2026 will receive significantly
                more rebate value than those who wait.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                The rooftop solar projection of 3-3.7 GW also suggests growing demand for combined
                solar-plus-battery installations — particularly from homeowners upgrading older solar
                systems that were installed before batteries were widely available.
              </p>

              {/* Key Implications */}
              <div className="bg-[#F9A825]/15 border border-[#F9A825]/40 p-6 mb-8 rounded-xl">
                <h3 className="text-xl font-bold text-[#0f1923] mb-4">Key Implications for Homeowners</h3>
                <ul className="space-y-3">
                  {[
                    'The Cheaper Home Batteries Scheme is the primary driver — delivering roughly 30% upfront discounts on battery systems.',
                    'Early movers in 2026 benefit most. The STC factor drops on 1 May and continues declining every six months thereafter.',
                    'Rooftop solar upgrades are accelerating — older systems can be paired with new batteries for maximum savings.',
                    'Installer demand will surge as the year progresses. Booking early avoids delays and secures the highest rebate.',
                    'At 12 GWh, Australia\'s residential battery fleet becomes a significant grid asset — potentially enabling VPP earnings for participating households.',
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
                How Super Solar Energy Can Help You Be Part of the 520,000
              </h2>

              <p className="text-[#444444] text-lg mb-8">
                With up to half a million batteries projected for 2026, installer capacity will be
                tested like never before. <strong className="text-[#E8621A]">Super Solar Energy</strong> is
                scaling to meet demand — and helping homeowners move quickly to capture the maximum rebate.
              </p>

              {/* How Cosmic Helps */}
              <div className="space-y-4 mb-10">
                {[
                  {
                    title: 'Beat the Queue with Priority Scheduling',
                    desc: 'As CER projections show, demand is surging. We\'re offering priority installation scheduling for homeowners who book consultations now — helping you avoid the end-of-deadline rush.',
                  },
                  {
                    title: 'Solar + Battery System Design',
                    desc: 'Whether you\'re adding a battery to an existing solar system or installing both together, we design integrated systems that maximise self-consumption and minimise grid dependence.',
                  },
                  {
                    title: 'Full CHBS Rebate Processing',
                    desc: 'We manage the entire Cheaper Home Batteries Scheme application, STC paperwork, and any applicable state incentives — ensuring you receive every dollar of available rebate.',
                  },
                  {
                    title: 'Future-Ready Systems',
                    desc: 'With VPP participation growing and grid services becoming a revenue source, we install systems that are VPP-compatible from day one — positioning your battery as both a savings tool and an earning asset.',
                  },
                  {
                    title: 'CEC-Accredited Quality and Safety',
                    desc: 'Every Cosmic installation is performed by CEC-accredited professionals using approved brands including Tesla, FoxESS, GoodWe, and BYD — backed by manufacturer warranties of up to 15 years.',
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
                  The Clean Energy Regulator&apos;s projections make one thing clear: <strong className="text-white">2026
                  is set to be the biggest year ever for home batteries in Australia</strong>. With up
                  to 520,000 installations and 12 GWh of storage on the horizon, the residential energy
                  storage revolution is no longer a forecast — it&apos;s happening now.
                </p>
                <p className="text-white/90 text-lg mb-4">
                  But with rebates declining from May 1 and installer demand surging, the homeowners who
                  benefit most will be those who <strong className="text-white">act early in 2026</strong>.
                </p>
                <p className="text-white/90 text-lg">
                  <strong className="text-[#F9A825]">Super Solar Energy</strong> is ready to help
                  you secure your place in Australia&apos;s battery revolution — with expert guidance,
                  premium products, and full rebate support from consultation to installation.
                </p>
              </div>

              {/* Sources */}
              <div className="border border-gray-200 p-6 rounded-xl bg-gray-50">
                <h4 className="font-bold text-[#333333] mb-3 flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5 text-[#E8621A]" />
                  Sources &amp; Further Reading
                </h4>
                <ul className="text-sm text-[#666666] space-y-1">
                  <li>PV Magazine Australia — CER projects up to 12 GWh capacity from 520,000 home batteries in 2026 (February 2026)</li>
                  <li>Clean Energy Regulator — 2026 capacity and installation projections</li>
                  <li>Department of Climate Change, Energy, the Environment and Water (DCCEEW) — Cheaper Home Batteries Scheme</li>
                  <li>AEMO — National Electricity Market large-scale battery capacity data</li>
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
                Be Part of the{' '}
                <span className="text-[#F9A825]">520,000 Battery Revolution</span>
              </h2>

              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                With record battery installations projected for 2026 and rebates declining from May,
                now is the time to act. Get a free consultation from Cosmic today.
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
