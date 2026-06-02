import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import FadeIn from '../components/FadeIn'

interface ServiceData {
  num: string
  name: string
  desc: string
  expandImages?: string[]
  expandText?: string
  expandLayout?: 'two-images' | 'image-left'
  modalImages?: string[]
}

const services: ServiceData[] = [
  {
    num: '01',
    name: 'UI/UX DESIGN',
    desc: 'TOOLKIT——AI Creative Toolkit\n智能创意工具箱',
    expandImages: ['/2/UI-1.jpg', '/2/UI-2.jpg'],
    expandText:
      'Toolkit是一款面向创意新手、学生及自媒体创作者的一站式智能创意工具平台，核心围绕AI生成音乐、Al生成视频、AI生成图片、AI生成PPT文案四大核心功能,整合智能体工具与自定义草稿编辑能力,打破创意创作的专业门槛，实现"输入需求→AI生成→自由编辑→一键导出"的全流程闭环，精准匹配万兴科技AIGC+数字创意工具的业务方向，兼顾实用性与视觉体验。',
    expandLayout: 'two-images',
    modalImages: ['/portfolio/1/UI-1.jpg', '/portfolio/1/UI-2.jpg'],
  },
  {
    num: '02',
    name: 'AIGC UI DESIGN',
    desc: 'TERRA NOVA——The High SEA ERA\n公海元年数字守护计划',
    expandImages: ['/2/AIGC-1.jpg', '/2/AIGC-2.jpg'],
    expandText:
      'TERRA NOVA是一款针对2026年《公海条约》正式生效而设计的数字化深海监测与生态互动平台。旨在打破公海数据的"黑盒"状态，通过"高度可视化的实时监测界面"与"数字生命测绘系统将枯燥的法律条文和环境指标转化为触手可及的交互体验。"',
    expandLayout: 'two-images',
    modalImages: ['/portfolio/1/AIGC.jpg'],
  },
  {
    num: '03',
    name: '3D MODELING DESIGN',
    desc: 'ERA DRIP COFFE MAKER滤滴式咖啡机\n极简主义与精准萃取的碰撞\nMinimalism meets precise extraction',
    expandImages: ['/2/3D-1.jpg', '/2/3D-2.jpg'],
    expandText:
      '该滤滴式咖啡壶设计秉承极简主义，以建筑感的几何块面与功能纯粹性为核心，将高光泽黑曜石外壳与半透明烟熏色水箱并置，通过不透明与透明材质的碰撞展现内部流体动态，赋予机器雕塑般的空间感。同时，悬臂式壶把经精确质心计算优化倾倒手感，无缝触控面板消除视觉噪点，将日常萃取转化为静谧优雅的仪式。',
    expandLayout: 'two-images',
    modalImages: ['/portfolio/1/3D建模.jpg'],
  },
  {
    num: '04',
    name: 'PLANE DESIGN',
    desc: '墨脉食源——澳门传统美食菜单设计',
    expandImages: ['/2/PLANE.jpg'],
    expandText:
      '该项平面设计作品以澳门传统美食及非物质文化遗产（土生菜）为核心载体。传统的旅游美食宣传往往陷入色彩冗余、信息堆砌的同质化困境。本设计旨在打破常规，以"当代菜单"为形式媒介，探索在极简的黑白语境下，如何通过强烈的字体张力与细腻的写实插画，重塑地方美食的高级感与文化厚度。',
    expandLayout: 'image-left',
    modalImages: ['/portfolio/1/平面设计.jpg'],
  },
  {
    num: '05',
    name: 'VIBE CODING DESIGN',
    desc: '正在学习设计中……',
  },
]

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [modalIndex, setModalIndex] = useState<number | null>(null)

  const modalService = modalIndex !== null ? services[modalIndex] : null

  return (
    <section
      id="context"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        DESIGN
      </h2>

      <div className="max-w-5xl mx-auto">
        {services.map((s, i) => {
          const isExpanded = hoveredIndex === i

          return (
            <FadeIn key={s.num} delay={i * 0.1} y={20}>
              <div
                className="border-b border-[rgba(12,12,12,0.15)]"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Main row: number + name + description */}
                <div className="flex items-start gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12 cursor-default">
                  <span
                    className="font-black text-[#0C0C0C] leading-none shrink-0"
                    style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                  >
                    {s.num}
                  </span>
                  <div className="flex flex-col gap-1 pt-2">
                    <h3
                      className="font-medium uppercase text-[#0C0C0C]"
                      style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                    >
                      {s.name}
                    </h3>
                    <p
                      className="font-light leading-relaxed text-[#0C0C0C] opacity-60 max-w-2xl whitespace-pre-line"
                      style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>

                {/* Expandable panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && s.expandImages && s.expandText && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 sm:pb-12 md:pb-14">
                        {s.expandLayout === 'two-images' && s.expandImages.length >= 2 ? (
                          <>
                            {/* Two images side by side */}
                            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                              <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-[#F5F5F5]">
                                <img
                                  src={s.expandImages[0]}
                                  alt=""
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-[#F5F5F5]">
                                <img
                                  src={s.expandImages[1]}
                                  alt=""
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                            <p
                              className="font-light leading-relaxed text-[#0C0C0C] opacity-65"
                              style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}
                            >
                              {s.expandText}
                            </p>
                          </>
                        ) : s.expandLayout === 'image-left' ? (
                          <>
                            {/* Image left + text right */}
                            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 md:gap-8 items-center">
                              <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-[#F5F5F5] w-full sm:w-[45%] shrink-0">
                                <img
                                  src={s.expandImages[0]}
                                  alt=""
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <p
                                className="font-light leading-relaxed text-[#0C0C0C] opacity-65"
                                style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}
                              >
                                {s.expandText}
                              </p>
                            </div>
                          </>
                        ) : null}

                          {/* Blue arrow icon */}
                          <div className="flex justify-end mt-6 sm:mt-8">
                            <motion.div
                              className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#2563EB] flex items-center justify-center cursor-pointer"
                              whileHover={{
                                y: [0, -10, -4, 0],
                                scale: [1, 1.08, 1],
                              }}
                              transition={{ duration: 0.5, ease: 'easeInOut' }}
                              onClick={(e) => {
                                e.stopPropagation()
                                setModalIndex(i)
                              }}
                            >
                              <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white" strokeWidth={2.5} />
                            </motion.div>
                          </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          )
        })}
      </div>

      {/* ---- Liquid Glass Modal ---- */}
      <AnimatePresence>
        {modalService && modalService.modalImages && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-5 sm:p-8 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setModalIndex(null)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Glass panel */}
            <motion.div
              className="relative max-w-4xl w-full max-h-[85vh] overflow-auto rounded-2xl sm:rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)',
                boxShadow: '0 8px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.12) inset, 0 0 80px rgba(37,99,235,0.08)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
              }}
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors duration-200"
                onClick={() => setModalIndex(null)}
              >
                <X className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white" strokeWidth={2} />
              </button>

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-8">
                {modalService.modalImages.length === 2 ? (
                  <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                    {modalService.modalImages.map((img, idx) => (
                      <div key={idx} className="rounded-xl sm:rounded-2xl overflow-hidden">
                        <img src={img} alt="" className="w-full h-auto object-cover" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                    <img src={modalService.modalImages[0]} alt="" className="w-full h-auto object-cover" />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
