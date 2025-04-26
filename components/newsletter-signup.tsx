"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import AnimationWrapper from "@/components/animation-wrapper"
import { Send } from "lucide-react"

const NewsletterSignup = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="newsletter" className="py-20 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimationWrapper>
          <div className="bg-white border border-gray-100 shadow-sm max-w-4xl mx-auto rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Join 100+ Solopreneurs Getting Smarter with AI
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Actionable tips, AI guides, and tools straight to your inbox. No fluff, just valuable insights.
              </p>
            </div>

            {isSuccess ? (
              <div className="bg-electric-blue/20 border border-electric-blue/30 rounded-lg p-4 text-center">
                <p className="text-soft-white">
                  Thanks for subscribing! Check your email to confirm your subscription.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white border-gray-200 text-charcoal placeholder:text-text-secondary focus:border-electric-blue"
                  />
                  <Button
                    type="submit"
                    className="bg-highlight-yellow hover:bg-highlight-yellow/90 text-charcoal font-medium hover-scale"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Subscribing..."
                    ) : (
                      <>
                        Subscribe <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
                {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
                <p className="text-muted-gray text-xs mt-3 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-electric-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-highlight-yellow/5 rounded-full blur-3xl"></div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  )
}

export default NewsletterSignup
