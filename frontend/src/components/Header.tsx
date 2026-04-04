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

const leftLinks = [
  { href: '/services', label: 'Services' },
  { href: '/solar-battery', label: 'Solar Batteries' },
  { href: '/about', label: 'About' },
]

const rightLinks = [
  { href: '/why-solar', label: 'Why Solar' },
  { href: '/articles', label: 'Articles' },
  { href: '/faq', label: 'FAQ' },
]

const mobileMenuLinks = [
  ...leftLinks,
  ...rightLinks,
  { href: '/contact', label: 'Contact' },
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header
        className="fixed top-0 w-full z-50 bg-white transition-shadow duration-300"
        style={{
          boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-6">
          {/* ── Desktop Layout (lg+) ── */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] items-center h-20">
            {/* Left Nav */}
            <div className="flex items-center gap-6">
              {leftLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-2 text-sm font-medium text-gray-600 hover:text-[#E8621A] transition-colors group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#E8621A] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Center Logo */}
            <Link
              href="/"
              className={`flex items-center gap-3 justify-center transition-all duration-300 ${
                scrolled ? 'py-2' : 'py-3'
              }`}
            >
              <div className="relative h-12 w-12 flex-shrink-0 rounded-xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/company-logo.png"
                  alt="Super Solar Energy"
                  width={48}
                  height={48}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </div>
              <div className="whitespace-nowrap">
                <span className="text-lg font-bold text-[#1a2332] leading-tight block">
                  Super <span className="text-[#E8621A]">Solar</span> Energy
                </span>
                <p className="text-xs text-[#E8621A] font-medium">
                  Powering Australia&apos;s Future
                </p>
              </div>
            </Link>

            {/* Right Nav + Phone + CTA */}
            <div className="flex items-center justify-end gap-6">
              {rightLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-2 text-sm font-medium text-gray-600 hover:text-[#E8621A] transition-colors group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#E8621A] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}

              {/* Phone — xl+ only */}
              <a
                href="tel:1300090984"
                className="hidden xl:flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-[#E8621A] transition-colors whitespace-nowrap"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>1300 09 09 84</span>
              </a>

              {/* Free Quote */}
              <Link
                href="/quote"
                className="rounded-full px-6 py-2.5 bg-[#E8621A] text-white font-bold text-sm hover:bg-[#c74f12] hover:shadow-[0_0_0_4px_rgba(232,98,26,0.2)] transition-all whitespace-nowrap"
              >
                Free Quote
              </Link>
            </div>
          </div>

          {/* ── Mobile / Tablet Layout (below lg) ── */}
          <div className="flex lg:hidden items-center justify-between h-16">
            {/* Left: Phone icon button */}
            <a
              href="tel:1300090984"
              className="flex items-center justify-center w-10 h-10 text-gray-700 hover:text-[#E8621A] transition-colors rounded-full hover:bg-gray-100"
              aria-label="Call 1300 09 09 84"
            >
              <PhoneIcon className="w-5 h-5" />
            </a>

            {/* Center: Logo image only */}
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/company-logo.png"
                alt="Super Solar Energy"
                width={40}
                height={40}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>

            {/* Right: Quote button + Hamburger */}
            <div className="flex items-center gap-2">
              <Link
                href="/quote"
                className="rounded-full px-4 py-2 bg-[#E8621A] text-white font-bold text-sm hover:bg-[#c74f12] transition-colors whitespace-nowrap"
              >
                <span className="hidden sm:inline">Free Quote</span>
                <span className="sm:hidden">Quote</span>
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-10 h-10 text-gray-700 hover:text-[#E8621A] hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
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
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 top-16 bg-white z-40 overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-between min-h-full px-6 py-8">
              {/* Nav Links */}
              <div className="flex flex-col items-center w-full">
                {mobileMenuLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + index * 0.05 }}
                    className="w-full text-center"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 text-lg font-semibold text-gray-800 hover:text-[#E8621A] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex flex-col gap-3 w-full max-w-xs mt-8 pb-8"
              >
                <a
                  href="tel:1300090984"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-[#1565C0] text-white font-bold text-base hover:bg-[#0d47a1] transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>Call 1300 09 09 84</span>
                </a>

                <Link
                  href="/quote"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center rounded-full px-6 py-3.5 bg-[#E8621A] text-white font-bold text-base hover:bg-[#c74f12] transition-colors"
                >
                  Get Free Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Spacer ── */}
      <div className="h-16 lg:h-20" />
    </>
  )
}
