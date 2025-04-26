import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimationWrapper from "@/components/animation-wrapper"
import NewsletterSignup from "@/components/newsletter-signup"
import { Briefcase, Award, Users, BookOpen, Mail, Twitter, Linkedin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">About MomentumAI</h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Helping solopreneurs navigate the AI landscape and build more efficient businesses
            </p>
          </div>
        </AnimationWrapper>

        {/* Founder Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <AnimationWrapper>
                <div className="relative rounded-xl overflow-hidden aspect-square">
                  <Image
                    src="/modern-innovator.png"
                    alt="Alex Mitchell - Founder of MomentumAI"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </AnimationWrapper>
            </div>

            <div className="md:col-span-7">
              <AnimationWrapper delay={200}>
                <h2 className="text-3xl font-bold text-charcoal mb-4">Alex Mitchell</h2>
                <p className="text-electric-blue font-medium mb-4">Founder & AI Consultant</p>
                <p className="text-text-secondary mb-6">
                  After spending 10+ years in tech startups and seeing how AI was transforming businesses, I decided to
                  focus on helping solopreneurs harness these powerful tools. I've personally tested hundreds of AI
                  solutions and built systems that save me 20+ hours per week.
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-text-secondary hover:text-electric-blue transition-colors"
                  >
                    <Twitter className="h-5 w-5 mr-2" />
                    <span>@alexmitchell</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-text-secondary hover:text-electric-blue transition-colors"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    <span>Alex Mitchell</span>
                  </a>
                  <a
                    href="mailto:alex@blackheartlabs.com"
                    className="flex items-center text-text-secondary hover:text-electric-blue transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    <span>alex@blackheartlabs.com</span>
                  </a>
                </div>

                <Link href="/subscribe">
                  <Button className="bg-electric-blue hover:bg-electric-blue/90 text-white hover-scale">
                    Work With Me
                  </Button>
                </Link>
              </AnimationWrapper>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <AnimationWrapper>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-charcoal mb-6">Our Mission</h2>
              <p className="text-text-secondary text-lg mb-0">
                At MomentumAI, we believe that AI should be accessible to everyone, not just big corporations. Our
                mission is to demystify AI tools and help solopreneurs implement practical solutions that save time,
                increase revenue, and create sustainable businesses without requiring technical expertise or large
                teams.
              </p>
            </div>
          </div>
        </AnimationWrapper>

        {/* What We Do Section */}
        <div className="mb-20">
          <AnimationWrapper>
            <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">What We Do</h2>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimationWrapper delay={100}>
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-electric-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <BookOpen className="h-7 w-7 text-electric-blue" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">AI Tool Reviews</h3>
                <p className="text-text-secondary">
                  Honest, in-depth reviews of AI tools specifically evaluated for solopreneur use cases and ROI.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-electric-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Briefcase className="h-7 w-7 text-electric-blue" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Implementation Guides</h3>
                <p className="text-text-secondary">
                  Step-by-step tutorials on integrating AI tools into your existing workflows for maximum efficiency.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-electric-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-electric-blue" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Community</h3>
                <p className="text-text-secondary">
                  Access to a network of like-minded solopreneurs sharing AI strategies and supporting each other.
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>

        {/* Values Section */}
        <AnimationWrapper>
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">Our Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-highlight-yellow/20 p-2 rounded-full">
                    <Award className="h-6 w-6 text-highlight-yellow" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Practical Over Theoretical</h3>
                  <p className="text-text-secondary">
                    We focus on real-world applications that deliver immediate value, not theoretical AI capabilities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-highlight-yellow/20 p-2 rounded-full">
                    <Award className="h-6 w-6 text-highlight-yellow" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Transparency</h3>
                  <p className="text-text-secondary">
                    We're honest about tool limitations and always disclose affiliate relationships.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-highlight-yellow/20 p-2 rounded-full">
                    <Award className="h-6 w-6 text-highlight-yellow" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">ROI-Focused</h3>
                  <p className="text-text-secondary">
                    Every recommendation we make is evaluated based on its return on investment for solopreneurs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-highlight-yellow/20 p-2 rounded-full">
                    <Award className="h-6 w-6 text-highlight-yellow" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Accessibility</h3>
                  <p className="text-text-secondary">
                    We believe AI should be accessible to everyone, regardless of technical background.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimationWrapper>

        {/* Story Section */}
        <AnimationWrapper>
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-charcoal mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-text-secondary">
              <p>
                MomentumAI started in 2023 when I realized that most AI content was either too technical for the
                average business owner or focused on enterprise solutions that weren't practical for solopreneurs.
              </p>
              <p>
                After automating much of my own business using AI tools and seeing my revenue increase by 40% while
                working fewer hours, I started sharing my processes with other solopreneurs. The response was
                overwhelming—people wanted more guidance on implementing AI in their businesses.
              </p>
              <p>
                What began as a simple newsletter has grown into a comprehensive resource hub with tool reviews,
                implementation guides, and a thriving community of forward-thinking solopreneurs.
              </p>
              <p>
                Today, MomentumAI helps thousands of solopreneurs work smarter, not harder, by leveraging the right
                AI tools for their specific needs.
              </p>
            </div>
          </div>
        </AnimationWrapper>
      </div>

      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  )
}
