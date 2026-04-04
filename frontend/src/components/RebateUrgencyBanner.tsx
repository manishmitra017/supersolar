'use client'

import Link from 'next/link'

const AlertIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
)

export default function RebateUrgencyBanner() {
  return (
    <div className="bg-[#E8621A] py-4" role="banner" aria-label="Rebate urgency notice">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          {/* Alert icon + text */}
          <div className="flex items-center gap-2 text-center">
            <AlertIcon className="w-5 h-5 text-white shrink-0" />
            <p className="text-white text-sm sm:text-base font-bold">
              Government rebates are shrinking — Save up to $8,000 before May 2026
            </p>
          </div>

          {/* CTA button */}
          <Link
            href="/why-solar"
            className="inline-flex items-center px-5 py-2 bg-white text-[#E8621A] rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shrink-0"
          >
            Check My Rebate
          </Link>
        </div>
      </div>
    </div>
  )
}
