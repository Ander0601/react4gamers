import React from 'react'
import './index.css'
import { TILE_SIZE, GAME_SIZE, HEAD_OFFSET } from '../../settings/constants'
import useEventListener from '@use-it/event-listener'


const initialPosition = {
    x: 15,
    y: 15
}

const Hero = () => {
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState('RIGHT');

    useEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft' || event.key === 'a') {
            const newPosition = {
                x: positionState.x - 1,
                y: positionState.y
            }
            updateDirectionState('LEFT')
            updatePositionState(newPosition)
        } else if (event.key === 'ArrowRight' || event.key === 'd') {
            const newPosition = {
                x: positionState.x + 1,
                y: positionState.y
            }
            updateDirectionState('RIGHT')
            updatePositionState(newPosition)
        } else if (event.key === 'ArrowUp' || event.key === 'w') {
            const newPosition = {
                x: positionState.x,
                y: positionState.y + 1
            }
            updatePositionState(newPosition)
        } else if (event.key === 'ArrowDown' || event.key === 's') {
            const newPosition = {
                x: positionState.x,
                y: positionState.y - 1
            }
            updatePositionState(newPosition)
        }
    })

    // const positionState = heroPositionState[0];
    // const updatePositionState = heroPositionState[1];

    // setTimeout(() => {
    //     const newPosition = { x: 16, y: 15 };
    //     updatePositionState(newPosition);
    // }, 2000)

    return (
        <div style={{
            width: TILE_SIZE,
            height: TILE_SIZE + HEAD_OFFSET,
            backgroundImage: "url(./assets/HERO.png)",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
            position: 'absolute',
            bottom: TILE_SIZE * positionState.y,
            left: TILE_SIZE * positionState.x,
            animation: 'hero-animation 1s steps(4) infinite',
            transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`
        }}>
        </div>
    )
}

export default Hero