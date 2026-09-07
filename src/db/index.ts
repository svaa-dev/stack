import type { D1Database } from '@cloudflare/workers-types'
import { drizzle } from 'drizzle-orm/d1'

export const getDb = (binding: D1Database) => {
  return drizzle(binding)
}

export type DrizzleDb = ReturnType<typeof getDb>
