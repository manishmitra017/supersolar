'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const articles = [
  {
    slug: 'rooftop-solar-surpasses-coal-28gw-australia-2025',
    title: 'Australia\'s Rooftop Solar Hits 28.3 GW — Now Bigger Than the Entire Coal Fleet',
    description: 'With 4.3 million installations, Australian rooftops now produce 28.3 GW — surpassing the nation\'s 22.5 GW coal fleet. Battery uptake surged fourfold in H2 2025.',
    image: '/solarroof8.jpg',
    date: 'March 2026',
    category: 'Industry News',
    featured: false
  },
  {
    slug: 'february-2026-record-battery-month-australia',
    title: 'February 2026 Smashes Battery Records: 1.2 GWh Installed in a Single Month',
    description: 'A record 1.2 GWh of home battery storage was registered in February 2026 — up 24% on January. Every state saw increased uptake as homeowners rush to beat the May 1 rebate deadline.',
    image: '/batteryImage2.jpg',
    date: 'March 2026',
    category: 'Industry News',
    featured: false
  },
  {
    slug: 'cer-projects-520000-home-batteries-12gwh-2026',
    title: 'CER Projects Up to 520,000 Home Batteries and 12 GWh of Storage in 2026',
    description: 'The Clean Energy Regulator projects 350,000-520,000 home battery installations delivering 8-12 GWh of storage in 2026. Large-scale solar approvals also hit a record 3 GW.',
    image: '/batteryImage3.jpg',
    date: 'March 2026',
    category: 'Industry News',
    featured: false
  },
  {
    slug: 'australia-battery-boom-record-demand-may-2026-deadline',
    title: 'Australia\'s Battery Boom Hits Record Highs — and the May 1 Deadline Is Weeks Away',
    description: 'A record 1.2 GWh of home batteries were registered in February 2026 alone. With the federal rebate dropping on 1 May, here\'s what every Australian homeowner needs to know right now.',
    image: '/batteryImage1.jpg',
    date: 'March 2026',
    category: 'Industry News',
    featured: false
  },
  {
    slug: 'solar-battery-boom-choosing-right-system',
    title: 'The Battery Boom Is Real: Choosing the Right System and Trusted Installer',
    description: 'Demand for home batteries is skyrocketing, but rushing in without guidance can cost you. Learn why smart, safe installation matters and how Super Solar Energy helps homeowners every step of the way.',
    image: '/batteryImage2.jpg',
    date: 'March 2026',
    category: 'Industry Insights',
    featured: false
  },
  {
    slug: 'record-home-battery-surge-australia-2025',
    title: 'Record Home Battery Surge Charges Up Australia\u2019s Biggest Power Station on Aussie Rooftops',
    description: '183,245 home batteries installed in H2 2025 \u2014 more than the entire 2020\u20132024 period combined. A four-fold increase signals the battery revolution is here. Find out what it means and how Super Solar Energy can help.',
    image: '/batteryImage1.jpg',
    date: 'March 2026',
    category: 'Industry News',
    featured: true
  },
  {
    slug: 'goodwe-esa-three-phase-all-in-one-energy-storage',
    title: 'GoodWe ESA All-in-One: How Super Solar Energy Can Help You Get Australia\'s Most Advanced Energy Storage System',
    description: 'CEC-approved three-phase energy storage with 5-108kWh capacity. Pre-wired, modular design with whole-home backup. Coming soon to Super Solar Energy.',
    image: '/banners/goodwe-all-in-one.png',
    date: 'March 2026',
    category: 'Product News',
    featured: false
  },
  {
    slug: 'australia-solar-battery-rebate-guide-state-by-state-2026',
    title: 'The Complete 2026 Australian Solar Battery Rebate Guide: Every State, Every Dollar, Every Deadline',
    description: 'The definitive state-by-state guide to solar battery rebates across Australia. Federal $7.2B program, state incentives, STC timelines, and exactly how much you can save before rebates drop.',
    image: '/batteryImage3.jpg',
    date: 'February 2026',
    category: 'Guides',
    featured: false
  },
  {
    slug: 'stc-battery-rebate-countdown-2026',
    title: 'Your Battery Rebate Is Shrinking Every 6 Months: The STC Countdown Has Begun',
    description: 'The federal STC factor drops from 8.4 to 6.8 in May 2026 and keeps falling every 6 months. A 13.5kWh battery loses $2,800 in rebates by 2028. The clock is ticking.',
    image: '/batteryImage2.jpg',
    date: 'February 2026',
    category: 'Government Rebates',
    featured: false
  },
  {
    slug: 'nsw-battery-rebate-guide-2026',
    title: 'NSW Homeowners: Your Complete 2026 Guide to Battery Rebates and Savings',
    description: 'NSW households pay up to $2,400/year on electricity with peak rates hitting 55c/kWh. Stack federal STCs with NSW incentives to save $1,500-$2,000/year with solar + battery.',
    image: '/solarroof8.jpg',
    date: 'February 2026',
    category: 'Government Rebates',
    featured: false
  },
  {
    slug: 'queensland-solar-battery-savings-2026',
    title: 'Queensland\'s Solar Goldmine: Why the Sunshine State Needs Batteries Now More Than Ever',
    description: 'QLD has Australia\'s best solar but some of the lowest battery uptake. With feed-in tariffs near zero and federal rebates dropping, every month without a battery is money lost.',
    image: '/solarroof3.jpg',
    date: 'February 2026',
    category: 'Industry News',
    featured: false
  },
  {
    slug: 'south-australia-battery-vpp-opportunity-2026',
    title: 'South Australia\'s Battery Revolution: How SA Households Are Earning Money from Their Solar',
    description: 'SA has the highest electricity prices in Australia and the lowest feed-in tariffs. With battery + VPP, SA households can save up to $3,000/year. Federal rebates dropping from May 2026.',
    image: '/batteryImage1.jpg',
    date: 'February 2026',
    category: 'Industry News',
    featured: false
  },
  {
    slug: 'western-australia-solar-battery-guide-2026',
    title: 'Western Australia Solar Battery Guide: Perth Homeowners Are Leaving Thousands on the Table',
    description: 'WA\'s rock-bottom 2.25c/kWh feed-in tariff and solar curtailment make batteries essential, not optional. Federal rebates of ~$4,500 dropping from May 2026.',
    image: '/solarroof5.jpg',
    date: 'February 2026',
    category: 'Guides',
    featured: false
  },
  {
    slug: 'victoria-electricity-prices-record-highs-2026',
    title: 'Victoria\'s Electricity Prices Hit Record Highs: Why Solar + Battery Is Your Best Defence',
    description: 'Victorian households are paying more for electricity than ever before, with prices up over 50% since 2021. Find out why acting now saves you thousands in lost savings and declining rebates.',
    image: '/solarroof10.jpg',
    date: 'February 2026',
    category: 'Electricity Costs',
    featured: false
  },
  {
    slug: 'feed-in-tariffs-collapsing-victoria-battery-essential',
    title: 'Feed-in Tariffs Are Collapsing in Victoria: Why Every Solar Home Needs a Battery',
    description: 'Victorian solar feed-in tariffs have plummeted from 60c/kWh to under 5c/kWh. Without a battery, your solar panels are leaving money on the table. Here\'s how to fix that.',
    image: '/solarroof5.jpg',
    date: 'February 2026',
    category: 'Industry News',
    featured: false
  },
  {
    slug: 'victoria-grid-pressure-blackouts-solar-battery-protection',
    title: 'Victoria\'s Grid Under Pressure: How Solar + Battery Protects Your Home from Blackouts',
    description: 'Coal closures, extreme weather, and infrastructure delays are pushing Victoria\'s power grid to the limit. A solar + battery system provides genuine energy independence.',
    image: '/solarroof3.jpg',
    date: 'February 2026',
    category: 'Energy Security',
    featured: false
  },
  {
    slug: 'federal-battery-rebate-changes-2025',
    title: 'Federal Battery Rebate Changes: $7.2 Billion Expansion with New Rules',
    description: 'The Australian Government has expanded the Cheaper Home Batteries Program from $2.3bn to $7.2bn, with new tiered rebates for larger batteries starting May 2026.',
    image: '/batteryImage3.jpg',
    date: 'December 2025',
    category: 'Government Rebates',
    featured: false
  },
  {
    slug: 'cheaper-home-batteries-program',
    title: '$2.3 Billion Cheaper Home Batteries Program Now Live',
    description: 'Government launches massive battery rebate program offering up to 30% discounts on home battery systems. Learn how to take advantage of this unprecedented opportunity.',
    image: '/batteryImage2.jpg',
    date: 'August 2025',
    category: 'Government Rebates',
    featured: false
  },
  {
    slug: 'maximize-government-benefits',
    title: 'How Solar Households Can Maximize Government Benefits',
    description: 'Complete guide to accessing federal and state solar incentives, rebates, and the new battery program. Everything you need to know to get the best value.',
    image: '/solarroof8.jpg',
    date: 'August 2025',
    category: 'Guides',
    featured: false
  },
  {
    slug: 'battery-storage-revolution',
    title: 'Battery Storage Revolution: 5kWh to 100kWh Systems Eligible',
    description: 'New program covers batteries from small residential to large commercial installations with CEC approval. Find out if your system qualifies.',
    image: '/batteryImage1.jpg',
    date: 'August 2025',
    category: 'Industry News',
    featured: false
  }
]

const images = ['/solarroof3.jpg', '/solarroof5.jpg', '/solarroof8.jpg', '/solarroof10.jpg', '/batteryImage1.jpg', '/batteryImage2.jpg', '/batteryImage3.jpg']

export default function ArticlesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-[#E8621A] uppercase tracking-wide mb-3">Latest News</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-[#1a2332] mb-4">
              Solar Industry Updates
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest solar energy news, government rebate updates, and industry insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-white py-8 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={`/articles/${article.slug}`} className="block group h-full">
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition h-full flex flex-col">
                    <div className="relative h-40">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute bottom-3 left-3 bg-[#E8621A] text-white text-xs font-semibold rounded-full px-3 py-1">
                        {article.date}
                      </span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-bold text-lg text-[#1a2332] line-clamp-2 group-hover:text-[#E8621A] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mt-2 flex-1">
                        {article.description}
                      </p>
                      <span className="text-[#E8621A] text-sm font-semibold mt-3 inline-block">
                        Read more &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
