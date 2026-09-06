import { Hono } from 'hono'

type Bindings = {
  ENVIRONMENT: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/api/health', c => c.json(c.env))

export default app
