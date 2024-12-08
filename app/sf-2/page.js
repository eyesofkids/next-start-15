// import Button from './_components/button'
'use client'

import { getUsers } from './_actions'
import { useTransition, useState } from 'react'

export default function Page() {
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState([])

  console.log(isPending)

  const handleClick = () => {
    startTransition(async () => {
      const users = await getUsers()
      setState(users)
    })
  }

  return (
    <>
      <button onClick={handleClick}>get Users</button>
      <ul>
        {state.map((user, i) => (
          <li key={i}>{user.username}</li>
        ))}
      </ul>
    </>
  )
}
