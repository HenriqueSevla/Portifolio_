import { CardGrid } from '@/components/CardGrid'
import { fetchCards } from '@/lib/data'

export default async function AtracoesPage() {
  const items = await fetchCards({ category: 'atracao' })
  return (
    <div className="container py-10 md:py-14">
      <h1 className="text-2xl md:text-3xl font-bold">Atrações</h1>
      <p className="text-neutral-600">Parques aquáticos, museus e mais.</p>
      <div className="mt-6"><CardGrid items={items} /></div>
    </div>
  )
}