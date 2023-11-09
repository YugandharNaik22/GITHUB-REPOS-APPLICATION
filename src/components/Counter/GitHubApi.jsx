const fetch = require('node-fetch')

const apiUrl =
  'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc'
function RepoDetails({owner, repo, token}) {
  const [repoDetails, setRepoDetails] = useState(null)

  useEffect(() => {
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}`

    // Include the personal access token in the Authorization header
    const headers = {
      Authorization: `Bearer ${token}`,
    }

    fetch(apiUrl, {headers})
      .then(response => response.json())
      .then(data => setRepoDetails(data))
      .catch(error => console.error('Error fetching repo details:', error))
  }, [owner, repo, token])

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

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process the data here
    console.log(data.items) // This will log an array of the most starred repositories
  })
  .catch(error => {
    console.error('Error fetching data:', error)
  })
