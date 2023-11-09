import React, {useEffect, useState} from 'react'

function RepoDetails({owner, repo}) {
  const [repoDetails, setRepoDetails] = useState(null)

  useEffect(() => {
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}?page=2`
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}`

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setRepoDetails(data))
      .catch(error => console.error('Error fetching repo details:', error))
  }, [owner, repo])

  if (!repoDetails) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{repoDetails.name}</h2>
      <p>{repoDetails.description}</p>
      {/* Add more details as needed */}
    </div>
  )
}

export default RepoDetails
