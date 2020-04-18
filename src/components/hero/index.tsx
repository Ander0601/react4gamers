import React from 'react'
import './index.css'
import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants'
import useEventListener from '@use-it/event-listener'
import useHeroMovement from '../hooks/useHeroMovement'



const initialPosition = {
  x: 15,
  y: 15
}

const Hero = () => {

  const { direction, position } = useHeroMovement(initialPosition)

  return (
    <div style={{
      position: 'absolute',
      width: TILE_SIZE,
      height: TILE_SIZE + HEAD_OFFSET,
      backgroundImage: "url(./assets/HERO.png)",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
      bottom: TILE_SIZE * position.y,
      left: TILE_SIZE * position.x,
      animation: 'hero-animation 1s steps(4) infinite',
      transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`
    }}>
    </div>
  )
}

export default Hero