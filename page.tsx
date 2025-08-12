/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { SearchBar } from '@/components/SearchBar'
import { fetchCards } from '@/lib/data'

export default async function HomePage() {
  const featured = await fetchCards({ limit: 6 })

  return (
    <div>
      <section className="relative">
        <div className="h-[48vh] w-full overflow-hidden">
          <img
            alt="Olímpia"
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1964&auto=format&fit=crop"
          />
        </div>
        <div className="container -mt-20">
          <div className="card p-4 md:p-6">
            <h1 className="text-2xl md:text-4xl font-extrabold">Descubra Olímpia</h1>
            <p className="mt-1 text-neutral-600">Parques, hospedagens, restaurantes e eventos.</p>
            <div className="mt-4"><SearchBar /></div>
          </div>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <div className="flex items-end justify-between">
          <h2 className="text-xl md:text-2xl font-bold">Destaques</h2>
          <Link href="/atracoes" className="text-emerald-700 hover:underline">Ver tudo</Link>
        </div>
        <div className="mt-6">
          // eslint-disable-next-line react/jsx-no-undef
        </div>
      </section>
    </div>
  )
}
