import Link from 'next/link'
import Image from 'next/image'

const serviceLinks = [
  { name: 'Solar Batteries', href: '/services' },
  { name: 'Solar Panels', href: '/services' },
  { name: 'Heat Pump', href: '/services' },
  { name: 'HVAC', href: '/services' },
  { name: 'Servicing', href: '/services' },
]

const companyLinks = [
  { name: 'About', href: '/about' },
  { name: 'Why Solar', href: '/why-solar' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
]

function PipeSeparatedLinks({ links }: { links: { name: string; href: string }[] }) {
  return (
    <>
      {links.map((link, index) => (
        <span key={link.name}>
          <Link
            href={link.href}
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            {link.name}
          </Link>
          {index < links.length - 1 && (
            <span className="text-white/30 mx-2">|</span>
          )}
        </span>
      ))}
    </>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#1a2332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Left Column — Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/company-logo.png"
                alt="Super Solar Energy"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-lg font-bold text-white">
                Super Solar Energy
              </span>
            </Link>
            <p className="mt-2 text-sm text-white/60">
              Powering Australia&apos;s Future
            </p>

            {/* Facebook Icon */}
            <div className="mt-4">
              <a
                href="https://www.facebook.com/supersolarmelbourne/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-white hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column — Link Groups */}
          <div className="space-y-3">
            <div>
              <span className="text-xs font-semibold text-[#F9A825] uppercase tracking-wider">
                Services:
              </span>{' '}
              <PipeSeparatedLinks links={serviceLinks} />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#F9A825] uppercase tracking-wider">
                Company:
              </span>{' '}
              <PipeSeparatedLinks links={companyLinks} />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#F9A825] uppercase tracking-wider">
                Legal:
              </span>{' '}
              <PipeSeparatedLinks links={legalLinks} />
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <p className="text-sm text-white/60">
              17 Short Street, Hampton East, Vic. 3188
            </p>
            <p className="text-sm text-white/60">
              <a
                href="tel:1300090984"
                className="hover:text-white transition-colors"
              >
                1300 09 09 84
              </a>
              <span className="text-white/30 mx-2">|</span>
              <a
                href="tel:0422786100"
                className="hover:text-white transition-colors"
              >
                0422 786 100
              </a>
            </p>
            <a
              href="mailto:info@supersolarenergy.com.au"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              info@supersolarenergy.com.au
            </a>
          </div>
          <p className="text-xs text-white/40 mt-4 text-center">
            &copy; 2026 Super Solar Energy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
