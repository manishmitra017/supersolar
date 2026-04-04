'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const BoltIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const BatteryIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h14a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2zm16 3h2M7 12h4" />
  </svg>
)

const socialIcons = [
  {
    href: 'https://www.facebook.com/supersolarmelbourne/',
    icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
    label: 'Facebook'
  }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/solar-battery', label: 'Solar Batteries' },
    { href: '/about', label: 'About' },
    { href: '/why-solar', label: 'Why Solar' },
    { href: '/articles', label: 'Articles' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <>
      {/* Top Bar */}
      <div
        className={`fixed w-full top-0 z-50 transition-all duration-500 bg-[#E8621A] ${
          scrolled
            ? 'md:h-0 md:overflow-hidden md:opacity-0'
            : 'opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4 sm:gap-8">
            <a
              href="tel:1300090984"
              className="flex items-center gap-2 text-white hover:text-[#F9A825] transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <PhoneIcon className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm hidden sm:block">1300 09 09 84</span>
            </a>
            <a
              href="tel:0422786100"
              className="hidden md:flex items-center gap-2 text-white/90 hover:text-[#F9A825] transition-colors"
            >
              <span className="text-sm">0422 786 100</span>
            </a>
            <div className="hidden lg:flex items-center gap-2 text-white/80">
              <ClockIcon className="w-4 h-4" />
              <span className="text-sm">Mon-Sat: 8AM-6PM</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden lg:block text-sm text-white/90">
              Melbourne&apos;s Trusted <span className="text-[#F9A825]">Solar Battery</span> Experts
            </span>
            <div className="flex items-center gap-2">
              {socialIcons.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white hover:text-[#F9A825] transition-all duration-300"
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed w-full z-40 transition-all duration-500 ${
          scrolled
            ? 'top-14 md:top-0 shadow-lg'
            : 'top-14 md:top-10 shadow-md'
        }`}
      >
        <div
          className={`absolute inset-0 transition-all duration-500 bg-white ${
            scrolled ? 'opacity-100' : 'opacity-95'
          }`}
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />

        <nav className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="relative h-12 lg:h-14 w-12 lg:w-14 rounded-xl overflow-hidden flex items-center justify-center">
                  <Image
                    src="/company-logo.png"
                    alt="Super Solar Energy"
                    width={56}
                    height={56}
                    className="h-10 lg:h-12 w-auto object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="whitespace-nowrap">
                <span className="text-sm sm:text-lg lg:text-xl font-bold text-[#1a2332] leading-tight block">
                  Super <span className="text-[#E8621A]">Solar</span> Energy
                </span>
                <p className="text-[10px] sm:text-xs text-[#E8621A] font-medium hidden sm:block">
                  Powering Australia&apos;s Future
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 mx-8 xl:mx-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-2 text-[#3d4852] hover:text-[#E8621A] font-medium text-sm transition-colors group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#E8621A] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex items-center gap-4">
              <a
                href="tel:1300090984"
                className="hidden xl:flex items-center gap-3 text-[#3d4852] hover:text-[#E8621A] transition-colors group whitespace-nowrap"
              >
                <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#E8621A]/10 border border-[#E8621A]/30 flex items-center justify-center group-hover:bg-[#E8621A]/20 transition-colors">
                  <PhoneIcon className="w-5 h-5 text-[#E8621A]" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-[#606f7b]">Call Now</p>
                  <p className="text-sm font-bold text-[#1a2332] whitespace-nowrap">1300 09 09 84</p>
                </div>
              </a>

              <Link
                href="/quote"
                className="bg-[#E8621A] text-white hover:bg-[#c74f12] flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-bold rounded-lg whitespace-nowrap flex-shrink-0 shadow-lg transition-all"
              >
                <BoltIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Free Quote</span>
                <span className="sm:hidden">Quote</span>
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-[#3d4852] hover:text-[#E8621A] hover:bg-gray-100 rounded-xl transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <CloseIcon className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden relative overflow-hidden bg-white"
            >
              <div className="h-px w-full bg-gray-200" />
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-[#3d4852] hover:text-[#E8621A] hover:bg-orange-50 rounded-xl font-medium transition-all group"
                    >
                      <span>{link.label}</span>
                      <ChevronIcon className="w-4 h-4 text-[#606f7b] group-hover:text-[#E8621A] group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-4 space-y-3 border-t border-gray-200 mt-4">
                  <a
                    href="tel:1300090984"
                    className="flex items-center justify-center gap-3 bg-[#1565C0] text-white px-4 py-3.5 rounded-xl font-bold shadow-lg hover:bg-[#0d47a1] transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <span>Call: 1300 09 09 84</span>
                  </a>

                  <Link
                    href="/quote"
                    className="flex items-center justify-center gap-2 bg-[#E8621A] text-white px-4 py-3.5 rounded-xl font-bold shadow-lg hover:bg-[#c74f12] transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <BatteryIcon className="w-5 h-5" />
                    <span>Get Battery Quote</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer */}
      <div className={`transition-all duration-300 ${scrolled ? 'h-[112px] md:h-16 lg:h-20' : 'h-[112px] md:h-24 lg:h-28'}`} />
    </>
  )
}
