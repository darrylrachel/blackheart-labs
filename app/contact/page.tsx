"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AnimationWrapper from "@/components/animation-wrapper"
import { Mail, MessageSquare, MapPin, Phone, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Contact Us</h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Have questions about our services or want to work with us? We'd love to hear from you.
            </p>
          </div>
        </AnimationWrapper>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimationWrapper>
              <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-charcoal mb-6">Send Us a Message</h2>

                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-charcoal mb-2">Message Sent!</h3>
                    <p className="text-text-secondary">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button
                      className="mt-4 bg-electric-blue hover:bg-electric-blue/90 text-white"
                      onClick={() => setIsSuccess(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="bg-white border-gray-200"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="bg-white border-gray-200"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="bg-white border-gray-200"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        className="bg-white border-gray-200"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="bg-electric-blue hover:bg-electric-blue/90 text-white w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </AnimationWrapper>

            {/* Contact Information */}
            <AnimationWrapper delay={200}>
              <div className="space-y-8">
                <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-charcoal mb-6">Contact Information</h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-electric-blue/10 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-electric-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal mb-1">Email</h3>
                        <p className="text-text-secondary mb-1">General Inquiries:</p>
                        <a href="mailto:hello@ElevatrLabs.com" className="text-electric-blue hover:underline">
                          hello@ElevatrLabs.com
                        </a>
                        <p className="text-text-secondary mt-2 mb-1">Support:</p>
                        <a href="mailto:support@ElevatrLabs.com" className="text-electric-blue hover:underline">
                          support@ElevatrLabs.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-electric-blue/10 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-electric-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal mb-1">Phone</h3>
                        <p className="text-text-secondary mb-1">Main Office:</p>
                        <a href="tel:+14155551234" className="text-electric-blue hover:underline">
                          +1 (415) 555-1234
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-electric-blue/10 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-electric-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal mb-1">Address</h3>
                        <p className="text-text-secondary">
                          Elevatr Labs
                          <br />
                          123 AI Avenue
                          <br />
                          San Francisco, CA 94105
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-electric-blue/10 p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-electric-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal mb-1">Business Hours</h3>
                        <p className="text-text-secondary">
                          Monday - Friday: 9:00 AM - 5:00 PM PST
                          <br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-charcoal mb-6">Connect With Us</h2>

                  <div className="flex space-x-4">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-electric-blue/10 text-muted-gray hover:text-electric-blue p-3 rounded-full transition-colors"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-electric-blue/10 text-muted-gray hover:text-electric-blue p-3 rounded-full transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-electric-blue/10 text-muted-gray hover:text-electric-blue p-3 rounded-full transition-colors"
                      aria-label="YouTube"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-electric-blue/10 text-muted-gray hover:text-electric-blue p-3 rounded-full transition-colors"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>

          {/* Map Section */}
          <AnimationWrapper delay={400}>
            <div className="mt-12">
              <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-charcoal mb-6">Find Us</h2>
                <div className="aspect-[16/9] w-full bg-gray-100 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968870204486!2d-122.39568492392031!3d37.78895791202199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807abad77c99%3A0x3947ba9fa9dbb89d!2sSan%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1682530244227!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Elevatr Labs Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </AnimationWrapper>

          {/* FAQ Section */}
          <AnimationWrapper delay={600}>
            <div className="mt-12">
              <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-2">What's the best way to contact you?</h3>
                    <p className="text-text-secondary">
                      For general inquiries, the contact form on this page is the best option. For urgent matters,
                      please email us directly at support@ElevatrLabs.com.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-2">How quickly do you respond to inquiries?</h3>
                    <p className="text-text-secondary">
                      We aim to respond to all inquiries within 24-48 business hours. Premium members receive priority
                      support with faster response times.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-2">Do you offer in-person consultations?</h3>
                    <p className="text-text-secondary">
                      Yes, we offer in-person consultations for clients in the San Francisco Bay Area. For clients
                      outside this area, we provide virtual consultations via Zoom or Google Meet.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-2">
                      Can I request a specific topic for your blog?
                    </h3>
                    <p className="text-text-secondary">
                      We welcome topic suggestions from our community. Please use the contact form and select "Content
                      Suggestion" as the subject.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </div>
  )
}
