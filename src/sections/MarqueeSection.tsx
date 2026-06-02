import { useEffect, useRef, useState } from 'react'
import FadeIn from '../components/FadeIn'

const images = [
  '/portfolio/6月7日-封面.jpg',
  '/portfolio/spring@2x.jpg',
  '/portfolio/toolkit-1.jpg',
  '/portfolio/toolkit-2.jpg',
  '/portfolio/winter@2x.jpg',
  '/portfolio/安诊.jpg',
  '/portfolio/澳门-海报-1.jpg',
  '/portfolio/澳门-海报-2.jpg',
  '/portfolio/启动页.jpg',
  '/portfolio/首页.jpg',
  '/portfolio/平面设计.jpg',
  '/portfolio/3D建模.jpg',
  '/portfolio/3D-1.jpg',
  '/portfolio/3D-2.jpg',
  '/portfolio/9.jpg',
  '/portfolio/15bcd2415cce91468d91aacc477dbbce.jpg',
]

const row1 = images.slice(0, 8)
const row2 = images.slice(8, 16)

// Triple for seamless scrolling
const row1Tripled = [...row1, ...row1, ...row1]
const row2Tripled = [...row2, ...row2, ...row2]

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  const tileW = 300
  const tileH = 420
  const gap = 16 // gap-4 = 1rem = 16px
  const rowWidth = row1.length * (tileW + gap)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const sectionTop = sectionRef.current.offsetTop
      const scrollY = window.scrollY
      const val = (scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(Math.max(0, val))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Wrap offset within one row width for seamless looping
  const wrapped = offset % rowWidth

  return (
    <section id="visual-exploration" ref={sectionRef} className="pt-24 sm:pt-32 md:pt-40 pb-20 overflow-hidden">
      <FadeIn delay={0} y={30}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}>
          Visual Exploration
        </h2>
      </FadeIn>

      {/* Row 1 - moves RIGHT */}
      <div
        className="flex gap-4 will-change-transform mb-4"
        style={{ transform: `translateX(${-rowWidth + wrapped}px)` }}
      >
        {row1Tripled.map((src, i) => (
          <img
            key={`r1-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-2xl object-cover flex-shrink-0"
            style={{ width: tileW, height: tileH }}
          />
        ))}
      </div>

      {/* Row 2 - moves LEFT */}
      <div
        className="flex gap-4 will-change-transform"
        style={{ transform: `translateX(${-wrapped}px)` }}
      >
        {row2Tripled.map((src, i) => (
          <img
            key={`r2-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-2xl object-cover flex-shrink-0"
            style={{ width: tileW, height: tileH }}
          />
        ))}
      </div>
    </section>
  )
}
