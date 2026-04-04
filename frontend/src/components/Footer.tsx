import Link from 'next/link'
import Image from 'next/image'

const BatteryIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
  </svg>
)

const SunIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

const FireIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
  </svg>
)

const SnowflakeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3" />
  </svg>
)

const WrenchIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const EnvelopeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
)

const MapPinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
)

const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

const services = [
  { name: 'Solar Batteries', href: '/services', icon: BatteryIcon },
  { name: 'Solar Panels', href: '/services', icon: SunIcon },
  { name: 'Hot Water Heat Pump', href: '/services', icon: FireIcon },
  { name: 'HVAC Systems', href: '/services', icon: SnowflakeIcon },
  { name: 'Servicing & Maintenance', href: '/services', icon: WrenchIcon },
]

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Why Solar', href: '/why-solar' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact Us', href: '/contact' },
]

const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/supersolarmelbourne/',
    icon: (props: { className?: string }) => (
      <svg className={props.className} fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#1565C0] overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white p-0.5">
                <div className="w-full h-full rounded-[10px] overflow-hidden flex items-center justify-center">
                  <Image
                    src="/company-logo.png"
                    alt="Super Solar Energy"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="text-xl font-bold font-display text-white group-hover:text-[#F9A825] transition-colors">
                Super Solar Energy
              </span>
            </Link>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Melbourne&apos;s trusted provider of premium solar battery solutions. We help homes and businesses
              transition to clean, renewable energy with professional installation and ongoing support.
            </p>

            <div className="space-y-3 mb-8">
              <a href="tel:1300090984" className="flex items-center gap-3 text-white/80 hover:text-[#F9A825] transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <PhoneIcon className="w-4 h-4" />
                </div>
                <span>1300 09 09 84</span>
              </a>
              <a href="tel:0422786100" className="flex items-center gap-3 text-white/80 hover:text-[#F9A825] transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <PhoneIcon className="w-4 h-4" />
                </div>
                <span>0422 786 100</span>
              </a>
              <a href="mailto:info@supersolarenergy.com.au" className="flex items-center gap-3 text-white/80 hover:text-[#F9A825] transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <EnvelopeIcon className="w-4 h-4" />
                </div>
                <span>info@supersolarenergy.com.au</span>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPinIcon className="w-4 h-4" />
                </div>
                <span>130 Bridge Road, Richmond VIC 3121</span>
              </div>
            </div>

            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:text-[#F9A825] hover:bg-white/20 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-[#F9A825] uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <service.icon className="w-4 h-4 text-white/60 group-hover:text-[#F9A825] transition-colors" />
                    <span>{service.name}</span>
                    <ArrowRightIcon className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-[#F9A825] uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <span>{item.name}</span>
                    <ArrowRightIcon className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-[#F9A825] uppercase tracking-wider mb-6">Stay Updated</h3>
            <p className="text-white/80 text-sm mb-4">
              Get the latest solar news, rebate updates, and exclusive offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#F9A825]/50 focus:ring-1 focus:ring-[#F9A825]/50 transition-all text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-[#E8621A] text-white font-semibold text-sm hover:bg-[#c74f12] transition-all duration-300 shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              &copy; {new Date().getFullYear()} Super Solar Energy. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-white/70 hover:text-[#F9A825] text-sm transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/40">|</span>
              <Link href="/terms-of-service" className="text-white/70 hover:text-[#F9A825] text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/70 text-xs">
            <span className="flex items-center gap-2">
              <BatteryIcon className="w-4 h-4 text-[#F9A825]" />
              CEC Approved Installer
            </span>
            <span className="text-white/40">&bull;</span>
            <span className="flex items-center gap-2">
              <SunIcon className="w-4 h-4 text-[#F9A825]" />
              Licensed Electrical Contractor
            </span>
            <span className="text-white/40">&bull;</span>
            <span>ABN: XX XXX XXX XXX</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
