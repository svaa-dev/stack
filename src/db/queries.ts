import type { D1Database } from '@cloudflare/workers-types'
import { getDb } from '.'
import type { NewUser } from './schema'
import * as schema from './schema'

export const insertUser = async (dbBinding: D1Database, user: NewUser) => {
  const db = getDb(dbBinding)
  const [result] = await db.insert(schema.users).values(user).returning()
  return result
}
