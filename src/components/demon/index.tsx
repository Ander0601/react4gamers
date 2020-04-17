import React from 'react'
import './index.css'
import { TILE_SIZE, GAME_SIZE, DEMON_TILE_SIZE } from '../../settings/constants'

const Demon = () => {
    return (
        <div style={{
            width: DEMON_TILE_SIZE,
            height: DEMON_TILE_SIZE,
            backgroundImage: "url(./assets/DEMON.png)",
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            bottom: TILE_SIZE * 6,
            left: TILE_SIZE,
            animation: 'demon-animation 1s steps(4) infinite'
        }}>
        </div>
    )
}

export default Demon