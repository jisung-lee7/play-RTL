import { useEffect, useState } from 'react'

export default function UserList({ users }) {
  const [showTitle, setShowTitle] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true)
    }, 1500)
  }, [])
  return (
    <>
      {showTitle && <h1>user list</h1>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </>
  )
}
