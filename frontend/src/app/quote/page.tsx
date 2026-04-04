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

const CheckCircleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CurrencyDollarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const GlobeAltIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
)

const HomeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
)

const ShieldCheckIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const WrenchIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
)

const BoltIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

export default function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    property_type: '',
    roof_type: '',
    storey_type: '',
    meter_phase: '',
    energy_usage: '',
    budget_range: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handlePlaceSelect = (place: { formatted_address?: string }) => {
    if (place.formatted_address) {
      setFormData({
        ...formData,
        address: place.formatted_address
      })
    }
  }

  const addressInputRef = useGooglePlaces(handlePlaceSelect)

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
      const response = await fetch('https://3grnljxs6h.execute-api.ap-southeast-2.amazonaws.com/prod/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          property_type: formData.property_type,
          roof_type: formData.roof_type,
          storey_type: formData.storey_type,
          meter_phase: formData.meter_phase,
          energy_usage: formData.energy_usage,
          budget_range: formData.budget_range,
          message: formData.message
        })
      })

      if (response.ok) {
        trackEvent('generate_lead', 'Quote', formData.property_type || 'Unknown')
        setSubmitMessage('Thank you for your quote request! Our team will contact you within 24 hours.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          property_type: '',
          roof_type: '',
          storey_type: '',
          meter_phase: '',
          energy_usage: '',
          budget_range: '',
          message: ''
        })
      } else {
        const errorData = await response.json().catch(() => ({}))
        setSubmitMessage(errorData.error || 'Sorry, there was an error submitting your request. Please try again.')
      }
    } catch {
      setSubmitMessage('Sorry, there was an error submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = 'w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#E8621A] focus:ring-2 focus:ring-[#E8621A]/20 transition-all text-sm'
  const selectClasses = `${inputClasses} appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%20stroke='%236b7280'%20stroke-width='2'%3E%3Cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M19.5%208.25l-7.5%207.5-7.5-7.5'/%3E%3C/svg%3E")] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-[#F0F5FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-[#E8621A] uppercase tracking-wider mb-3">Free No-Obligation Quote</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1a2332] mb-4">
              Get Your Free Solar Quote
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Fill in your details below and we&apos;ll prepare a custom solar proposal for your property.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - The Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit}>
                {/* Fieldset 1: Your Property */}
                <div className="mb-10">
                  <h3 className="text-lg font-bold text-[#1a2332] border-b-2 border-[#E8621A] pb-2 inline-block mb-6">
                    Your Property
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Property Address *
                      </label>
                      <input
                        ref={addressInputRef}
                        type="text"
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Start typing your property address..."
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="property_type" className="block text-sm font-medium text-gray-700 mb-1">
                          Property Type *
                        </label>
                        <select
                          id="property_type"
                          name="property_type"
                          required
                          value={formData.property_type}
                          onChange={handleChange}
                          className={selectClasses}
                        >
                          <option value="">Select property type</option>
                          <option value="house">House</option>
                          <option value="apartment">Apartment</option>
                          <option value="townhouse">Townhouse</option>
                          <option value="commercial">Commercial</option>
                          <option value="industrial">Industrial</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="roof_type" className="block text-sm font-medium text-gray-700 mb-1">
                          Roof Type *
                        </label>
                        <select
                          id="roof_type"
                          name="roof_type"
                          required
                          value={formData.roof_type}
                          onChange={handleChange}
                          className={selectClasses}
                        >
                          <option value="">Select roof type</option>
                          <option value="tile">Tile</option>
                          <option value="metal">Metal</option>
                          <option value="flat">Flat</option>
                          <option value="slate">Slate</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="storey_type" className="block text-sm font-medium text-gray-700 mb-1">
                          Storey Type *
                        </label>
                        <select
                          id="storey_type"
                          name="storey_type"
                          required
                          value={formData.storey_type}
                          onChange={handleChange}
                          className={selectClasses}
                        >
                          <option value="">Select storey type</option>
                          <option value="single">Single Storey</option>
                          <option value="double">Double Storey</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="meter_phase" className="block text-sm font-medium text-gray-700 mb-1">
                          Meter Phase *
                        </label>
                        <select
                          id="meter_phase"
                          name="meter_phase"
                          required
                          value={formData.meter_phase}
                          onChange={handleChange}
                          className={selectClasses}
                        >
                          <option value="">Select meter phase</option>
                          <option value="single">Single Phase</option>
                          <option value="three">Three Phase</option>
                          <option value="unknown">Not Sure</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fieldset 2: Your Energy */}
                <div className="mb-10">
                  <h3 className="text-lg font-bold text-[#1a2332] border-b-2 border-[#E8621A] pb-2 inline-block mb-6">
                    Your Energy
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="energy_usage" className="block text-sm font-medium text-gray-700 mb-1">
                        Average Quarterly Bill
                      </label>
                      <select
                        id="energy_usage"
                        name="energy_usage"
                        value={formData.energy_usage}
                        onChange={handleChange}
                        className={selectClasses}
                      >
                        <option value="">Select your bill range</option>
                        <option value="under-300">Under $300</option>
                        <option value="300-600">$300 - $600</option>
                        <option value="600-900">$600 - $900</option>
                        <option value="900-1200">$900 - $1,200</option>
                        <option value="over-1200">Over $1,200</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget_range" className="block text-sm font-medium text-gray-700 mb-1">
                        Budget Range
                      </label>
                      <select
                        id="budget_range"
                        name="budget_range"
                        value={formData.budget_range}
                        onChange={handleChange}
                        className={selectClasses}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-15k">$10,000 - $15,000</option>
                        <option value="15k-20k">$15,000 - $20,000</option>
                        <option value="over-20k">Over $20,000</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Fieldset 3: Your Details */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[#1a2332] border-b-2 border-[#E8621A] pb-2 inline-block mb-6">
                    Your Details
                  </h3>
                  <div className="space-y-4">
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
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Information (optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputClasses} resize-none`}
                        placeholder="Any additional information about your requirements..."
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-[#E8621A] text-white py-4 font-bold text-lg hover:bg-[#c74f12] transition-all mt-8 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting Request...
                    </>
                  ) : (
                    'Get My Free Quote'
                  )}
                </button>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-4 rounded-lg text-sm ${
                      submitMessage.includes('Thank you')
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Right Column - Sticky Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="sticky top-24 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg text-[#1a2332] mb-4">What You&apos;ll Get</h3>
                <ul className="space-y-3">
                  {[
                    'Free property assessment',
                    'Custom system design',
                    'Detailed cost breakdown',
                    'Government rebate calculations',
                    'ROI and payback analysis'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-200 my-4" />

                <p className="text-sm text-gray-600 mb-1">Need help?</p>
                <a href="tel:1300090984" className="font-bold text-[#E8621A] hover:text-[#c74f12] transition-colors flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4" />
                  Call 1300 09 09 84
                </a>

                <div className="flex gap-2 flex-wrap mt-4">
                  <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                    <ShieldCheckIcon className="w-3.5 h-3.5" />
                    CEC Accredited
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                    <WrenchIcon className="w-3.5 h-3.5" />
                    10-Year Warranty
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                    <BoltIcon className="w-3.5 h-3.5" />
                    5,000+ Installations
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-[#F0F5FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: CurrencyDollarIcon,
                title: 'Significant Savings',
                description: 'Reduce your electricity bills by 70-90%'
              },
              {
                icon: GlobeAltIcon,
                title: 'Environmental Impact',
                description: 'Reduce your carbon footprint significantly'
              },
              {
                icon: HomeIcon,
                title: 'Property Value',
                description: 'Increase property value by up to $6,000 per kW'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 border-l-4 border-l-[#E8621A] shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8621A]/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-[#E8621A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a2332] mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
