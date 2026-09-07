import { sql } from 'drizzle-orm'
import { sqliteTable, integer, text, check } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable(
  'users',
  {
    id: integer('id').primaryKey(),
    email: text('email').notNull().unique()
  },
  table => [check('email', sql`${table.email} LIKE '%@%.%'`)]
)

export type NewUser = typeof users.$inferInsert
