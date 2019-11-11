import React from 'react'
import styled from 'styled-components'

import Player from './player'

const Players = (props) => {
  console.log(props)
  return (
    <PlayerContainer>
      {props.players.map( player => (
        <Player 
          id={player.id}
          name={player.name} 
          country={player.country} 
          searches={player.searches}
        />
      ))}
    </PlayerContainer>
  )
}

export default Players

const PlayerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`