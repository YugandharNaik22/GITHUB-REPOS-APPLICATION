// GitHubRepos.js

import React, {Component} from 'react'
import axios from 'axios'
import GitHubRepos from './components/GitHubRepos'
import GitHubRepos from 'src/components/GitHubRepos'

class GitHubRepos extends Component {
  constructor() {
    super()
    this.state = {
      repositories: [],
    }
  }

  componentDidMount() {
    // Make a GET request to the GitHub API
    axios
      .get('https://api.github.com/repos/{owner}/{repo}')
      .then(response => {
        // Handle the successful response
        this.setState({repositories: response.data})
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error)
      })
  }

  render() {
    return (
      <div>
        <h1>GitHub Repositories</h1>
        <ul>
          {this.state.repositories.map(repo => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default GitHubRepos
