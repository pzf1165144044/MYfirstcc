import FadeIn from '../components/FadeIn'

const corners = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    className: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    delay: 0.1,
    x: -80,
    y: 0,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    className: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]',
    delay: 0.25,
    x: -80,
    y: 0,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    className: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    delay: 0.15,
    x: 80,
    y: 0,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    className: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]',
    delay: 0.3,
    x: 80,
    y: 0,
  },
]

const infoLines = [
  '彭臻辅 · 南京农业大学 · 工业设计',
  '性别：男',
  '手机：19310189857',
  '邮箱：19310189857@163.com',
  '微信号：pzf19310189857',
  '湖南长沙人，南京大三在读',
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-start pt-24 sm:pt-28 md:pt-36 pb-16 px-5 sm:px-8 md:px-10 overflow-hidden"
    >
      {/* Corner decorative images */}
      {corners.map((img, i) => (
        <FadeIn
          key={i}
          delay={img.delay}
          x={img.x}
          y={img.y}
          duration={0.9}
          className={`absolute ${img.className}`}
        >
          <img src={img.src} alt="" className="w-full h-auto" />
        </FadeIn>
      ))}

      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          About me
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={30}>
        <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-8 md:mt-10">
          {infoLines.map((line, i) => (
            <p
              key={i}
              className="text-[#2D3047] font-semibold text-center leading-relaxed tracking-wide"
              style={{ fontSize: i === 0 ? 'clamp(1.2rem, 2.2vw, 1.6rem)' : 'clamp(1.05rem, 1.8vw, 1.35rem)' }}
            >
              {line}
            </p>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
