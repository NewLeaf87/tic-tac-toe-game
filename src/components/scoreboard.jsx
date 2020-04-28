///
// src/components/scoreboard.jsx
///
import React from 'react'
import { Link } from 'react-router-dom'

// Import Storage object
import { Storage } from './../storage/storage'

// Create Scoreboard component
export class Scoreboard extends React.Component {
  state = {
    scoreboard: []
  }

    // After component mounts, load any data from local storage and update component state
  async componentDidMount() {
 let storage = await new Storage().getData()

    this.setState({
      scoreboard: storage
    })
  }

  render() {
    return (
        
      <div className="game">
        <h1>Welcome Back To The Stage of History:
            <br />
            Below is a list of past winners.
        </h1>

                {/* List with previous games */}
        <ul>
          {this.state.scoreboard.map((leader, key) => {
            return <li key={key}>{leader}</li>
          })}
        </ul>
        <h3>Think you can win??</h3>

                {/* Link to start new game */}
        <Link to="/board">
          <button className="btn">Lets Get Started!!</button>
        </Link>
      </div>
    )
  }
}