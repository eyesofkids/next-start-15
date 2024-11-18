// export default async function SlugPage({params}) {
//   // 例如: shop/1	可以得到 Promise<{ slug: '1' }>
//   console.log(params)
//   const slug = (await params).slug
//   return <h1>slug: {slug}</h1>
// }

'use client'

import { use } from 'react'

export default function Page({ params}) {
  const { slug } = use(params)
 // console.log(typeof searchParams)
  // const sp = searchParams
 // const sp = use(searchParams)
  return <h1>params slug: {JSON.stringify(slug)}</h1>
}
