import { NextResponse } from 'next/server'
import { mockData } from '@/lib/mockData'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category') as any
  const limit = Number(searchParams.get('limit') ?? '0')

  let result = mockData
  if (category) result = result.filter((i) => i.category === category)
  if (limit) result = result.slice(0, limit)

  return NextResponse.json(result)
}
