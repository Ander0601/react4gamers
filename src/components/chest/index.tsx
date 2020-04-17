import React from 'react'
import './index.css'
import { TILE_SIZE, GAME_SIZE } from '../../settings/constants'

const Chest = () => {
    return (
        <div style={{
            width: TILE_SIZE,
            height: 100,
            backgroundImage: "url(./assets/CHEST.png)",
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            bottom: TILE_SIZE * 10,
            left: TILE_SIZE * 3,
            animation: 'chest-animation 1s steps(3) infinite'
        }}>
        </div>
    )
}

export default Chest