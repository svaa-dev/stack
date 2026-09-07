import { drizzle } from 'drizzle-orm/d1'
import type { D1Database } from '@cloudflare/workers-types'

export const getDb = (binding: D1Database) => {
  return drizzle(binding)
}

export type DrizzleDb = ReturnType<typeof getDb>
