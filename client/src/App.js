import React, { Component } from 'react'

import Players from './components/players'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      players: []
    }
  }

  componentDidMount() {
    const getPlayers = () =>{
      fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(players => {
        // console.log(players)
        this.setState({
          players: players
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
    getPlayers()
  }


  render() {
    return (
      <div className="App">
        <Players players={this.state.players}/>
      </div>  
    )
  }
}

export default App


