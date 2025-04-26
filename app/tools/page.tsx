"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { getAllTools, getAllCategories, type Tool } from "@/lib/tools-data"
import ToolCard from "@/components/tool-card"
import AnimationWrapper from "@/components/animation-wrapper"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X } from "lucide-react"
import * as LucideIcons from "lucide-react"

export default function ToolsPage() {
  const allTools = getAllTools()
  const categories = getAllCategories()
  const [tools, setTools] = useState<Tool[]>(allTools)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedPricing, setSelectedPricing] = useState<string | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filter tools based on search term, category, and pricing
  useEffect(() => {
    let filteredTools = allTools

    if (searchTerm) {
      filteredTools = filteredTools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedCategory) {
      filteredTools = filteredTools.filter((tool) => tool.category === selectedCategory)
    }

    if (selectedPricing) {
      filteredTools = filteredTools.filter((tool) => tool.pricing === selectedPricing)
    }

    setTools(filteredTools)
  }, [searchTerm, selectedCategory, selectedPricing, allTools])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory(null)
    setSelectedPricing(null)
  }

  // Get the appropriate icon component
  const getIconComponent = (iconName: string) => {
    const Icon = (LucideIcons as Record<string, React.ComponentType<any>>)[iconName] || LucideIcons.Box
    return <Icon className="h-5 w-5" />
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimationWrapper>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">AI Tools Directory</h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Discover the best AI tools for solopreneurs to automate, scale, and thrive in your business.
            </p>
          </div>
        </AnimationWrapper>

        {/* Search and Filter Section */}
        <AnimationWrapper delay={200}>
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-gray h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search for tools..."
                  className="pl-10 bg-white border-gray-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                className="md:w-auto flex items-center gap-2 border-gray-200"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter className="h-4 w-4" />
                Filters
                {(selectedCategory || selectedPricing) && (
                  <Badge className="bg-electric-blue text-white ml-1">
                    {(selectedCategory ? 1 : 0) + (selectedPricing ? 1 : 0)}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Active filters */}
            {(selectedCategory || selectedPricing) && (
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="text-sm text-text-secondary flex items-center">Active filters:</div>
                {selectedCategory && (
                  <Badge variant="outline" className="bg-gray-50 flex items-center gap-1">
                    {categories.find((c) => c.id === selectedCategory)?.name}
                    <button onClick={() => setSelectedCategory(null)}>
                      <X className="h-3 w-3 ml-1" />
                    </button>
                  </Badge>
                )}
                {selectedPricing && (
                  <Badge variant="outline" className="bg-gray-50 flex items-center gap-1">
                    {selectedPricing}
                    <button onClick={() => setSelectedPricing(null)}>
                      <X className="h-3 w-3 ml-1" />
                    </button>
                  </Badge>
                )}
                <button
                  onClick={clearFilters}
                  className="text-sm text-electric-blue hover:text-electric-blue/80 font-medium"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Filter options */}
            {isFilterOpen && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-charcoal mb-3">Categories</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-left text-sm ${
                          selectedCategory === category.id
                            ? "bg-electric-blue/10 text-electric-blue"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        {getIconComponent(category.icon)}
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-charcoal mb-3">Pricing</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {["Free", "Freemium", "Paid", "Free Trial"].map((price) => (
                      <button
                        key={price}
                        onClick={() => setSelectedPricing(selectedPricing === price ? null : price)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-left text-sm ${
                          selectedPricing === price ? "bg-electric-blue/10 text-electric-blue" : "hover:bg-gray-50"
                        }`}
                      >
                        {price}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </AnimationWrapper>

        {/* Categories Section */}
        {!selectedCategory && !searchTerm && !selectedPricing && (
          <AnimationWrapper delay={300}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-charcoal mb-6">Browse by Category</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="bg-white border border-gray-100 rounded-xl p-6 text-left hover:shadow-md transition-shadow flex items-start gap-4"
                  >
                    <div className="bg-electric-blue/10 p-3 rounded-full">{getIconComponent(category.icon)}</div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-1">{category.name}</h3>
                      <p className="text-text-secondary text-sm">{category.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </AnimationWrapper>
        )}

        {/* Tools Grid */}
        <div>
          {selectedCategory && (
            <AnimationWrapper>
              <h2 className="text-2xl font-bold text-charcoal mb-6">
                {categories.find((c) => c.id === selectedCategory)?.name} Tools
              </h2>
            </AnimationWrapper>
          )}

          {tools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </div>
          ) : (
            <AnimationWrapper>
              <div className="text-center py-16">
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-gray" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">No tools found</h3>
                <p className="text-text-secondary mb-6">We couldn't find any tools matching your search criteria.</p>
                <Button onClick={clearFilters} className="bg-electric-blue hover:bg-electric-blue/90 text-white">
                  Clear Filters
                </Button>
              </div>
            </AnimationWrapper>
          )}
        </div>
      </div>
    </div>
  )
}
