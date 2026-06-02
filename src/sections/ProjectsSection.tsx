import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiveProjectButton from '../components/LiveProjectButton'

interface Project {
  num: string
  category: string
  name: string
  subtitle?: string
  leftImg1: string
  leftImg2: string
  rightVideo: string
  description: string
  link?: string
}

const projects: Project[] = [
  {
    num: '01',
    category: 'Client',
    name: 'PETMEET',
    subtitle: '主界面3D动态模型设计',
    leftImg1: '/3/4.png',
    leftImg2: '/3/5.jpg',
    rightVideo: '/3/6.mp4',
    description:
      '负责App主界面的3D动态模型资产制作，独立完成从概念草图、低模建模、材质贴图到骨骼绑定与基础动效的全流程。针对"宠物社交"的场景调性，设计了多套不同风格（卡通/写实/Q版）的3D角色与交互预览方案，并输出了可在Unity引擎中直接集成的工程文件。\n尽管最终上线版本选用了另一套视觉方案，但我的3D资产制作流程、引擎适配规范以及动效参数被后续版本作为参考基准。该App目前已在各大应用商店发布，累计下载量超过2500次。',
    link: 'https://static.petmeet.net/',
  },
  {
    num: '02',
    category: 'Personal',
    name: '大学生SRT项目——基于用户体验的中小学生午睡桌椅的设计研究',
    subtitle: '项目负责人',
    leftImg1: '/3/8.jpg',
    leftImg2: '/3/9.jpg',
    rightVideo: '/3/7.mp4',
    description:
      '独立主导全流程：从用户调研、需求分析到方案设计与三维验证。首先通过问卷调研（N=120+中小学生/教师）和访谈，归纳出"趴睡不适、桌椅不匹配、收纳不足"等5大核心痛点，建立用户画像与功能优先级。\n在此基础上完成30+版草图方案迭代，筛选出3个可行方向，并运用Rhino进行参数化建模、Blender制作结构拆解与使用场景动画，直观展示午睡姿态切换、高度调节等核心功能。\n最终产出一套完整的3D概念模型及演示视频，作为SRT结题答辩的核心成果，被指导老师评价为"具备一定人机工程学参考价值"。该研究可为中小学校园午睡设施改进提供设计建议。',
  },
  {
    num: '03',
    category: 'Client',
    name: '南京农业大学2025届工业设计专业毕业设计展',
    subtitle: '素材搜集与宣传视频项目负责人',
    leftImg1: '/3/2.jpg',
    leftImg2: '/3/3.jpg',
    rightVideo: '/3/1.mp4',
    description:
      '统筹全系30余件毕设作品的视觉素材，独立完成从创意策划、分镜设计到剪辑、动效、配乐的全流程制作。针对"线上线下联动传播"的目标，构建了"作品亮点+设计理念+作者口述"的叙事结构，增强情感共鸣。\n视频最终被南京农业大学官方微信视频号采用发布，获得近100条互动（点赞/评论），并同步在毕业展线下大屏幕循环播放，覆盖现场观展师生及线上观众预估超2000人次。该作品也成为本届毕设展对外宣传的核心物料之一。',
    link: 'https://weixin.qq.com/sph/A7mtmnt3th',
  },
]

function ProjectCard({ project, index, totalCards }: { project: Project; index: number; totalCards: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [targetScale, 1, targetScale])

  return (
    <div ref={ref} className="mb-6 sm:mb-8 md:mb-10">
      <motion.div
        style={{ scale }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-white/30 bg-white/15 backdrop-blur-sm p-5 sm:p-6 md:p-8 flex flex-col"
      >
        {/* Top Row: Number + Info + Button */}
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <div className="flex items-start gap-4 sm:gap-6">
            <span className="font-black text-[#1A1A2E] leading-none shrink-0" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {project.num}
            </span>
            <div className="flex flex-col pt-2">
              <span className="text-[#2D3047] font-light uppercase tracking-wider text-sm opacity-60">
                {project.category}
              </span>
              <h3
                className="text-[#1A1A2E] font-medium uppercase"
                style={{ fontSize: 'clamp(0.95rem, 2vw, 1.9rem)', maxWidth: '55vw' }}
              >
                {project.name}
              </h3>
              {project.subtitle && (
                <p
                  className="text-[#2D3047] font-light opacity-70 mt-1"
                  style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1.1rem)' }}
                >
                  {project.subtitle}
                </p>
              )}
            </div>
          </div>
          <div className="shrink-0 ml-2">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <LiveProjectButton />
              </a>
            ) : null}
          </div>
        </div>

        {/* Image / Video Grid */}
        <div className="flex gap-3 sm:gap-4" style={{ height: 'clamp(240px, 34vw, 460px)' }}>
          {/* Left column - 40% width */}
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4">
            <div className="rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-black/5 flex-1">
              <img
                src={project.leftImg1}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-black/5 flex-1">
              <img
                src={project.leftImg2}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Right column - 60% width, video */}
          <div className="w-[60%] rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-black/5">
            <video
              src={project.rightVideo}
              controls
              preload="none"
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Description Text */}
        <div className="mt-5 sm:mt-6 md:mt-8">
          <p
            className="font-light leading-relaxed text-[#2D3047] opacity-75 whitespace-pre-line"
            style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1.05rem)' }}
          >
            {project.description}
          </p>
        </div>

        {/* Bottom Link */}
        {project.link && (
          <div className="mt-5 sm:mt-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] hover:text-[#60A5FA] transition-colors duration-200 font-medium"
              style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)' }}
            >
              {project.link}
            </a>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </h2>

      <div className="max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  )
}
