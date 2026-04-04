'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
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

const BoltIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const ClockIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

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
      const response = await fetch('https://3grnljxs6h.execute-api.ap-southeast-2.amazonaws.com/prod/api/contact', {
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

  const inputClasses = 'w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#E8621A] focus:ring-2 focus:ring-[#E8621A]/20 transition-all text-sm'
  const selectClasses = `${inputClasses} appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%20stroke='%236b7280'%20stroke-width='2'%3E%3Cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M19.5%208.25l-7.5%207.5-7.5-7.5'/%3E%3C/svg%3E")] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-[#E8621A] uppercase tracking-wider mb-3">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1a2332] mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ready to start your solar journey? Get in touch today for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 bg-[#F0F5FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Column - Contact Info Cards */}
            <motion.div
              className="lg:col-span-2 space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Call Us */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8621A]/10 flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-5 h-5 text-[#E8621A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a2332] mb-2">Call Us</h3>
                    <a href="tel:1300090984" className="block text-[#E8621A] font-semibold hover:text-[#c74f12] transition-colors">
                      1300 09 09 84
                    </a>
                    <a href="tel:+61422786100" className="block text-[#E8621A] font-semibold hover:text-[#c74f12] transition-colors">
                      +61 422 786 100
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri 8am-6pm, Sat 9am-4pm</p>
                  </div>
                </div>
              </div>

              {/* Email Us */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8621A]/10 flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-5 h-5 text-[#E8621A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a2332] mb-2">Email Us</h3>
                    <a href="mailto:info@supersolarenergy.com.au" className="text-[#E8621A] font-semibold hover:text-[#c74f12] transition-colors">
                      info@supersolarenergy.com.au
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Visit Us */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8621A]/10 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-5 h-5 text-[#E8621A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a2332] mb-2">Visit Us</h3>
                    <p className="text-gray-700">130 Bridge Road, Richmond VIC 3121</p>
                    <p className="text-sm text-gray-500 mt-1">Free on-site consultations Australia-wide</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8621A]/10 flex items-center justify-center flex-shrink-0">
                    <BoltIcon className="w-5 h-5 text-[#E8621A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a2332] mb-2">Quick Stats</h3>
                    <p className="text-gray-700">2,000+ Happy Customers</p>
                    <p className="text-gray-700">10+ Years Experience</p>
                    <p className="text-gray-700">4.9&#9733; Google Rating</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-[#1a2332] mb-6">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="04XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="suburb" className="block text-sm font-medium text-gray-700 mb-1">
                        Address *
                      </label>
                      <input
                        ref={suburbInputRef}
                        type="text"
                        id="suburb"
                        name="suburb"
                        required
                        value={formData.suburb}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Start typing your address..."
                      />
                    </div>
                    <div>
                      <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Interest
                      </label>
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className={selectClasses}
                      >
                        <option value="">Select a service</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="solar-batteries">Solar Batteries</option>
                        <option value="solar-panels">Solar Panels</option>
                        <option value="heat-pumps">Heat Pump</option>
                        <option value="hvac-systems">HVAC</option>
                        <option value="maintenance">Servicing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell us about your energy needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-[#E8621A] text-white py-3.5 font-bold hover:bg-[#c74f12] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  {submitMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg text-sm ${
                        submitMessage.includes('Thank you')
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                    >
                      {submitMessage}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left - Office Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm h-full">
                <h3 className="text-2xl font-bold text-[#1a2332] mb-6">Our Office</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-[#E8621A] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1a2332]">Address</p>
                      <p className="text-gray-600">130 Bridge Road, Richmond VIC 3121</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ClockIcon className="w-5 h-5 text-[#E8621A] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1a2332]">Hours</p>
                      <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <PhoneIcon className="w-5 h-5 text-[#E8621A] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1a2332]">Phone</p>
                      <a href="tel:1300090984" className="text-[#E8621A] hover:text-[#c74f12] transition-colors">1300 09 09 84</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <EnvelopeIcon className="w-5 h-5 text-[#E8621A] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1a2332]">Email</p>
                      <a href="mailto:info@supersolarenergy.com.au" className="text-[#E8621A] hover:text-[#c74f12] transition-colors">info@supersolarenergy.com.au</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-lg h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509372!2d144.9987!3d-37.8198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzExLjMiUyAxNDTCsDU5JzU1LjMiRQ!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Super Solar Energy Location - 130 Bridge Road Richmond"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 bg-[#F0F5FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-[#1a2332] text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            We Service All Major Cities
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Canberra', 'Gold Coast', 'Newcastle', 'Wollongong', 'Geelong', 'Hobart', 'Darwin'].map((city) => (
              <span
                key={city}
                className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-[#E8621A] hover:text-[#E8621A] transition-all cursor-default"
              >
                {city}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
              Ready to Go Solar?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Take the first step towards clean energy and lower bills. Contact us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8621A] text-white px-8 py-4 text-lg font-bold hover:bg-[#c74f12] transition-all"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:1300090984"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1a2332] text-[#1a2332] px-8 py-4 text-lg font-bold hover:bg-[#1a2332] hover:text-white transition-all"
              >
                <PhoneIcon className="w-5 h-5" />
                Call 1300 09 09 84
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
