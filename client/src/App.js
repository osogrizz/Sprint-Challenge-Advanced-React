import React, { Component } from 'react'


import Navbar from './components/navbar'
import Players from './components/players'
import './App.css'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      players: [],
      darkMode: false
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
        <Navbar />
        <Players players={this.state.players}/>
      </div>  
    )
  }
}

export default App


