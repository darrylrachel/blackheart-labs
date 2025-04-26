"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimationWrapperProps {
  children: React.ReactNode
  className?: string
  type?: "fade-in" | "slide-up"
  delay?: number
  threshold?: number
}

const AnimationWrapper = ({
  children,
  className,
  type = "fade-in",
  delay = 0,
  threshold = 0.1,
}: AnimationWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsInView(true)
          }, delay)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, threshold])

  return (
    <div ref={ref} className={cn(`animate-${type}`, isInView && "in-view", className)}>
      {children}
    </div>
  )
}

export default AnimationWrapper
