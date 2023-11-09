import React, {Component} from 'react'
import './styles.css' // Adjust the path based on your file structure

import GitHubRepos from './GitHubRepos'
import GitHubRepos from './components/GitHubRepos'

// ... rest of the component code

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  onDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <div>{this.state.count}</div>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter
