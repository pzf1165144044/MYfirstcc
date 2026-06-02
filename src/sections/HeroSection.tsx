import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AppIcons from '../components/AppIcons'
import CardStack from '../components/CardStack'
import ContactButton from '../components/ContactButton'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Design', href: '#context' },
  { label: 'Projects', href: '#projects' },
  { label: 'Visual Exploration', href: '#visual-exploration' },
]

export default function HeroSection() {
  const [cardsExpanded, setCardsExpanded] = useState(false)

  return (
    <section id="hero" className="h-screen flex flex-col relative">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 pb-3 bg-white/30 backdrop-blur-md">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#1A1A2E] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.3rem] hover:opacity-60 transition-opacity duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* App Icons — fade when expanded */}
      <AnimatePresence>
        {!cardsExpanded && (
          <motion.div
            className="absolute left-4 sm:left-6 md:left-10 top-[32%] sm:top-[35%] md:top-[36%] z-20"
            initial={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <AppIcons />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Heading */}
      <div className="overflow-hidden mt-20 sm:mt-24 md:mt-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[9vw] sm:text-[10vw] md:text-[11vw] lg:text-[12vw]">
            Hi, i&apos;m zf peng
          </h1>
        </motion.div>
      </div>

      {/* Left text — higher up, bolder, fades when expanded */}
      <AnimatePresence>
        {!cardsExpanded && (
          <motion.div
            className="absolute left-6 md:left-10 bottom-[15%] sm:bottom-[18%] md:bottom-[20%] z-20"
            initial={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -150 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              className="text-[#2D3047] font-medium leading-relaxed max-w-[240px] sm:max-w-[320px] md:max-w-[440px]"
              style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.25rem)' }}
            >
              彭臻辅 · 南京农业大学 · 工业设计
              <br />
              主修课程：交互设计、计算机辅助工业设计、视觉传达设计
              <br />
              性格开朗外向，热爱运动，学习能力、沟通能力强
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Button — right side, fades out to right when cards expand */}
      <AnimatePresence>
        {!cardsExpanded && (
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 z-20 cursor-pointer"
            style={{ right: '6%' }}
            initial={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <ContactButton />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card Stack — pointer-events-none so clicks pass through to elements below */}
      <div className="absolute top-1/2 -translate-y-1/2 z-30 w-full pointer-events-none">
        <CardStack
          expanded={cardsExpanded}
          onToggle={() => setCardsExpanded((v) => !v)}
        />
      </div>
    </section>
  )
}
