import Image from 'next/image'
import Link from 'next/link'
import type { CardItem } from '@/types/card'
import * as React from 'react'

export function Card({ item }: { item: CardItem }) {
  return (
    <article className="card overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-[16/9]">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="text-xs inline-flex px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium">{item.tag}</div>
        <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
        <p className="text-sm text-neutral-600 line-clamp-2">{item.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-semibold">{item.price}</span>
          <Link href={`/detalhes/${item.slug}`} className="text-sm px-3 py-2 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800">Detalhes</Link>
        </div>
      </div>
    </article>
  )
}
