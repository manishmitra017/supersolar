'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useGooglePlaces } from '@/hooks/useGooglePlaces'
import { trackEvent } from '@/components/GoogleAnalytics'

// SVG Icon Components
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

const ClockIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const faqs = [
  {
    question: "How quickly can you install my solar system?",
    answer: "Most residential installations are completed within 1-3 days. We'll provide you with a detailed timeline during your free consultation, including any necessary approvals and grid connection processes."
  },
  {
    question: "What government rebates am I eligible for?",
    answer: "There are various federal and state rebates available, including the Small-scale Renewable Energy Scheme and state-specific battery rebates. We handle all paperwork and ensure you receive maximum benefits."
  },
  {
    question: "How much money will I save with solar?",
    answer: "Savings depend on your energy usage, system size, and location. Most customers see 70-90% reduction in electricity bills. We provide detailed savings projections during your consultation."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we offer flexible financing solutions to make solar accessible. Our team can discuss various payment plans and financing options that suit your budget during your consultation."
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    serviceInterest: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const handlePlaceSelect = (place: { formatted_address?: string }) => {
    if (place.formatted_address) {
      setFormData({
        ...formData,
        suburb: place.formatted_address
      })
    }
  }

  const suburbInputRef = useGooglePlaces(handlePlaceSelect)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || '';
      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.suburb,
          service_interest: formData.serviceInterest,
          message: formData.message
        })
      })

      if (response.ok) {
        trackEvent('form_submit', 'Contact', formData.serviceInterest || 'General Inquiry')
        setSubmitMessage('Thank you for your message! We will get back to you within 24 hours.')
        setFormData({ name: '', email: '', phone: '', suburb: '', serviceInterest: '', message: '' })
      } else {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
      }
    } catch {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = 'w-full px-4 py-3 bg-gray-50/50 rounded-lg border border-gray-200 focus:outline-none focus:border-[#E8621A] focus:ring-2 focus:ring-[#E8621A]/20 transition-all text-sm'
  const selectClasses = `${inputClasses} appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%20stroke='%236b7280'%20stroke-width='2'%3E%3Cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M19.5%208.25l-7.5%207.5-7.5-7.5'/%3E%3C/svg%3E")] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`

  return (
    <div className="bg-[#f8f9fa]">
      {/* Hero Section with Background */}
      <section className="relative pt-24 pb-40 lg:pt-32 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/solarroof6.jpg"
            alt="Contact Super Solar Energy"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#0d47a1]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2332]/60 to-[#1a2332]/90" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
              <span className="text-yellow-400">✨</span>
              <span className="text-sm font-semibold tracking-wide">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              Contact <span className="text-[#E8621A]">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Ready to start your solar journey? Get in touch with Australia&apos;s trusted solar experts
              for a free consultation and personalized energy solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards (Overlapping Hero) */}
      <section className="relative z-20 -mt-20 lg:-mt-24 mb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Call Now */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#E8621A] flex items-center justify-center mb-6 text-white shadow-lg shadow-[#E8621A]/30">
                <PhoneIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-4">Call Now</h3>
              <a href="tel:1300090984" className="block text-2xl md:text-3xl font-bold text-[#1565C0] hover:text-[#0d47a1] transition-colors mb-2">
                1300 09 09 84
              </a>
              <a href="tel:+61422786100" className="block text-lg font-bold text-[#1565C0] hover:text-[#0d47a1] transition-colors mb-4">
                +61 422 786 100
              </a>
              <p className="text-sm text-gray-500">Mon-Fri: 8am-6pm | Sat: 9am-4pm</p>
            </motion.div>

            {/* Email Us */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#FFC107] flex items-center justify-center mb-6 text-[#1a2332] shadow-lg shadow-[#FFC107]/30">
                <EnvelopeIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-4">Email Us</h3>
              <a href="mailto:info@supersolarenergy.com.au" className="block text-[#1565C0] font-semibold hover:text-[#0d47a1] transition-colors mb-4">
                info@supersolarenergy.com.au
              </a>
              <p className="text-sm text-gray-500">24/7 email support</p>
            </motion.div>

            {/* Visit Us */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#1565C0] flex items-center justify-center mb-6 text-white shadow-lg shadow-[#1565C0]/30">
                <MapPinIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-2">17 Short Street<br />Hampton East, Vic. 3188</p>
              <p className="text-sm text-gray-500 mt-2">Free on-site consultations<br />Australia-wide</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Quote Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a2332] mb-6">
                Get Your <span className="text-[#1565C0]">Free Quote</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Join thousands of satisfied customers who have made the switch to clean, renewable energy. Our team of certified solar experts is ready to design the perfect system for your needs.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#1a2332] mb-2 flex items-center gap-2">
                    <span className="text-[#E8621A]">2000+</span> Happy Customers
                  </h3>
                  <p className="text-gray-600 pl-1">Trusted by families and businesses across Australia</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a2332] mb-2 flex items-center gap-2">
                    <span className="text-[#E8621A]">10+</span> Years Experience
                  </h3>
                  <p className="text-gray-600 pl-1">CEC-accredited professionals with proven expertise</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a2332] mb-2 flex items-center gap-2">
                    <span className="text-[#E8621A]">10-Year</span> Warranty
                  </h3>
                  <p className="text-gray-600 pl-1">Comprehensive workmanship warranty included</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a2332] mb-2">Government Rebates</h3>
                  <p className="text-gray-600 pl-1">We handle all paperwork for maximum savings</p>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-[#1a2332] mb-4">Free Consultation Includes:</h3>
                  <ul className="space-y-3">
                    {['Complete energy audit', 'Custom system design', 'Accurate pricing quote', 'Rebate calculations'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <CheckIcon className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/5 border border-gray-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#1a2332] mb-2">Get Started Today</h3>
                <p className="text-gray-500">Fill out the form below and we&apos;ll contact you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClasses} placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="04XX XXX XXX" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClasses} placeholder="your.email@example.com" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="suburb" className="block text-sm font-semibold text-gray-700 mb-1.5">Address *</label>
                    <input ref={suburbInputRef} type="text" id="suburb" name="suburb" required value={formData.suburb} onChange={handleChange} className={inputClasses} placeholder="Start typing address..." />
                  </div>
                  <div>
                    <label htmlFor="serviceInterest" className="block text-sm font-semibold text-gray-700 mb-1.5">Service Interest</label>
                    <select id="serviceInterest" name="serviceInterest" value={formData.serviceInterest} onChange={handleChange} className={selectClasses}>
                      <option value="">Select a service</option>
                      <option value="solar-panels">Solar Panels</option>
                      <option value="solar-batteries">Solar Batteries</option>
                      <option value="heat-pumps">Hot Water Heat Pump</option>
                      <option value="hvac-systems">HVAC Systems</option>
                      <option value="maintenance">Servicing & Maintenance</option>
                      <option value="general-inquiry">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`${inputClasses} resize-none`} placeholder="Tell us about your energy needs..." />
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-[#1565C0] text-white py-4 font-bold text-lg hover:bg-[#0d47a1] transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-4 shadow-lg shadow-[#1565C0]/30">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : 'Get My Free Quote'}
                </button>

                {submitMessage && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`p-4 rounded-xl text-sm text-center font-medium ${submitMessage.includes('Thank you') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {submitMessage}
                  </motion.div>
                )}

                <div className="text-center mt-6">
                  <p className="text-gray-500 text-sm mb-2">Or call us now for immediate assistance</p>
                  <a href="tel:1300090984" className="inline-flex items-center gap-2 text-xl font-bold text-[#E8621A] hover:text-[#c74f12]">
                    <PhoneIcon className="w-5 h-5" /> 1300 09 09 84
                  </a>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a2332] mb-4">Find Our Location</h2>
            <p className="text-lg text-gray-600">Visit our office or schedule a free on-site consultation anywhere in Australia.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl shadow-xl shadow-black/5 border border-gray-100">
            {/* Left - Office Info */}
            <div className="bg-[#1a2332] p-10 md:p-14 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#E8621A] flex items-center justify-center">
                  <MapPinIcon className="w-5 h-5 text-white" />
                </span>
                Our Office
              </h3>
              
              <div className="space-y-8">
                <div>
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Address</p>
                  <p className="text-xl">17 Short Street<br />Hampton East, Vic. 3188</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Business Hours</p>
                  <p className="text-lg">Mon-Fri: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM<br />Sunday: Closed</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Phone</p>
                  <a href="tel:1300090984" className="text-xl text-[#E8621A] hover:text-[#FF8A4C] transition-colors">1300 09 09 84</a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Email</p>
                  <a href="mailto:info@supersolarenergy.com.au" className="text-lg text-[#E8621A] hover:text-[#FF8A4C] transition-colors">info@supersolarenergy.com.au</a>
                </div>
              </div>
            </div>

            {/* Right - Google Map */}
            <div className="h-[400px] lg:h-auto min-h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509372!2d144.9987!3d-37.8198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzExLjMiUyAxNDTCsDU5JzU1LjMiRQ!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Super Solar Energy Location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-[#F0F5FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">Service Areas Across Australia</h2>
          <p className="text-lg text-gray-600 mb-12">We provide solar and energy solutions to customers across all major Australian cities and regions.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Canberra', 'Gold Coast', 'Newcastle', 'Wollongong', 'Geelong', 'Hobart', 'Darwin'].map((city) => (
              <div
                key={city}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 font-semibold text-gray-800 hover:border-[#1565C0] hover:text-[#1565C0] transition-colors cursor-default"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Get answers to the most common questions about solar energy and our services.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-colors ${openFaqIndex === index ? 'border-[#1565C0] bg-blue-50/30' : 'border-gray-200 bg-white hover:border-gray-300'}`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <h3 className={`font-bold text-lg pr-8 ${openFaqIndex === index ? 'text-[#1565C0]' : 'text-[#1a2332]'}`}>
                    {faq.question}
                  </h3>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openFaqIndex === index ? 'bg-[#1565C0] text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a2332] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/solarroof.jpg')] opacity-10 mix-blend-overlay object-cover" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Saving with Solar?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Don&apos;t wait - government rebates are available now. Contact us today for your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-full bg-[#E8621A] text-white px-8 py-4 text-lg font-bold hover:bg-[#c74f12] transition-all shadow-lg shadow-[#E8621A]/20"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:1300090984"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 hover:border-white text-white px-8 py-4 text-lg font-bold transition-all bg-white/5 hover:bg-white/10"
            >
              <PhoneIcon className="w-5 h-5" />
              Call 1300 09 09 84
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}