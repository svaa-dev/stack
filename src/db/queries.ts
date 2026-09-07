import type { NewUser } from './schema'
import type { D1Database } from '@cloudflare/workers-types'
import { getDb } from '.'
import * as schema from './schema'

export const insertUser = async (d1Database: D1Database, user: NewUser) => {
  const db = getDb(d1Database)
  const [result] = await db.insert(schema.users).values(user).returning()
  return result
}

export const getUsers = async (d1Database: D1Database) => {
  const db = getDb(d1Database)
  const result = await db.select().from(schema.users).all()
  return result
}
