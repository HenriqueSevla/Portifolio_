import { NextResponse } from 'next/server'
import { mockData } from '@/lib/mockData'

export async function GET(_: Request, { params }: { params: { slug: string }}) {
  const item = mockData.find((i) => i.slug === params.slug)
  if (!item) return new NextResponse('Not found', { status: 404 })
  return NextResponse.json(item)
}
