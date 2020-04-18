import React from 'react'
import './index.css'
import { TILE_SIZE, GAME_SIZE, DEMON_TILE_SIZE, EDirection } from '../../settings/constants'
import useEnemyMovement from '../hooks/useEnemyMoviment'


const initialPosition = {
  x: 5,
  y: 5
}

const Demon = () => {

  const { direction, position } = useEnemyMovement(initialPosition)

  return (
    <div style={{
      width: DEMON_TILE_SIZE,
      height: DEMON_TILE_SIZE,
      backgroundImage: "url(./assets/DEMON.png)",
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      bottom: TILE_SIZE * position.y,
      left: TILE_SIZE * position.x,
      animation: 'demon-animation 1s steps(4) infinite',
      transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`
    }}>
    </div>
  )
}

export default Demon