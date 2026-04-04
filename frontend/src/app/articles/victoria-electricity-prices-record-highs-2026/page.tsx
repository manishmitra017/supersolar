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

const ExclamationTriangleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
)

const CurrencyDollarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export default function VictoriaElectricityPricesArticle() {
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
              <span className="text-gray-700">Victoria\'s Electricity Prices Hit Record Highs: Why Solar...</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <div className="bg-white py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm text-gray-500 mb-3">February 2026 &middot; 8 min read</p>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a2332]">
                Victoria\'s Electricity Prices Hit Record Highs: Why Solar + Battery Is Your Best Defence
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
                Key Takeaway for Victorian Homeowners
              </h2>
              <p className="text-[#0f1923] text-lg">
                Victorian electricity prices have increased over 50% since 2021 and are not coming back down. A solar + battery system
                can cut your electricity bill by <strong>60-80%</strong>, and every year you wait costs you $1,400 or more in lost savings
                while government rebates continue to decline.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                What&apos;s Happening to Electricity Prices in Victoria?
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                If your electricity bills have been climbing year after year, you&apos;re not imagining it. Victorian households
                have experienced some of the steepest electricity price increases in the country since 2022, driven by a combination
                of ageing coal power stations, rising network costs, and the massive investment required to transition Australia&apos;s
                energy grid.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                The Victorian Default Offer (VDO), set by the Essential Services Commission, has increased repeatedly. The average
                Victorian household is now paying between <strong className="text-[#333333]">$1,600 and $2,200 per year</strong> on
                electricity &mdash; and that figure keeps rising.
              </p>

              {/* Price Comparison Table */}
              <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-200">
                <div className="bg-[#E8621A] p-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <CurrencyDollarIcon className="w-6 h-6" />
                    Victorian Electricity Price Trends
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#efefef]">
                      <tr>
                        <th className="text-left p-4 font-semibold text-[#333333]">Year</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Avg. Usage Rate</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Avg. Annual Bill</th>
                        <th className="text-center p-4 font-semibold text-[#333333]">Change</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-4 text-[#444444]">2021-22</td>
                        <td className="p-4 text-right text-[#333333]">~22c/kWh</td>
                        <td className="p-4 text-right text-[#333333]">~$1,200</td>
                        <td className="p-4 text-center text-[#666666]">Baseline</td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">2022-23</td>
                        <td className="p-4 text-right text-[#333333]">~27c/kWh</td>
                        <td className="p-4 text-right text-[#333333]">~$1,500</td>
                        <td className="p-4 text-center text-red-600 font-semibold">+25%</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">2023-24</td>
                        <td className="p-4 text-right text-[#333333]">~30c/kWh</td>
                        <td className="p-4 text-right text-[#333333]">~$1,700</td>
                        <td className="p-4 text-center text-red-600 font-semibold">+13%</td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">2024-25</td>
                        <td className="p-4 text-right text-[#333333]">~29c/kWh</td>
                        <td className="p-4 text-right text-[#333333]">~$1,600</td>
                        <td className="p-4 text-center text-[#E8621A] font-semibold">-6%</td>
                      </tr>
                      <tr className="bg-[#F9A825]/20">
                        <td className="p-4 font-semibold text-[#0f1923]">2025-26</td>
                        <td className="p-4 text-right font-bold text-[#0f1923]">~32c/kWh</td>
                        <td className="p-4 text-right font-bold text-[#0f1923]">~$1,800</td>
                        <td className="p-4 text-center text-red-600 font-bold">+12%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-[#efefef] text-sm text-[#666666]">
                  Based on average household consumption of ~4,500 kWh/year. Rates vary by retailer and plan type.
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Why Prices Won&apos;t Come Back Down
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Many Victorian households have been hoping that electricity prices would eventually return to pre-2022 levels.
                Unfortunately, there are strong structural reasons why this is unlikely to happen:
              </p>

              {/* Reasons Box */}
              <div className="bg-white p-6 mb-10 border border-[#E8621A] rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#E8621A] mb-4 flex items-center gap-2">
                  <ExclamationTriangleIcon className="w-6 h-6" />
                  Why Your Bills Will Keep Rising
                </h3>
                <ul className="space-y-4 text-[#444444]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E8621A] font-bold mt-1 flex-shrink-0">1.</span>
                    <div>
                      <strong className="text-[#333333]">Coal plant closures are accelerating.</strong> Yallourn Power Station
                      in the Latrobe Valley closes in 2028, removing 1,480 MW of baseload power. Loy Yang A and B face
                      ongoing reliability issues. Replacing this capacity with new infrastructure costs billions that flow
                      through to your bills.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E8621A] font-bold mt-1 flex-shrink-0">2.</span>
                    <div>
                      <strong className="text-[#333333]">Network costs are surging.</strong> Billions of dollars in new
                      transmission infrastructure (VNI West interconnector, Western Renewables Link, Marinus Link) are being
                      built to support the energy transition. These costs are passed directly to consumers through network charges.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E8621A] font-bold mt-1 flex-shrink-0">3.</span>
                    <div>
                      <strong className="text-[#333333]">The Capacity Investment Scheme adds costs.</strong> The federal
                      government&apos;s mechanism to ensure reliable supply during the transition adds costs that are
                      ultimately borne by electricity consumers.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E8621A] font-bold mt-1 flex-shrink-0">4.</span>
                    <div>
                      <strong className="text-[#333333]">Gas prices remain elevated.</strong> Gas-fired power stations set
                      the marginal price in the electricity market during peak periods. With global gas prices well above
                      historical averages, this keeps electricity wholesale costs high.
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Time-of-Use Tariffs: The Hidden Cost Multiplier
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Many Victorians are now on time-of-use (TOU) electricity plans, where the price you pay depends on
                <em> when</em> you use electricity. The problem? The most expensive period is exactly when most families
                need power the most &mdash; the evening peak.
              </p>

              {/* TOU Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 text-center border-2 border-green-500 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">18-25c</div>
                  <div className="text-lg font-semibold text-[#333333] mb-1">Off-Peak</div>
                  <div className="text-sm text-[#666666]">10pm &ndash; 7am</div>
                  <div className="text-sm text-[#666666]">Weekends</div>
                </div>
                <div className="bg-white p-6 text-center border-2 border-[#F9A825] rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-[#0f1923] mb-2">25-32c</div>
                  <div className="text-lg font-semibold text-[#333333] mb-1">Shoulder</div>
                  <div className="text-sm text-[#666666]">7am &ndash; 3pm</div>
                  <div className="text-sm text-[#666666]">9pm &ndash; 10pm</div>
                </div>
                <div className="bg-white p-6 text-center border-2 border-red-500 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-red-500 mb-2">38-55c</div>
                  <div className="text-lg font-semibold text-[#333333] mb-1">Peak</div>
                  <div className="text-sm text-[#666666]">3pm &ndash; 9pm weekdays</div>
                  <div className="text-sm text-red-500 font-semibold mt-2">When your family needs power most</div>
                </div>
              </div>

              <p className="text-[#444444] text-lg mb-8">
                This is where a battery changes everything. Your solar panels generate power during the day (shoulder period),
                and a battery stores that power for use during the expensive evening peak. Instead of paying 38-55 cents per
                kWh from the grid, you&apos;re using your own stored solar energy for free.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                The Real Cost of Waiting
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Some homeowners think they should wait for solar and battery prices to drop further. But here&apos;s what
                the numbers actually show for a typical Victorian household:
              </p>

              {/* Cost of Waiting Table */}
              <div className="bg-white rounded-xl overflow-hidden mb-10 shadow-lg border border-gray-200">
                <div className="bg-[#0f1923] p-4">
                  <h3 className="text-xl font-bold text-white">The True Cost of Delaying Solar + Battery</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#efefef]">
                      <tr>
                        <th className="text-left p-4 font-semibold text-[#333333]">Factor</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Install Now (2026)</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Wait Until 2027</th>
                        <th className="text-right p-4 font-semibold text-[#333333]">Wait Until 2028</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-4 text-[#444444]">Victorian Battery Rebate</td>
                        <td className="p-4 text-right font-semibold text-green-600">$2,950</td>
                        <td className="p-4 text-right text-[#666666]">Potentially reduced</td>
                        <td className="p-4 text-right text-red-600">Likely ended</td>
                      </tr>
                      <tr className="bg-[#efefef]">
                        <td className="p-4 text-[#444444]">Federal STC Discount</td>
                        <td className="p-4 text-right font-semibold text-green-600">~$2,500</td>
                        <td className="p-4 text-right text-[#666666]">~$2,100</td>
                        <td className="p-4 text-right text-[#666666]">~$1,700</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#444444]">Electricity savings lost</td>
                        <td className="p-4 text-right font-semibold text-green-600">$0</td>
                        <td className="p-4 text-right text-red-600">-$1,400</td>
                        <td className="p-4 text-right text-red-600">-$2,800</td>
                      </tr>
                      <tr className="bg-[#F9A825]/20">
                        <td className="p-4 font-bold text-[#0f1923]">Total Cost of Waiting</td>
                        <td className="p-4 text-right font-bold text-green-600">Best Value</td>
                        <td className="p-4 text-right font-bold text-red-600">~$2,250 worse off</td>
                        <td className="p-4 text-right font-bold text-red-600">~$5,550 worse off</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-[#efefef] text-sm text-[#666666]">
                  Based on a 6.6kW solar + 13.5kWh battery system for a typical 4-person household.
                </div>
              </div>

              <p className="text-[#444444] text-lg mb-8">
                The maths is clear: <strong className="text-[#333333]">waiting one year costs you roughly $2,250. Waiting two
                years costs over $5,500.</strong> And that&apos;s a conservative estimate &mdash; if electricity prices rise
                faster than expected, the gap widens further.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                How Much Can a Victorian Household Actually Save?
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                A properly sized solar + battery system for a typical Victorian home can dramatically reduce your electricity
                bills. Here&apos;s what real savings look like:
              </p>

              {/* Savings Breakdown */}
              <div className="bg-[#efefef] p-6 rounded-xl mb-10">
                <h3 className="text-xl font-bold text-[#333333] mb-4">Typical Victorian Household Savings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg">
                    <div className="text-sm text-[#E8621A] font-semibold mb-1">Solar Only (6.6kW)</div>
                    <div className="text-3xl font-bold text-[#333333] mb-2">$900-$1,200<span className="text-base font-normal text-[#666666]">/year</span></div>
                    <div className="text-sm text-[#666666]">40-55% bill reduction</div>
                  </div>
                  <div className="bg-white p-5 rounded-lg border-2 border-[#E8621A]">
                    <div className="text-sm text-[#E8621A] font-semibold mb-1">Solar + Battery (6.6kW + 13.5kWh)</div>
                    <div className="text-3xl font-bold text-[#E8621A] mb-2">$1,400-$1,800<span className="text-base font-normal text-[#666666]">/year</span></div>
                    <div className="text-sm text-[#666666]">65-85% bill reduction</div>
                  </div>
                </div>
                <p className="text-sm text-[#666666] mt-4">
                  Savings vary based on household consumption, system size, orientation, and electricity plan. Figures
                  include self-consumption value and feed-in tariff credits.
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6">
                Government Rebates Are Shrinking Every Month
              </h2>

              <p className="text-[#444444] text-lg mb-6">
                Both state and federal incentives are on a countdown. The Victorian Solar Homes battery rebate of up to
                $2,950 has limited remaining allocations. The federal Small-scale Technology Certificates (STCs) reduce in
                value every year until they reach zero in 2031. And the Cheaper Home Batteries Program rebate drops every
                six months from May 2026.
              </p>

              <p className="text-[#444444] text-lg mb-8">
                Combined, these incentives can save you <strong className="text-[#333333]">$5,000 or more</strong> on a solar +
                battery system right now. But that number is shrinking with every passing month. There has never been a better
                time to act &mdash; and there may never be again.
              </p>

              {/* Quote Box */}
              <blockquote className="bg-[#efefef] p-6 mb-10 border-l-4 border-[#E8621A] italic text-[#444444] rounded-r-xl">
                <p className="mb-4">
                  &quot;Victorian households are essentially paying a premium every single day they don&apos;t have solar and
                  battery. With current rebates and electricity prices, the payback period for a quality system is now under
                  5 years &mdash; and you get 20+ years of savings after that.&quot;
                </p>
                <cite className="text-[#E8621A] not-italic font-semibold">
                  &mdash; Clean Energy Council, Industry Report 2025
                </cite>
              </blockquote>
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
