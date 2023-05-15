import { Suspense } from 'react'

import { useEffect, useState } from "react"

export async function RepoList() {
/*   const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/guilhermekuehl/repos')
    .then(response => response.json())
    .then(data => setRepos(data))
  }, []) */

  await new Promise(resolve => setTimeout(resolve, 2000))

  const repos = await fetch('https://api.github.com/users/guilhermekuehl/repos', {
    cache: 'force-cache',
    next: {
      revalidate: 20,
    }
  }).then(response => response.json())

  return (
  <div>
    {JSON.stringify(repos, null, 2)}
  </div>
  )
}