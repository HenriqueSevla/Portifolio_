// lib/data.ts
import type { CardItem } from '@/types/card'
import { headers } from 'next/headers'

async function getBaseUrl() {
  const hdrs = await headers()
  const host = hdrs.get('host') ?? 'localhost:3000'
  const proto = host.includes('localhost') ? 'http' : 'https'
  return `${proto}://${host}`
}

export async function fetchCards(params?: { category?: CardItem['category']; limit?: number }) {
  const qs = new URLSearchParams()
  if (params?.category) qs.set('category', params.category)
  if (params?.limit) qs.set('limit', String(params.limit))

  const baseUrl = await getBaseUrl()
  const res = await fetch(`${baseUrl}/api/cards?${qs.toString()}`, { next: { revalidate: 60 } })
  if (!res.ok) throw new Error('Failed to fetch cards')
  return (await res.json()) as CardItem[]
}

export async function getItemBySlug(slug: string) {
  const baseUrl = await getBaseUrl()
  const res = await fetch(`${baseUrl}/api/item/${slug}`, { next: { revalidate: 60 } })
  if (!res.ok) return null
  return (await res.json()) as CardItem | null
}
