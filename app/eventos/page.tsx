import { CardGrid } from '@/components/CardGrid'
import { fetchCards } from '@/lib/data'

export default async function EventosPage() {
  const items = await fetchCards({ category: 'evento' })
  return (
    <div className="container py-10 md:py-14">
      <h1 className="text-2xl md:text-3xl font-bold">Eventos</h1>
      <p className="text-neutral-600">Agenda cultural e festivais.</p>
      <div className="mt-6"><CardGrid items={items} /></div>
    </div>
  )
}