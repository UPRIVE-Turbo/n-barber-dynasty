'use client'

import { useEffect, useRef } from 'react'

export function HeroBackground({ src, alt }: { src: string; alt: string }) {
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const offset = window.scrollY * 0.25
        img.style.transform = `translate3d(0, ${offset}px, 0) scale(1.1)`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className="h-full w-full scale-110 object-cover opacity-40 will-change-transform"
    />
  )
}
