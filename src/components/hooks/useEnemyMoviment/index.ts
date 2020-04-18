import React from 'react'
import useEventListener from '@use-it/event-listener'
import { EDirection } from '../../../settings/constants';
import useInterval from '@use-it/interval'
import { handleNextPosition } from '../../../contexts/canvas/helpers';

function useEnemyMovement(initialPosition) {

  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

  useInterval(function move() {

    const random = Math.floor(Math.random() * 4);
    const directions = Object.values(EDirection)

    const randomDirection = directions[random]


    const nextMovement = handleNextPosition(randomDirection, positionState)
    updateDirectionState(randomDirection)
    updatePositionState(nextMovement)

  }, 2000)

  return {
    position: positionState,
    direction: direction
  }

}

export default useEnemyMovement