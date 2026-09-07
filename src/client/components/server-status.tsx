import { useEffect, useState } from 'react'

export default function ServerStatus() {
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.text())
      .then(setStatus)
  }, [])

  return <div>{status}</div>
}
