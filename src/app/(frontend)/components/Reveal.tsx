'use client'

import { useEffect, useRef } from 'react'
import type { ReactNode, ElementType, CSSProperties } from 'react'

export function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
}: {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
