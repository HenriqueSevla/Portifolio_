import { Card } from 'components/card'
import type { CardItem } from '@/types/card'
import * as React from 'react'

export function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}
