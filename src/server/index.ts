import type { D1Database } from '@cloudflare/workers-types'
import { Hono } from 'hono'
import { getUsers, insertUser } from '../db/queries'

type Bindings = {
  ENVIRONMENT: string
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/api/environment', c => c.text(c.env.ENVIRONMENT))

app.get('/api/users', async c => {
  const users = await getUsers(c.env.DB)
  return c.json(users)
})

app.post('/api/users', async c => {
  const body = await c.req.json<{ email?: unknown }>()

  if (typeof body.email !== 'string' || !body.email.includes('@')) {
    return c.json({ error: 'El email no es válido' }, 400)
  }

  try {
    const user = await insertUser(c.env.DB, {
      email: body.email
    })

    return c.json(user, 201)
  } catch {
    return c.json({ error: 'El usuario ya existe o no pudo crearse' }, 409)
  }
})

export default app
