"use client"

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: 'enterprise-genai'
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      // In a real implementation, you would send this data to your API
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        projectType: 'enterprise-genai'
      })
    } catch (error) {
      setSubmitError('There was an error submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8" id="contact">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Schedule a Technical Consultation
      </h2>
      
      {submitSuccess ? (
        <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
          <p className="text-green-800 dark:text-green-200">
            Thank you for your message! I'll get back to you within 24 hours to discuss your project.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="enterprise-genai">Enterprise GenAI Implementation</option>
              <option value="multi-agent">Multi-Agent System Development</option>
              <option value="ai-process">AI Process Automation</option>
              <option value="technical-leadership">Technical Leadership & Strategy</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Tell me about your project goals and challenges..."
            />
          </div>
          
          {submitError && (
            <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
              <p className="text-red-800 dark:text-red-200">{submitError}</p>
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
            } transition`}
          >
            {isSubmitting ? 'Sending...' : 'Schedule Consultation'}
          </button>
        </form>
      )}
    </div>
  )
}
