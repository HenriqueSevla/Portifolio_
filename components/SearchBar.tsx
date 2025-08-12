'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function SearchBar() {
  const router = useRouter()
  const [q, setQ] = useState('')

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); router.push(`/atracoes?q=${encodeURIComponent(q)}`) }}
      className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3"
    >
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Parques, hotéis, restaurantes, passeios..."
        className="rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <button className="px-5 py-3 rounded-xl bg-[hsl(var(--brand))] text-white font-semibold">Buscar</button>
    </form>
  )
}
