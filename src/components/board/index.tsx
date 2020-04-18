import React from 'react'
import { GAME_SIZE } from '../../settings/constants'
import Hero from '../hero'
import MiniDemon from '../miniDemon'
import Demon from '../demon'
import Chest from '../chest'
import Trap from '../trap'

const Board = () => {
    return (
        <div>
            <Trap />
            <Chest />
            <MiniDemon />
            <Demon />
            <Hero />
            <img src="./assets/tileset.gif" width={GAME_SIZE} height={GAME_SIZE} />
        </div>

    )
}

export default Board