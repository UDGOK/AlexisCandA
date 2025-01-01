'use client'

import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ScrollSection } from '@/components/ScrollSection'
import { MotionWrapper } from '@/components/MotionWrapper'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])

  return (
    <main className="relative bg-black">
      {/* Hero Section */}
      <div ref={heroRef} className="h-screen relative flex items-center justify-center overflow-hidden">
        <MotionWrapper
          motionTag="div"
          style={{ scale }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-final-frame-desktop-mx6eVyo7lDACZgGcgOSRf5tPxbihbR.webp"
            alt="Hand holding concrete sample"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </MotionWrapper>
        <MotionWrapper
          motionTag="h1"
          style={{ opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[180px] font-extralight tracking-[-0.02em] text-center z-10 max-w-7xl mx-auto px-6 leading-[0.9] md:leading-[0.85]"
        >
          Building Excellence
        </MotionWrapper>
      </div>

      {/* Feature Section 1 */}
      <ScrollSection>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-light tracking-tight">
                Premium Concrete Solutions
              </h2>
              <p className="text-xl font-light text-white/70">
                Our commitment to quality begins with selecting the finest materials and implementing cutting-edge techniques.
              </p>
            </div>
            <MotionWrapper
              motionTag="div"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Concrete pouring"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </MotionWrapper>
          </div>
        </div>
      </ScrollSection>

      {/* Feature Section 2 */}
      <ScrollSection>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <MotionWrapper
              motionTag="div"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg md:order-last"
            >
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Asphalt paving"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </MotionWrapper>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-light tracking-tight">
                Expert Asphalt Services
              </h2>
              <p className="text-xl font-light text-white/70">
                Delivering durable and smooth surfaces for roads, parking lots, and more with precision and care.
              </p>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Full-width Image Section */}
      <ScrollSection className="my-32">
        <MotionWrapper
          motionTag="div"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[80vh] w-full"
        >
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Construction site panorama"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl text-center px-6">
              <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
                Transforming Visions into Reality
              </h2>
              <p className="text-xl font-light text-white/70">
                With decades of experience and cutting-edge technology, we bring your construction projects to life.
              </p>
            </div>
          </div>
        </MotionWrapper>
      </ScrollSection>

      {/* Feature Grid */}
      <ScrollSection>
        <div className="container mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <MotionWrapper
                key={feature.title}
                motionTag="div"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] overflow-hidden rounded-lg group"
              >
                <Image
                  src={`/placeholder.svg?height=450&width=600&text=${encodeURIComponent(feature.title)}`}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-light tracking-tight mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-light text-white/70">
                    {feature.description}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* CTA Section */}
      <ScrollSection>
        <div className="container mx-auto px-6 text-center mb-32">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
            Ready to start your project?
          </h2>
          <MotionWrapper
            motionTag="a"
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-light tracking-tight"
          >
            Get in touch
          </MotionWrapper>
        </div>
      </ScrollSection>
    </main>
  )
}

const features = [
  {
    title: 'Commercial Projects',
    description: 'Comprehensive solutions for businesses and organizations.',
  },
  {
    title: 'Infrastructure',
    description: 'Building the backbone of modern communities.',
  },
  {
    title: 'Residential Services',
    description: 'Quality concrete and asphalt work for homes.',
  },
]

