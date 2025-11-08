'use client'

import { useEffect, useRef } from 'react'

interface HeroProps {
  title: string
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  visual?: React.ReactNode
}

export default function Hero({ title, subtitle, primaryCta, secondaryCta, visual }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="py-20 lg:py-32 opacity-0 transform translate-y-5 transition-all duration-600 ease-out-cubic"
    >
      <div className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-heading-1 font-bold text-primary-text mb-6">
              {title}
            </h1>
            <p className="text-body text-primary-secondary mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={primaryCta.href}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-accent text-white rounded-2xl font-medium hover:scale-105 hover:shadow-cta transition-all duration-200"
              >
                {primaryCta.label}
              </a>
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center px-6 py-3 border border-primary-accent text-primary-accent rounded-2xl font-medium hover:bg-primary-accent-muted transition-all duration-200"
              >
                {secondaryCta.label}
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            {visual}
          </div>
        </div>
      </div>
    </section>
  )
}