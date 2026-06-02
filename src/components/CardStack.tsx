import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface CardData {
  label?: string
  sub?: string
  image?: string
  imagePos?: 'center' | 'top'
  backText?: string
  backShowIcons?: boolean
}

const cards: CardData[] = [
  {
    image: '/portfolio/1/1.jpg',
    imagePos: 'center',
    backText:
      '南京农业大学大三工业设计专业在读，综测绩点排名前20%，曾任院级学生会成员。\n主修课程包含交互设计，计算机辅助工业设计，视觉传达设计，产品开发设计，具备扎实的基础学科知识与设计素养。\n热爱运动，学习能力与团队沟通协作能力强，具备团队协作经验。',
  },
  {
    label: '掌握技能',
    backShowIcons: true,
    backText:
      '熟练使用PS、AI等平面设计软件，Creo、Rhino、Blender等三维建模软件，Figma、Sketch等UI设计软件。\n擅长使用AI工具，能够熟练使用Vibe Coding工具如Trae、Cursor、Claude Code等。',
  },
  {
    label: '荣誉/证书/奖项',
    backText:
      '校"三好学生"奖学金\n英语四、六级证书，计算机三级证书，PTC Creo中级证书\n澳门当代设计奖铜、银奖，"华夏奖"等国内设计大赛奖项若干',
  },
  {
    image: '/portfolio/4/4.jpg',
    imagePos: 'top',
    label: '实习经历',
    backText:
      '实习单位：中共湖南省委宣传部出版产品质量监督检测中心\n实习部门：综合事务部\n工作内容：行政专员助理，负责数据处理，活动管理，交流协商；实验室研究员助理，负责纸张性能检测工作',
  },
]

interface CardStackProps {
  expanded: boolean
  onToggle: () => void
}

// ---- compact icons data (same as AppIcons) ----
const iconRow1 = [
  { name: 'Figma', file: 'figma.png' },
  { name: 'Photoshop', file: 'PS.png' },
  { name: 'Illustrator', file: 'AI.png' },
  { name: 'After Effects', file: 'AE.png' },
  { name: 'Blender', file: 'blender.png' },
  { name: 'Rhino', file: 'rihno.png' },
  { name: 'Creo', file: 'creo.png' },
  { name: 'Keyshot', file: 'keyshot.png' },
]
const iconRow2 = [
  { name: 'Claude Code', file: 'Claudecode.png' },
  { name: 'Codex', file: 'codex.png' },
  { name: 'Trae', file: 'trae.png' },
  { name: 'Cursor', file: '' },
]

function CompactIcons() {
  const tile = 'w-[26px] h-[26px] sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center bg-[#1E1E1E]'
  const img = 'w-3.5 h-3.5 sm:w-[15px] sm:h-[15px] md:w-4 md:h-4 object-contain opacity-90'
  return (
    <div className="flex flex-col items-center gap-1.5 sm:gap-2 pt-3 sm:pt-4 md:pt-5 pb-1">
      <div className="flex gap-1 sm:gap-1.5 md:gap-2">
        {iconRow1.map((a) => (
          <div key={a.name} className={tile} title={a.name}>
            {a.file ? (
              <img src={`/icons/${a.file}`} alt={a.name} className={img} />
            ) : (
              <span className="text-white text-[8px] sm:text-[9px] font-semibold">{a.name[0]}</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-1 sm:gap-1.5 md:gap-2">
        {iconRow2.map((a) => (
          <div key={a.name} className={tile} title={a.name}>
            {a.file ? (
              <img src={`/icons/${a.file}`} alt={a.name} className={img} />
            ) : (
              <span className="text-white text-[8px] sm:text-[9px] font-semibold">{a.name[0]}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ---- card face ----
function CardFace({ data, isBack }: { data: CardData; isBack?: boolean }) {
  const bg = isBack ? '#0C0C0C' : '#FFFFFF'
  const tc = isBack ? '#FFFFFF' : '#0C0C0C'
  const border = isBack ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.04)'

  // ============ BACK FACE ============
  if (isBack) {
    return (
      <div
        className="absolute inset-0 rounded-2xl sm:rounded-3xl flex flex-col shadow-2xl overflow-hidden"
        style={{ backgroundColor: bg, border, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
      >
        {data.backShowIcons && <CompactIcons />}
        <div className="flex-1 flex items-center px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6">
          <p
            className="w-full text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed whitespace-pre-line"
            style={{ color: tc, opacity: 0.85 }}
          >
            {data.backText}
          </p>
        </div>
      </div>
    )
  }

  // ============ FRONT FACE ============
  return (
    <div
      className="absolute inset-0 rounded-2xl sm:rounded-3xl flex flex-col shadow-2xl overflow-hidden"
      style={{ backgroundColor: bg, border, backfaceVisibility: 'hidden' }}
    >
      {data.image ? (
        data.imagePos === 'top' ? (
          <>
            <img src={data.image} alt="" className="w-full object-cover" style={{ height: '60%' }} />
            {data.label && (
              <div className="flex-1 flex items-center justify-center">
                <span
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-none text-center px-4"
                  style={{ color: tc }}
                >
                  {data.label}
                </span>
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center p-5 sm:p-6 md:p-8">
            <img src={data.image} alt="" className="w-full h-full object-contain" />
          </div>
        )
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3">
          {data.label && (
            <span
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none text-center px-4"
              style={{ color: tc }}
            >
              {data.label}
            </span>
          )}
          {data.sub && (
            <span className="text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.2em]" style={{ color: tc, opacity: 0.35 }}>
              {data.sub}
            </span>
          )}
        </div>
      )}
    </div>
  )
}

// ---- main component ----
export default function CardStack({ expanded, onToggle }: CardStackProps) {
  const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920)

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const sX = [18, 6, -4, -14]
  const sY = [14, 4, -3, -10]
  const sR = [-10, -3, 3, 8]

  const step = 376
  const totalSpan = step * 3
  const eX = [0, 1, 2, 3].map(i => i * step - totalSpan / 2)

  const pushRight = vw * 0.15

  return (
    <div className="relative w-full select-none" style={{ height: 600 }}>
      <div className="absolute left-1/2 top-1/2" style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="absolute w-[180px] h-[250px] sm:w-[260px] sm:h-[350px] md:w-[320px] md:h-[430px] lg:w-[360px] lg:h-[480px] pointer-events-auto"
            style={{
              transformStyle: 'preserve-3d',
              marginLeft: -180,
              marginTop: -170,
            }}
            onClick={(e) => {
              e.stopPropagation()
              onToggle()
            }}
            initial={false}
            animate={{
              x: expanded ? eX[i] : sX[i] + pushRight,
              y: expanded ? 0 : sY[i],
              rotate: expanded ? 0 : sR[i],
              zIndex: expanded ? 10 + i : cards.length - 1 - i,
            }}
            transition={{ type: 'spring', stiffness: 80, damping: 17, mass: 1.3 }}
            whileHover={expanded ? { rotateY: 180, scale: 1.04, zIndex: 50 } : { scale: 1.04, zIndex: 20 }}
          >
            <CardFace data={card} />
            <CardFace data={card} isBack />
          </motion.div>
        ))}
      </div>

      {!expanded && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          className="absolute left-1/2 -translate-x-1/2 text-[#D7E2EA] text-xs font-light tracking-wider whitespace-nowrap"
          style={{ top: 'calc(50% + 310px)' }}
        >
          click to expand
        </motion.p>
      )}
    </div>
  )
}

export { cards }
