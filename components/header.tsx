'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Route } from 'next' // <- importa o tipo

const links: { href: Route; label: string }[] = [
  { href: '/atracoes', label: 'Atrações' },
  { href: '/hospedagens', label: 'Hospedagens' },
  { href: '/restaurantes', label: 'Restaurantes' },
  { href: '/eventos', label: 'Eventos' },
]

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl grid place-items-center bg-[hsl(var(--brand))] text-white font-bold">OL</div>
          <span className="font-semibold">Olímpia Turismo</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => {
            const active = pathname.startsWith(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={active ? 'text-emerald-700' : 'hover:text-emerald-700'}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/checkout" className="px-3 py-2 rounded-xl border border-neutral-300 hover:bg-neutral-100 text-sm">
            Minhas compras
          </Link>
          <button className="px-3 py-2 rounded-xl bg-[hsl(var(--brand))] text-white text-sm">Entrar</button>
        </div>
      </div>
    </header>
  )
}

