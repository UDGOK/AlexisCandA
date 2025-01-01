'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'
import { MotionWrapper } from './motion-wrapper'

interface ScrollSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  reverse?: boolean
}

export function ScrollSection({ children, className = '', delay = 0, reverse = false }: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? ['-20%', '20%'] : ['20%', '-20%']
  )
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  )

  return (
    <section
      ref={ref}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      <MotionWrapper
        style={{ y, opacity }}
        transition={{ delay }}
        className="w-full"
      >
        {children}
      </MotionWrapper>
    </section>
  )
}

