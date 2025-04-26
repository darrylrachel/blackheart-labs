import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import { getFeaturedPosts } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"
import NewsletterSignup from "@/components/newsletter-signup"
import AnimationWrapper from "@/components/animation-wrapper"

export default function Page() {
  const featuredPosts = getFeaturedPosts()

  return (
    <>
      <HeroSection />
      <AboutSection />

      <section id="featured-posts" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 text-center">Featured Posts</h2>
            <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
              Discover the latest insights, tools, and strategies to leverage AI in your business
            </p>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          <AnimationWrapper delay={600}>
            <div className="text-center mt-12">
              <a
                href="/blog"
                className="text-electric-blue hover:text-electric-blue/80 font-medium inline-flex items-center transition-colors"
              >
                View all articles
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      <NewsletterSignup />
    </>
  )
}
