import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

function Char({
  char,
  scrollYProgress,
  start,
  end,
}: {
  char: string
  scrollYProgress: MotionValue<number>
  start: number
  end: number
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])
  return (
    <motion.span style={{ opacity }} className="inline">
      {char === ' ' ? ' ' : char}
    </motion.span>
  )
}

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <Char
          key={i}
          char={char}
          scrollYProgress={scrollYProgress}
          start={i / chars.length}
          end={(i + 1) / chars.length}
        />
      ))}
    </p>
  )
}
