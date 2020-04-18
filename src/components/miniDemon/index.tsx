import React from 'react'
import './index.css'
import { TILE_SIZE, GAME_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants'
import useEnemyMovement from '../hooks/useEnemyMoviment'


const initialPosition = {
  x: 10,
  y: 5
}

const MiniDemon = () => {

  const { direction, position } = useEnemyMovement(initialPosition)

  return (
    <div style={{
      width: TILE_SIZE,
      height: TILE_SIZE + HEAD_OFFSET,
      backgroundImage: "url(./assets/MINI-DEMON.png)",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
      position: 'absolute',
      bottom: TILE_SIZE * position.y,
      left: TILE_SIZE * position.x,
      animation: 'minidemon-animation 1s steps(4) infinite',
      transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`
    }}>
    </div>
  )
}

export default MiniDemon