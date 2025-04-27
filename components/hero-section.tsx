"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimationWrapper from "@/components/animation-wrapper"
import SubscribeModal from "@/components/subscribe-modal"

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <AnimationWrapper type="slide-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-charcoal mb-6 leading-tight">
            Work Smarter, Not Harder <span className="text-electric-blue">with AI</span>
          </h1>
        </AnimationWrapper>

        <AnimationWrapper type="slide-up" delay={200}>
          <p className="text-xl md:text-2xl text-text-secondary mb-10 max-w-3xl mx-auto">
            Discover the best AI tools for solopreneurs to automate, scale, and thrive.
          </p>
        </AnimationWrapper>

        <AnimationWrapper type="fade-in" delay={500}>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/tools">
              <Button
                className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white text-lg px-8 py-6 h-auto hover-scale shadow-lg shadow-electric-blue/20"
                size="lg"
              >
                Explore Tools
              </Button>
            </Link>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-highlight-yellow hover:bg-highlight-yellow/90 text-charcoal text-lg px-8 py-6 h-auto hover-scale shadow-lg shadow-highlight-yellow/20"
              size="lg"
            >
              Subscribe
            </Button>
          </div>
        </AnimationWrapper>

        {/* Background gradient effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] -z-10">
          <div className="absolute inset-0 bg-electric-blue/5 rounded-full blur-[100px] animate-pulse"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-electric-blue/10 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-highlight-yellow/5 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Subscribe Modal */}
      <SubscribeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default HeroSection
