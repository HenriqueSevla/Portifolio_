import Image from 'next/image'
import Link from 'next/link'
import { getItemBySlug } from '@/lib/data'

export default async function DetalhesPage({ params }: { params: { slug: string }}) {
  const item = await getItemBySlug(params.slug)
  if (!item) {
    return (
      <div className="container py-10">
        <h1 className="text-2xl font-bold">Conteúdo não encontrado</h1>
        <p className="mt-2 text-neutral-600">Verifique o link ou navegue pelo catálogo.</p>
        <Link className="text-emerald-700 underline" href="/">Voltar para a home</Link>
      </div>
    )
  }

  return (
    <div className="container py-10 md:py-14 grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 card overflow-hidden">
        <div className="relative aspect-[16/9]">
          <Image src={item.image} alt={item.title} fill className="object-cover" />
        </div>
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold">{item.title}</h1>
          <p className="mt-2 text-neutral-700">{item.description}</p>
        </div>
      </div>
      <aside className="lg:col-span-2 space-y-4">
        <div className="card p-6">
          <div className="text-sm text-neutral-600">A partir de</div>
          <div className="text-3xl font-extrabold">{item.price}</div>
          <Link href={`/checkout?sku=${item.id}`} className="mt-4 inline-flex items-center justify-center rounded-xl bg-[hsl(var(--brand))] text-white px-4 py-3 font-semibold hover:opacity-90">Comprar</Link>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Informações</h3>
          <ul className="mt-2 text-sm text-neutral-700 space-y-2 list-disc list-inside">
            <li>Categoria: {item.category}</li>
            <li>Localização: Olímpia - SP</li>
            <li>Cancelamento: até 24h (mock)</li>
          </ul>
        </div>
      </aside>
    </div>
  )
}