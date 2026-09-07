import type { D1Database } from '@cloudflare/workers-types'
import { drizzle } from 'drizzle-orm/d1'

export const getDb = (D1Database: D1Database) => {
  return drizzle(D1Database)
}

export type DrizzleDb = ReturnType<typeof getDb>
