'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatsStripProps {
  variant?: 'light' | 'orange' | 'blue'
}

interface StatItem {
  value: string
  numericValue: number
  suffix: string
  label: string
}

const stats: StatItem[] = [
  { value: '10+', numericValue: 10, suffix: '+', label: 'Years Experience' },
  { value: '5,000+', numericValue: 5000, suffix: '+', label: 'Homes Powered' },
  { value: '10yr', numericValue: 10, suffix: 'yr', label: 'Warranty' },
  { value: '4.9★', numericValue: 4.9, suffix: '★', label: 'Customer Rating' },
]

const variantStyles = {
  light: {
    bg: 'bg-[#F0F5FA]',
    value: 'text-[#1a2332]',
    label: 'text-gray-500',
  },
  orange: {
    bg: 'bg-[#E8621A]',
    value: 'text-white',
    label: 'text-white/80',
  },
  blue: {
    bg: 'bg-[#1565C0]',
    value: 'text-white',
    label: 'text-white/80',
  },
}

function AnimatedStat({
  stat,
  styles,
  delay,
}: {
  stat: StatItem
  styles: (typeof variantStyles)['light']
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (!isInView) return

    const timeout = setTimeout(() => {
      const duration = 1200
      const start = performance.now()
      const isDecimal = stat.numericValue % 1 !== 0

      function animate(now: number) {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = eased * stat.numericValue

        if (isDecimal) {
          setDisplayValue(current.toFixed(1))
        } else if (stat.numericValue >= 1000) {
          setDisplayValue(Math.floor(current).toLocaleString())
        } else {
          setDisplayValue(Math.floor(current).toString())
        }

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(timeout)
  }, [isInView, stat.numericValue, delay])

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center py-4"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <span
        className={`text-3xl sm:text-4xl font-bold font-display ${styles.value}`}
      >
        {displayValue}
        {stat.suffix}
      </span>
      <span className={`mt-1 text-sm ${styles.label}`}>{stat.label}</span>
    </motion.div>
  )
}

export default function StatsStrip({ variant = 'light' }: StatsStripProps) {
  const styles = variantStyles[variant]

  return (
    <section className={`py-8 ${styles.bg}`} aria-label="Company statistics">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:flex md:justify-around">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={stat.label}
              stat={stat}
              styles={styles}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
