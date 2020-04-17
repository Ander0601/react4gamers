import React from 'react'
import './index.css'
import { TILE_SIZE, GAME_SIZE, HEAD_OFFSET } from '../../settings/constants'

const MiniDemon = () => {
    return (
        <div style={{
            width: TILE_SIZE,
            height: TILE_SIZE + HEAD_OFFSET,
            backgroundImage: "url(./assets/MINI-DEMON.png)",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
            position: 'absolute',
            bottom: TILE_SIZE * 4,
            left: TILE_SIZE * 6,
            animation: 'minidemon-animation 1s steps(4) infinite'
        }}>
        </div>
    )
}

export default MiniDemon