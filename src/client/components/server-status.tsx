import { useEffect, useState } from 'react'

export default function ServerStatus() {
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(setStatus)
  }, [])

  return <div>Server status: {status}</div>
}
