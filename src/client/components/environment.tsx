import { useEffect, useState } from 'react'

export default function Environment() {
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    fetch('/api/environment')
      .then(res => res.text())
      .then(setStatus)
  }, [])

  return <div className='font-bold'>{status}</div>
}
