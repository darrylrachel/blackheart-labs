import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimationWrapper from "@/components/animation-wrapper"

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6">
        <AnimationWrapper>
          <div className="bg-gray-50 border border-gray-100 max-w-4xl mx-auto text-center p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-electric-blue/5 z-[-1]"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Why Elevatr Labs?</h2>
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              I'm a solopreneur simplifying AI adoption. Discover the tools that help you work less and earn more.
            </p>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-electric-blue text-electric-blue bg-white hover:bg-electric-blue/90 hover-scale"
              >
                Learn More About Me
              </Button>
            </Link>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-electric-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-electric-blue/5 rounded-full blur-3xl"></div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  )
}

export default AboutSection
