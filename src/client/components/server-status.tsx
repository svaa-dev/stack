import { useEffect, useState } from 'react'

export default function ServerStatus() {
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(setStatus)
  }, [])

  return <pre>{JSON.stringify(status, null, 2)}</pre>
}
