import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Star } from "lucide-react"
import type { Tool } from "@/lib/tools-data"
import AnimationWrapper from "@/components/animation-wrapper"

interface ToolCardProps {
  tool: Tool
  index?: number
}

const ToolCard = ({ tool, index = 0 }: ToolCardProps) => {
  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case "Free":
        return "bg-green-100 text-green-800"
      case "Freemium":
        return "bg-blue-100 text-blue-800"
      case "Paid":
        return "bg-purple-100 text-purple-800"
      case "Free Trial":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <AnimationWrapper delay={index * 100}>
      <Card className="bg-white border border-gray-100 shadow-sm h-full flex flex-col overflow-hidden hover:shadow-md transition-all duration-300">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
              <Image
                src={
                  tool.image && tool.image.trim() !== ""
                    ? tool.image
                    : `/placeholder.svg?height=100&width=100&query=${encodeURIComponent(tool.name)}`
                }
                alt={tool.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <Badge className={`${getPricingColor(tool.pricing)} font-medium`}>{tool.pricing}</Badge>
          </div>

          <h3 className="text-xl font-bold text-charcoal mb-2">{tool.name}</h3>
          <p className="text-text-secondary mb-4 line-clamp-3">{tool.description}</p>

          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(tool.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-text-secondary">{tool.rating.toFixed(1)}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {tool.features.slice(0, 3).map((feature, i) => (
              <Badge key={i} variant="outline" className="bg-gray-50">
                {feature}
              </Badge>
            ))}
            {tool.features.length > 3 && (
              <Badge variant="outline" className="bg-gray-50">
                +{tool.features.length - 3} more
              </Badge>
            )}
          </div>

          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-electric-blue hover:text-electric-blue/80 font-medium text-sm"
          >
            Visit Website <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </div>
      </Card>
    </AnimationWrapper>
  )
}

export default ToolCard
