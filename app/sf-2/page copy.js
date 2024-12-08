// import Button from './_components/button'
'use client'

import { getUsers } from './_actions'
import { useActionState, useTransition } from 'react'

export default function Page() {
  const [state, formAction] = useActionState(getUsers, [])
  const [isPending, startTransition] = useTransition()

  console.log(isPending)

  return (
    <>
      <button
        onClick={() => {
          startTransition(formAction)
        }}
      >
        get Users
      </button>
      <ul>
        {state.map((user, i) => (
          <li key={i}>{user.username}</li>
        ))}
      </ul>
    </>
  )
}
