export interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  date: string
  coverImage: string
  content: string
  readTime: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 AI Tools That Will Transform Your Content Creation Process",
    excerpt: "Discover the best AI writing assistants that can help you create better content in half the time.",
    slug: "ai-tools-transform-content-creation",
    date: "April 24, 2025",
    coverImage: "/ai-content-nexus.png",
    readTime: "6 min read",
    category: "Content Creation",
    content: `
# 10 AI Tools That Will Transform Your Content Creation Process

If you're a solopreneur trying to maintain a consistent content schedule, you know how much time content creation can consume. From brainstorming ideas to writing and editing, it's easy to get overwhelmed. That's where AI tools come in.

## 1. Copy.ai

Copy.ai is an AI writing assistant that helps you generate marketing copy, blog posts, and social media content. The tool uses GPT-3 to create original, human-like text.

## 2. Jasper

Jasper (formerly Jarvis) is designed specifically for content creators who need long-form content. It helps you write blog posts, stories, and marketing copy faster.

## 3. Grammarly

Grammarly goes beyond basic spell checking to help you improve your writing style, tone, and clarity.

## 4. Surfer SEO

Surfer SEO analyzes top-performing content in your niche and provides recommendations for optimizing your own content for search engines.

## 5. Hemingway Editor

The Hemingway Editor helps you write clear, concise content by highlighting complex sentences, passive voice, and adverbs.

## 6. Frase.io

Frase.io helps you research, write, and optimize content all in one place. It provides topic research and suggests what questions to answer in your content.

## 7. Quillbot

Quillbot is a paraphrasing tool that helps you rewrite content in different styles and tones.

## 8. Canva

While not strictly an AI tool, Canva's AI-powered features help you create stunning visual content quickly and easily.

## 9. Descript

Descript is an all-in-one audio and video editing tool that uses AI to transcribe and edit content as easily as editing a document.

## 10. Wordtune

Wordtune helps you rewrite sentences to improve clarity, tone, and flow.

By incorporating these AI tools into your content creation process, you'll save time, improve quality, and maintain a consistent publishing schedule—all essential for solopreneurs looking to scale their businesses.
    `,
  },
  {
    id: "2",
    title: "How to Automate Your Email Marketing with AI",
    excerpt: "Learn how to set up intelligent email sequences that engage subscribers and convert leads on autopilot.",
    slug: "automate-email-marketing-with-ai",
    date: "April 20, 2025",
    coverImage: "/connected-future-marketing.png",
    readTime: "8 min read",
    category: "Marketing",
    content: `
# How to Automate Your Email Marketing with AI

Email marketing remains one of the most effective channels for solopreneurs to connect with their audience and drive sales. But managing email campaigns can be time-consuming. Fortunately, AI can help automate much of the process.

## Why Automate Your Email Marketing?

- Save time on repetitive tasks
- Improve open rates and click-through rates with optimized send times
- Personalize content at scale
- Test and optimize campaigns automatically

## Step 1: Choose an AI-Powered Email Platform

Several email marketing platforms now offer AI capabilities:

- **ConvertKit** - Great for solopreneurs and creators
- **ActiveCampaign** - Powerful automation and personalization
- **Mailchimp** - User-friendly with AI-powered content suggestions

## Step 2: Segment Your Audience

Use AI to analyze subscriber behavior and segment your audience based on:

- Purchase history
- Email engagement
- Website activity
- Content preferences

## Step 3: Create Personalized Email Sequences

Develop automated email sequences for different segments using AI-powered tools:

- Welcome sequences for new subscribers
- Abandoned cart follow-ups
- Re-engagement campaigns for inactive subscribers
- Post-purchase sequences

## Step 4: Optimize Send Times

Use AI to determine the optimal time to send emails to each subscriber based on when they're most likely to open and engage.

## Step 5: Craft Compelling Subject Lines

AI tools can help you generate and test subject lines to improve open rates. Look for platforms that offer subject line scoring and optimization.

## Step 6: Analyze and Improve

Use AI analytics to continuously monitor and improve your email campaigns:

- A/B test different elements
- Track conversion rates
- Identify trends and patterns

By implementing these AI-powered strategies, you can create an email marketing system that works for you 24/7, nurturing leads and converting customers while you focus on other aspects of your business.
    `,
  },
  {
    id: "3",
    title: "5 AI-Powered Project Management Tools for Solopreneurs",
    excerpt:
      "Discover how these smart project management solutions can help you organize tasks, track time, and meet deadlines.",
    slug: "ai-project-management-tools",
    date: "April 15, 2025",
    coverImage: "/holographic-project-overview.png",
    readTime: "5 min read",
    category: "Productivity",
    content: `
# 5 AI-Powered Project Management Tools for Solopreneurs

As a solopreneur, juggling multiple projects and wearing different hats can quickly become overwhelming. AI-powered project management tools can help you stay organized, prioritize tasks, and meet deadlines without hiring a team.

## 1. ClickUp

**Key AI Features:**
- AI writing assistant for task descriptions and documentation
- Automated time tracking and estimation
- Smart task prioritization
- Automated workflow suggestions

ClickUp's AI capabilities help you organize your work more efficiently by suggesting task priorities, automating routine processes, and even helping with writing project documentation.

## 2. Motion

**Key AI Features:**
- Automatic schedule planning
- Smart task prioritization
- Time blocking calendar
- Meeting scheduling optimization

Motion uses AI to automatically plan your day, adapting in real-time as priorities change or new tasks are added.

## 3. Notion AI

**Key AI Features:**
- AI writing and editing
- Summarization of long documents
- Action item extraction
- Content generation for various project needs

Notion AI helps you draft project plans, summarize meeting notes, and create content directly within your project management system.

## 4. Trello with Butler Automation

**Key AI Features:**
- Automated workflow creation
- Rule-based task management
- Scheduled commands
- Card and board automation

Trello's Butler power-up uses AI to automate repetitive actions, creating a more efficient workflow for solopreneurs.

## 5. Asana with Work Assistant

**Key AI Features:**
- Task creation from natural language
- Smart task organization
- Project template recommendations
- Workflow optimization suggestions

Asana's AI features help you quickly create and organize tasks based on your project needs.

## How to Choose the Right Tool

When selecting an AI project management tool as a solopreneur, consider:

1. Your typical workflow and project types
2. Integration with other tools you use
3. Learning curve and ease of use
4. Cost vs. features needed
5. Mobile accessibility

By implementing one of these AI-powered project management tools, you can spend less time organizing your work and more time actually doing it—essential for solopreneurs looking to scale efficiently.
    `,
  },
]

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.slice(0, 3)
}

export function getAllPosts(): BlogPost[] {
  return blogPosts
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
