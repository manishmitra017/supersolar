'use client'

import { motion } from 'framer-motion'

const ClipboardIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
)

const PencilRulerIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)

const WrenchIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
)

const SunBoltIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L9 14h3v7l4-11h-3z" />
  </svg>
)

const steps = [
  {
    number: 1,
    icon: ClipboardIcon,
    title: 'Free Consultation',
    description: 'We assess your property and energy needs at no cost',
  },
  {
    number: 2,
    icon: PencilRulerIcon,
    title: 'Custom System Design',
    description: 'Our engineers design the perfect solar solution for you',
  },
  {
    number: 3,
    icon: WrenchIcon,
    title: 'Professional Installation',
    description: 'CEC-accredited installers complete your setup safely',
  },
  {
    number: 4,
    icon: SunBoltIcon,
    title: 'Start Saving',
    description: 'Watch your energy bills drop from day one',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 bg-white" aria-labelledby="how-it-works-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="how-it-works-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2332] font-display"
          >
            How It Works
          </h2>
          <p className="mt-3 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Going solar is simple. Here&apos;s our proven 4-step process.
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting dashed line */}
            <div
              className="absolute top-6 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] border-dashed border-t-2 border-gray-300"
              aria-hidden="true"
            />

            <div className="relative grid grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Numbered circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#E8621A] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mt-4 text-[#E8621A]">
                    <step.icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 font-semibold text-lg text-[#1a2332]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 text-sm text-gray-600 leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="block md:hidden">
          <div className="relative pl-10">
            {/* Vertical dashed line */}
            <div
              className="absolute left-[1.375rem] top-0 bottom-0 border-dashed border-l-2 border-gray-300"
              aria-hidden="true"
            />

            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="relative flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Numbered circle - positioned on the vertical line */}
                  <div className="absolute -left-10 w-12 h-12 rounded-full bg-[#E8621A] text-white flex items-center justify-center font-bold text-lg shadow-lg shrink-0 z-10">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex items-start gap-3 pt-1">
                    <div className="text-[#E8621A] shrink-0 mt-0.5">
                      <step.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#1a2332]">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
