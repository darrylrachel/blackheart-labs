export interface Tool {
  id: string
  name: string
  description: string
  category: string
  pricing: "Free" | "Freemium" | "Paid" | "Free Trial"
  image: string
  rating: number
  url: string
  features: string[]
}

export type Category = {
  id: string
  name: string
  description: string
  icon: string
}

export const categories: Category[] = [
  {
    id: "content-creation",
    name: "Content Creation",
    description: "Tools for creating blog posts, social media content, and more",
    icon: "pen-tool",
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Tools for email marketing, SEO, and advertising",
    icon: "megaphone",
  },
  {
    id: "productivity",
    name: "Productivity",
    description: "Tools for task management, time tracking, and automation",
    icon: "clock",
  },
  {
    id: "design",
    name: "Design",
    description: "Tools for creating graphics, videos, and other visual content",
    icon: "palette",
  },
  {
    id: "research",
    name: "Research",
    description: "Tools for market research, competitor analysis, and data collection",
    icon: "search",
  },
  {
    id: "customer-support",
    name: "Customer Support",
    description: "Tools for chatbots, help desks, and customer service",
    icon: "message-circle",
  },
]

export const tools: Tool[] = [
  {
    id: "1",
    name: "Copy.ai",
    description:
      "AI-powered copywriting tool that helps you create marketing copy, blog posts, and social media content.",
    category: "content-creation",
    pricing: "Freemium",
    image: "/tools/copy-ai.png",
    rating: 4.7,
    url: "https://www.copy.ai",
    features: ["Blog posts", "Social media", "Email copy", "Ad copy", "Product descriptions"],
  },
  {
    id: "2",
    name: "Jasper",
    description:
      "AI content platform that helps teams create original, on-brand content for marketing, sales, and more.",
    category: "content-creation",
    pricing: "Paid",
    image: "/tools/jasper.png",
    rating: 4.8,
    url: "https://www.jasper.ai",
    features: ["Long-form content", "SEO optimization", "Team collaboration", "Brand voice", "Templates"],
  },
  {
    id: "3",
    name: "Surfer SEO",
    description: "Content optimization tool that helps you create SEO-friendly content that ranks on Google.",
    category: "marketing",
    pricing: "Paid",
    image: "/tools/surfer-seo.png",
    rating: 4.6,
    url: "https://surferseo.com",
    features: ["Content editor", "SERP analyzer", "Keyword research", "Content planner", "AI writing"],
  },
  {
    id: "4",
    name: "Midjourney",
    description: "AI art generator that creates stunning images from text descriptions.",
    category: "design",
    pricing: "Paid",
    image: "/tools/midjourney.png",
    rating: 4.9,
    url: "https://www.midjourney.com",
    features: ["Image generation", "Art styles", "Variations", "High resolution", "Commercial use"],
  },
  {
    id: "5",
    name: "Notion AI",
    description: "AI-powered writing assistant integrated into Notion to help you write, edit, and summarize content.",
    category: "productivity",
    pricing: "Paid",
    image: "/tools/notion-ai.png",
    rating: 4.5,
    url: "https://www.notion.so/product/ai",
    features: ["Writing assistant", "Summarization", "Translation", "Brainstorming", "Editing"],
  },
  {
    id: "6",
    name: "Zapier",
    description: "Automation tool that connects your apps and automates workflows to save time and reduce errors.",
    category: "productivity",
    pricing: "Freemium",
    image: "/tools/zapier.png",
    rating: 4.7,
    url: "https://zapier.com",
    features: ["App integration", "Workflow automation", "Templates", "Multi-step zaps", "Filters"],
  },
  {
    id: "7",
    name: "Frase",
    description: "AI-powered SEO content optimization tool that helps you research, write, and optimize content.",
    category: "content-creation",
    pricing: "Paid",
    image: "/tools/frase.png",
    rating: 4.6,
    url: "https://www.frase.io",
    features: ["Content briefs", "SERP analysis", "AI writing", "Content optimization", "Question research"],
  },
  {
    id: "8",
    name: "Synthesia",
    description: "AI video generation platform that creates professional videos from text in minutes.",
    category: "design",
    pricing: "Paid",
    image: "/tools/synthesia.png",
    rating: 4.5,
    url: "https://www.synthesia.io",
    features: ["AI avatars", "Text to video", "Multiple languages", "Custom backgrounds", "Templates"],
  },
  {
    id: "9",
    name: "Grammarly",
    description: "AI writing assistant that helps you write clear, mistake-free content with real-time suggestions.",
    category: "content-creation",
    pricing: "Freemium",
    image: "/tools/grammarly.png",
    rating: 4.8,
    url: "https://www.grammarly.com",
    features: [
      "Grammar checking",
      "Tone detection",
      "Clarity suggestions",
      "Plagiarism detection",
      "Browser extension",
    ],
  },
  {
    id: "10",
    name: "Semrush",
    description:
      "All-in-one marketing toolkit for SEO, content marketing, competitor research, PPC and social media marketing.",
    category: "marketing",
    pricing: "Paid",
    image: "/tools/semrush.png",
    rating: 4.7,
    url: "https://www.semrush.com",
    features: ["Keyword research", "Site audit", "Rank tracking", "Competitor analysis", "Content marketing"],
  },
  {
    id: "11",
    name: "Calendly",
    description: "Scheduling automation platform that eliminates the back-and-forth emails to find meeting times.",
    category: "productivity",
    pricing: "Freemium",
    image: "/tools/calendly.png",
    rating: 4.8,
    url: "https://calendly.com",
    features: ["Automated scheduling", "Calendar integration", "Reminders", "Time zone detection", "Team scheduling"],
  },
  {
    id: "12",
    name: "ChatGPT",
    description: "Conversational AI model that can answer questions, generate content, and assist with various tasks.",
    category: "content-creation",
    pricing: "Freemium",
    image: "/tools/chatgpt.png",
    rating: 4.9,
    url: "https://chat.openai.com",
    features: ["Text generation", "Question answering", "Content creation", "Brainstorming", "Code assistance"],
  },
  {
    id: "13",
    name: "Intercom",
    description:
      "Customer messaging platform that helps you build relationships with customers through chat and support.",
    category: "customer-support",
    pricing: "Paid",
    image: "/tools/intercom.png",
    rating: 4.6,
    url: "https://www.intercom.com",
    features: ["Live chat", "Chatbots", "Help center", "Customer data", "Team inbox"],
  },
  {
    id: "14",
    name: "Ahrefs",
    description: "SEO tool that helps you grow your search traffic, research competitors, and monitor your niche.",
    category: "marketing",
    pricing: "Paid",
    image: "/tools/ahrefs.png",
    rating: 4.8,
    url: "https://ahrefs.com",
    features: ["Keyword research", "Backlink analysis", "Site audit", "Rank tracker", "Content explorer"],
  },
  {
    id: "15",
    name: "Canva",
    description:
      "Graphic design platform that allows you to create social media graphics, presentations, posters, and more.",
    category: "design",
    pricing: "Freemium",
    image: "/tools/canva.png",
    rating: 4.9,
    url: "https://www.canva.com",
    features: ["Templates", "Photo editing", "Brand kit", "Team collaboration", "Content planner"],
  },
  {
    id: "16",
    name: "Typeform",
    description: "Interactive form and survey builder that helps you collect data in a conversational way.",
    category: "research",
    pricing: "Freemium",
    image: "/tools/typeform.png",
    rating: 4.7,
    url: "https://www.typeform.com",
    features: ["Form builder", "Survey logic", "Data analysis", "Integration", "Templates"],
  },
  {
    id: "17",
    name: "Krisp",
    description: "AI-powered noise cancellation app that removes background noise during calls.",
    category: "productivity",
    pricing: "Freemium",
    image: "/tools/krisp.png",
    rating: 4.6,
    url: "https://krisp.ai",
    features: ["Noise cancellation", "Echo removal", "Voice enhancement", "Recording", "Meeting insights"],
  },
  {
    id: "18",
    name: "Clearscope",
    description: "Content optimization platform that helps you create content that ranks on search engines.",
    category: "marketing",
    pricing: "Paid",
    image: "/tools/clearscope.png",
    rating: 4.7,
    url: "https://www.clearscope.io",
    features: ["Content optimization", "Keyword research", "Competitor analysis", "Content grading", "Reports"],
  },
]

export function getAllTools(): Tool[] {
  return tools
}

export function getToolsByCategory(categoryId: string): Tool[] {
  return tools.filter((tool) => tool.category === categoryId)
}

export function getToolById(id: string): Tool | undefined {
  return tools.find((tool) => tool.id === id)
}

export function getAllCategories(): Category[] {
  return categories
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((category) => category.id === id)
}
