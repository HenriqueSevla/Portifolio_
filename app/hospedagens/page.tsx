import { CardGrid } from '@/components/CardGrid'
import { fetchCards } from '@/lib/data'

export default async function HospedagensPage() {
  const items = await fetchCards({ category: 'hospedagem' })
  return (
    <div className="container py-10 md:py-14">
      <h1 className="text-2xl md:text-3xl font-bold">Hospedagens</h1>
      <p className="text-neutral-600">Hotéis, pousadas e resorts.</p>
      <div className="mt-6"><CardGrid items={items} /></div>
    </div>
  )
}