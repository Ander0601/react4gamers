import React from 'react'
import './index.css'
import { TILE_SIZE, GAME_SIZE } from '../../settings/constants'

const Trap = () => {
    return (
        <div style={{
            width: TILE_SIZE,
            height: 100,
            backgroundImage: "url(./assets/TRAP.png)",
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            bottom: TILE_SIZE * 4,
            left: TILE_SIZE * 5,
            animation: 'trap-animation 1s steps(8) infinite'
        }}>
        </div>
    )
}

export default Trap