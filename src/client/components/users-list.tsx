import type { User } from '@/db/schema'
import { useEffect, useState } from 'react'

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetch('/api/users')

        if (!response.ok) {
          throw new Error('No se pudieron cargar los usuarios')
        }

        const data: User[] = await response.json()
        setUsers(data)
      } catch (requestError) {
        setError(
          requestError instanceof Error ? requestError.message : 'Ocurrió un error inesperado'
        )
      } finally {
        setIsLoading(false)
      }
    }

    loadUsers()
  }, [])

  if (isLoading) {
    return <p aria-live='polite'>Cargando usuarios...</p>
  }

  if (error) {
    return <p role='alert'>{error}</p>
  }

  return (
    <section className='pt-4 text-sm' aria-labelledby='users-title'>
      {users.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        <ul className='space-y-4'>
          {users.map(user => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      )}
    </section>
  )
}
