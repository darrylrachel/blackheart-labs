import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Mail, MessageSquare, Clock, Zap, Shield, Users } from "lucide-react"
import AnimationWrapper from "@/components/animation-wrapper"

export default function SubscribePage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Join MomentumAI</h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Get exclusive access to premium AI insights, tools, and strategies to transform your solopreneur journey
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Subscription Options */}
          <AnimationWrapper>
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-6">Choose Your Membership</h2>

              {/* Free Tier */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-charcoal">Free Newsletter</h3>
                    <p className="text-electric-blue font-medium">$0 / month</p>
                  </div>
                  <span className="bg-gray-100 text-text-secondary text-xs font-medium py-1 px-2 rounded">BASIC</span>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">Weekly AI tool roundup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">Monthly implementation tips</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">Access to public blog content</span>
                  </li>
                </ul>

                <form className="flex flex-col sm:flex-row gap-3">
                  <Input type="email" placeholder="Enter your email" className="bg-white border-gray-200" required />
                  <Button type="submit" className="bg-electric-blue hover:bg-electric-blue/90 text-white">
                    Subscribe Free
                  </Button>
                </form>
              </div>

              {/* Premium Tier */}
              <div className="bg-white border-2 border-electric-blue rounded-xl p-6 mb-6 relative shadow-md hover:shadow-lg transition-shadow">
                <div className="absolute -top-3 right-6 bg-highlight-yellow text-charcoal text-xs font-bold py-1 px-3 rounded-full">
                  MOST POPULAR
                </div>

                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-charcoal">Premium Membership</h3>
                    <p className="text-electric-blue font-medium">$29 / month</p>
                  </div>
                  <span className="bg-electric-blue/10 text-electric-blue text-xs font-medium py-1 px-2 rounded">
                    PREMIUM
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">Everything in Free tier</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">Exclusive in-depth tool reviews</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">Step-by-step implementation guides</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">Private community access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">Monthly Q&A sessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">AI prompt templates library</span>
                  </li>
                </ul>

                <Button className="w-full bg-highlight-yellow hover:bg-highlight-yellow/90 text-charcoal font-medium hover-scale">
                  Join Premium
                </Button>
              </div>

              {/* Enterprise Tier */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-charcoal">Consulting</h3>
                    <p className="text-electric-blue font-medium">Custom Pricing</p>
                  </div>
                  <span className="bg-charcoal text-white text-xs font-medium py-1 px-2 rounded">ENTERPRISE</span>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">Everything in Premium tier</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">1-on-1 AI strategy sessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">Custom AI implementation plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">Direct access via Slack</span>
                  </li>
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-electric-blue bg-white text-electric-blue hover:bg-electric-blue/90"
                >
                  Contact for Details
                </Button>
              </div>
            </div>
          </AnimationWrapper>

          {/* Right Column - Benefits & Contact Form */}
          <div>
            {/* Benefits */}
            <AnimationWrapper delay={200}>
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-charcoal mb-6">Why Subscribe?</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-electric-blue/10 p-2 rounded-full">
                        <Zap className="h-5 w-5 text-electric-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-1">Stay Ahead</h3>
                      <p className="text-text-secondary text-sm">
                        Be the first to know about new AI tools that can transform your business
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-electric-blue/10 p-2 rounded-full">
                        <Clock className="h-5 w-5 text-electric-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-1">Save Time</h3>
                      <p className="text-text-secondary text-sm">
                        Skip the trial and error with our tested implementation guides
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-electric-blue/10 p-2 rounded-full">
                        <Shield className="h-5 w-5 text-electric-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-1">Trusted Reviews</h3>
                      <p className="text-text-secondary text-sm">
                        Honest evaluations from a solopreneur perspective, not vendor marketing
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-electric-blue/10 p-2 rounded-full">
                        <Users className="h-5 w-5 text-electric-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-1">Community</h3>
                      <p className="text-text-secondary text-sm">
                        Connect with other solopreneurs implementing AI in their businesses
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            {/* Contact Form */}
            <AnimationWrapper delay={400}>
              <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-charcoal mb-6">Have Questions?</h2>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" className="bg-white border-gray-200" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" className="bg-white border-gray-200" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-1">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What's this about?" className="bg-white border-gray-200" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={4}
                      className="bg-white border-gray-200"
                    />
                  </div>

                  <Button type="submit" className="bg-electric-blue hover:bg-electric-blue/90 text-white">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-text-secondary text-sm flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-electric-blue" />
                    Or email us directly at{" "}
                    <a href="mailto:hello@blackheartlabs.com" className="text-electric-blue ml-1">
                      hello@blackheartlabs.com
                    </a>
                  </p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>

        {/* Testimonials */}
        <AnimationWrapper delay={600}>
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">What Our Members Say</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex text-highlight-yellow">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-text-secondary mb-4">
                  "The AI tool recommendations have saved me countless hours of research. I implemented the email
                  marketing automation guide and saw a 32% increase in open rates within two weeks."
                </p>

                <div className="flex items-center">
                  <div className="mr-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-charcoal font-bold">
                      JD
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Jamie Davis</h4>
                    <p className="text-text-secondary text-sm">Digital Marketing Consultant</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex text-highlight-yellow">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-text-secondary mb-4">
                  "The premium membership has been worth every penny. I've automated my content creation process using
                  the AI workflows Alex recommended, and I'm now producing twice the content in half the time."
                </p>

                <div className="flex items-center">
                  <div className="mr-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-charcoal font-bold">
                      SR
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Sarah Rodriguez</h4>
                    <p className="text-text-secondary text-sm">Content Creator</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex text-highlight-yellow">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-text-secondary mb-4">
                  "As someone who was skeptical about AI, the practical approach at MomentumAI changed my
                  perspective. The community is incredibly supportive, and I've found tools that actually make sense for
                  my coaching business."
                </p>

                <div className="flex items-center">
                  <div className="mr-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-charcoal font-bold">
                      MT
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Michael Thompson</h4>
                    <p className="text-text-secondary text-sm">Business Coach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimationWrapper>

        {/* FAQ Section */}
        <AnimationWrapper delay={800}>
          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-charcoal mb-2">How often will I receive content?</h3>
                <p className="text-text-secondary">
                  Free subscribers receive weekly tool roundups and monthly tips. Premium members get additional
                  in-depth reviews, implementation guides, and exclusive community content throughout the month.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-charcoal mb-2">Can I cancel my subscription anytime?</h3>
                <p className="text-text-secondary">
                  Yes, you can cancel your premium subscription at any time. Your access will continue until the end of
                  your current billing period.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-charcoal mb-2">Do you offer refunds?</h3>
                <p className="text-text-secondary">
                  We offer a 14-day money-back guarantee for new premium subscribers. If you're not satisfied with the
                  content, contact us within 14 days of your initial payment for a full refund.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-charcoal mb-2">What if I need help implementing the tools?</h3>
                <p className="text-text-secondary">
                  Premium members have access to our community forum where you can ask questions. For more personalized
                  assistance, our consulting tier provides direct 1-on-1 support.
                </p>
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </div>
  )
}
