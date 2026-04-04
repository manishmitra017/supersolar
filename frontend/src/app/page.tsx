'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import HowItWorks from '@/components/HowItWorks'
import TabbedServices from '@/components/TabbedServices'
import StatsStrip from '@/components/StatsStrip'
import RebateUrgencyBanner from '@/components/RebateUrgencyBanner'
import CustomerReviews from '@/components/CustomerReviews'
import PromotionsCarousel from '@/components/PromotionsCarousel'

const articles = [
  {
    title: 'Government Battery Rebates Are Shrinking — Act Now',
    date: 'March 2026',
    excerpt:
      'With STC factors declining each year, the time to invest in solar batteries is now. Find out how much you could save.',
    href: '/articles/stc-battery-rebate-countdown-2026',
    image: '/solarroof7.jpg',
  },
  {
    title: 'Victoria Electricity Prices Hit Record Highs',
    date: 'February 2026',
    excerpt:
      'Rising energy costs make solar and battery storage more attractive than ever for Victorian homeowners.',
    href: '/articles/victoria-electricity-prices-record-highs-2026',
    image: '/solarroof8.jpg',
  },
  {
    title: 'Record Home Battery Installations Across Australia',
    date: 'January 2026',
    excerpt:
      "Australia's home battery market is booming with record installations driven by falling costs and rising electricity prices.",
    href: '/articles/record-home-battery-surge-australia-2025',
    image: '/solarroof10.jpg',
  },
]

const projects = [
  { image: '/solarroof.jpg', alt: 'Solar roof installation 1', large: true },
  { image: '/solarroof2.jpg', alt: 'Solar roof installation 2', large: false },
  { image: '/solarroof3.jpg', alt: 'Solar roof installation 3', large: false },
  { image: '/solarroof4.jpg', alt: 'Solar roof installation 4', large: true },
  { image: '/solarroof5.jpg', alt: 'Solar roof installation 5', large: false },
  { image: '/solarroof6.jpg', alt: 'Solar roof installation 6', large: false },
]

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      {/* Section 1: Split Hero */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="section-label">Powering Australia&apos;s Future</span>
              <h1 className="text-display-lg heading-display text-[#1a2332] mt-3">
                Premium Solar &amp; Battery Systems
              </h1>
              <p className="text-xl text-gray-600 mt-2">Australia Wide Installation</p>
              <span className="inline-block bg-[#FFF5EE] text-[#E8621A] rounded-full px-4 py-1.5 text-sm font-semibold mt-4">
                Starting from $2,480
              </span>
              <p className="text-gray-600 mt-4 max-w-lg">
                Join 5,000+ Australian homes saving up to 90% on electricity with our
                CEC-accredited solar and battery installations.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/quote"
                  className="bg-[#E8621A] text-white rounded-full px-8 py-3.5 font-bold hover:bg-[#d4570f] transition-colors"
                >
                  Book Free Consultation
                </Link>
                <a
                  href="tel:1300090984"
                  className="rounded-full px-8 py-3.5 font-bold border-2 border-[#E8621A] text-[#E8621A] hover:bg-[#E8621A] hover:text-white transition-colors"
                >
                  Call 1300 09 09 84
                </a>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/solarroof9.jpg"
                  alt="Premium solar panel installation on Australian home"
                  width={600}
                  height={500}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Stats Strip */}
      <StatsStrip variant="light" />

      {/* Section 3: How It Works */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">How It Works</span>
          <h2 className="text-display-md heading-display text-[#1a2332] mt-3">
            Your Solar Journey in 4 Steps
          </h2>
        </div>
        <HowItWorks />
      </section>

      {/* Section 4: Tabbed Services */}
      <section className="bg-[#F0F5FA] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Our Services</span>
          <h2 className="text-display-md heading-display text-[#1a2332] mt-3">
            Complete Energy Solutions
          </h2>
        </div>
        <TabbedServices />
      </section>

      {/* Section 5: Rebate Urgency Banner */}
      <RebateUrgencyBanner />

      {/* Section 6: Customer Reviews */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">What Our Customers Say</span>
        </div>
        <CustomerReviews />
      </section>

      {/* Section 7: Featured Projects — Bento Grid */}
      <section className="bg-[#F0F5FA] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="section-label">Our Work</span>
            <h2 className="text-display-md heading-display text-[#1a2332] mt-3">
              Recent Installations
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`rounded-xl overflow-hidden relative group cursor-pointer ${
                  project.large
                    ? 'col-span-2 row-span-2 min-h-[300px] md:min-h-[400px]'
                    : 'min-h-[180px] md:min-h-[200px]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setSelectedImage(project.image)}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  sizes={
                    project.large
                      ? '(max-width: 768px) 100vw, 50vw'
                      : '(max-width: 768px) 50vw, 25vw'
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-semibold text-sm">View Project</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full"
            >
              <Image
                src={selectedImage}
                alt="Project installation detail"
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section 8: Latest Articles */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="section-label">Latest News</span>
            <h2 className="text-display-md heading-display text-[#1a2332] mt-3">
              Solar Industry Updates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={article.href} className="group block">
                  <div className="rounded-xl overflow-hidden relative">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={240}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 left-3 bg-[#E8621A] text-white text-xs font-semibold rounded-full px-3 py-1">
                      {article.date}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold text-lg text-[#1a2332] line-clamp-2 group-hover:text-[#E8621A] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mt-2">{article.excerpt}</p>
                    <span className="inline-block text-[#E8621A] font-semibold text-sm mt-3">
                      Read more &rarr;
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/articles"
              className="text-[#E8621A] font-semibold hover:underline"
            >
              View All Articles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Section 9: Savings CTA */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-display-md heading-display text-[#1a2332]">
            See How Much You Could Save
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Get a free, no-obligation quote tailored to your home and energy needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/quote"
              className="bg-[#E8621A] text-white rounded-full px-8 py-3.5 font-bold hover:bg-[#d4570f] transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:1300090984"
              className="rounded-full px-8 py-3.5 font-bold border-2 border-[#E8621A] text-[#E8621A] hover:bg-[#E8621A] hover:text-white transition-colors"
            >
              Call 1300 09 09 84
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Join 5,000+ Australian homes powered by Super Solar
          </p>
        </div>
      </section>

      {/* Section 10: Promotions Carousel */}
      <PromotionsCarousel />
    </>
  )
}
