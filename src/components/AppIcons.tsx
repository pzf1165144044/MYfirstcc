const row1 = [
  { name: 'Figma', file: 'figma.png' },
  { name: 'Photoshop', file: 'PS.png' },
  { name: 'Illustrator', file: 'AI.png' },
  { name: 'After Effects', file: 'AE.png' },
  { name: 'Blender', file: 'blender.png' },
  { name: 'Rhino', file: 'rihno.png' },
  { name: 'Creo', file: 'creo.png' },
  { name: 'Keyshot', file: 'keyshot.png' },
]

const row2 = [
  { name: 'Claude Code', file: 'Claudecode.png' },
  { name: 'Codex', file: 'codex.png' },
  { name: 'Trae', file: 'trae.png' },
  { name: 'Cursor', file: '' },
]

function IconTile({ name, file }: { name: string; file: string }) {
  return (
    <div
      className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl transition-transform duration-300 ease-out hover:scale-125 cursor-default bg-[#1a1a1a]"
      title={name}
    >
      {file ? (
        <img
          src={`/icons/${file}`}
          alt={name}
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain transition-transform duration-300 ease-out group-hover:scale-110"
        />
      ) : (
        <span className="text-white text-[10px] sm:text-xs font-semibold tracking-tight">
          {name[0]}
        </span>
      )}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none" style={{ boxShadow: '0 0 10px rgba(255,255,255,0.15), 0 0 2px rgba(255,255,255,0.25)' }} />
    </div>
  )
}

export default function AppIcons() {
  return (
    <div className="flex flex-col items-start gap-4 sm:gap-5 md:gap-6">
      <div className="flex flex-wrap gap-2.5 sm:gap-3 md:gap-3.5">
        {row1.map((app) => (
          <IconTile key={app.name} {...app} />
        ))}
      </div>
      <div className="flex flex-wrap gap-2.5 sm:gap-3 md:gap-3.5">
        {row2.map((app) => (
          <IconTile key={app.name} {...app} />
        ))}
      </div>
    </div>
  )
}
