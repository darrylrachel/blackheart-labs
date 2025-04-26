import type { BlogPost } from "@/lib/blog-data"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import AnimationWrapper from "@/components/animation-wrapper"
import { Clock, ArrowRight } from "lucide-react"

interface BlogCardProps {
  post: BlogPost
  index?: number
}

const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  return (
    <AnimationWrapper delay={index * 150}>
      <Card className="bg-white border border-gray-100 shadow-sm h-full flex flex-col overflow-hidden group hover:shadow-md transition-all duration-300">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={post.coverImage || "/placeholder.svg?height=400&width=600&query=futuristic%20ai%20technology"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3 bg-electric-blue/90 text-soft-white text-xs font-medium py-1 px-2 rounded">
            {post.category}
          </div>
        </div>

        <div className="flex-grow p-6">
          <div className="flex items-center text-muted-gray text-sm mb-3">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {post.readTime}
            </span>
          </div>

          <h3 className="text-xl font-bold text-charcoal mb-3 line-clamp-2 group-hover:text-electric-blue transition-colors">
            {post.title}
          </h3>

          <p className="text-text-secondary line-clamp-3 mb-4">{post.excerpt}</p>
        </div>

        <div className="px-6 pb-6 mt-auto">
          <Link href={`/blog/${post.slug}`} className="w-full">
            <Button variant="ghost" className="w-full text-electric-blue hover:bg-electric-blue/90 group">
              <span>Read More</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </Card>
    </AnimationWrapper>
  )
}

export default BlogCard
