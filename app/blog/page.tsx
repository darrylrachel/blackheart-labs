import { getAllPosts } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"
import AnimationWrapper from "@/components/animation-wrapper"
import NewsletterSignup from "@/components/newsletter-signup"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Blog</h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Discover the latest insights, tools, and strategies to leverage AI in your solopreneur journey
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>

      <div className="mt-24">
        <NewsletterSignup />
      </div>
    </div>
  )
}
