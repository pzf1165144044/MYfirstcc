import { motion } from 'framer-motion'

const blobs = [
  { color: '#89D5E8', size: '70vw', top: '-25%', left: '-25%', duration: 15 },
  { color: '#E8B4D0', size: '65vw', top: '35%', left: '35%', duration: 18 },
  { color: '#C8E3A0', size: '60vw', top: '-20%', left: '45%', duration: 16 },
  { color: '#F5E9A0', size: '68vw', top: '15%', left: '0%', duration: 20 },
]

export default function GradientBg() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient fill */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #E8F4F8 0%, #F5E6F0 30%, #EEF5E0 60%, #FEF9E7 100%)',
        }}
      />
      {/* Blurred blobs */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            background: blob.color,
            filter: 'blur(80px)',
            opacity: 0.5,
            top: blob.top,
            left: blob.left,
          }}
          animate={{
            x: ['-25%', '30%', '-15%', '20%', '-25%'],
            y: ['-15%', '20%', '-30%', '15%', '-15%'],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
