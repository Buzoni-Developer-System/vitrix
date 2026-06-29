import type { DoctorCard } from '../../types/card.types'

interface CardPageProps {
  data: DoctorCard
}

function Header({ data }: CardPageProps) {
  const waLink = ' `https://wa.me/` ' + data.whatsapp
  return (
    <div>
      <div className="h-28 bg-[#1a4a8a] relative overflow-hidden">
        <div className="absolute bottom-0 left-[-10%] w-[120%] h-20 bg-gray-50 rounded-[50%]" />
      </div>
      <div className="flex justify-center -mt-11 relative z-10">
        <div className="w-32 h-32 rounded-full bg-white p-[3px] shadow-md">
          {data.photo
            ? <img src={data.photo} alt={data.name} className="w-full h-full rounded-full object-cover object-top" />
            : <div className="w-full h-full rounded-full bg-blue-50 flex items-center justify-center text-[#1a4a8a] font-medium text-xl">AF</div>
          }
        </div>
      </div>
      <div className="px-5 pt-3 text-center">
        <p className="text-[10px] tracking-widest uppercase text-[#1a4a8a] font-medium">{data.title}</p>
        <h1 className="text-xl font-medium text-gray-900 mt-1">{data.name}</h1>
        <p className="text-xs text-[#4a6fa5] mt-1">{data.credentials}</p>
        <p className="text-[10px] text-gray-400 tracking-widest mt-1">{data.registration}</p>
        <div className="flex items-center justify-center gap-2 my-3">
          <span className="text-amber-400 text-sm">★★★★★</span>
          <span className="text-xs text-gray-400">{data.rating.toFixed(1)} · {data.reviewCount} avaliações Google</span>
        </div>
        <div className="flex gap-2 mb-4">
          <a href={waLink} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center bg-[#1a4a8a] text-white text-sm font-medium py-3 rounded-xl">WhatsApp</a>
          <a href={'tel:' + data.phone} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center bg-white border border-gray-200 text-[#1a4a8a] text-sm font-medium py-3 rounded-xl">Ligar</a>
        </div>
      </div>
    </div>
  )
}

function IconGrid({ data }: CardPageProps) {
  return (
    <div className="grid grid-cols-4 gap-2 px-5 mb-4">
      {data.iconActions.map(action => (
        <a key={action.id} href={action.href} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 bg-white border border-gray-100 rounded-xl py-3 px-1">
          <span className="text-[#1a4a8a] text-xs font-medium">{action.label}</span>
        </a>
      ))}
    </div>
  )
}

function LinkList({ data }: CardPageProps) {
  return (
    <div className="flex flex-col gap-2 px-5">
      {data.links.map(link => (
        <a key={link.id} href={link.href} target="_blank" rel="noreferrer" className={link.highlight ? 'flex items-center gap-3 rounded-xl px-4 py-3 border bg-blue-50 border-[#1a4a8a] text-[#1a4a8a] font-medium text-sm' : 'flex items-center gap-3 rounded-xl px-4 py-3 border bg-white border-gray-100 text-gray-800 text-sm'}>
          <div className="flex-1">
            <p className="text-sm">{link.label}</p>
            {link.sublabel && <p className="text-[11px] text-gray-400 mt-0.5">{link.sublabel}</p>}
          </div>
          <span className="text-gray-300">›</span>
        </a>
      ))}
    </div>
  )
}

function Footer() {
  const buzoniWa = ' `https://wa.me/5511969262412` '
  const toggle = () => {
    const el = document.getElementById('footer-dev')
    if (el) el.classList.toggle('hidden')
  }
  return (
    <div className="text-center mt-5 pb-5">
      <button onClick={toggle} className="text-[10px] tracking-widest uppercase text-gray-300">
        Vitrix · Cartão Digital
      </button>
      <div id="footer-dev" className="hidden mt-2">
        <a href={buzoniWa} target="_blank" rel="noreferrer" className="text-[11px] text-gray-400">
          Desenvolvido por <span className="text-[#c9a84c] font-bold italic">Buzoni Developers System</span>
        </a>
      </div>
    </div>
  )
}

export function CardPage({ data }: CardPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-8 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
        <Header data={data} />
        <IconGrid data={data} />
        <div className="h-px bg-gray-100 mx-5 mb-4" />
        <LinkList data={data} />
        <Footer />
      </div>
    </div>
  )
}
