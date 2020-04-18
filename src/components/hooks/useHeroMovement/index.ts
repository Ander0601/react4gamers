import React from 'react'
import useEventListener from '@use-it/event-listener'
import { EDirection } from '../../../settings/constants';
import { handleNextPosition } from '../../../contexts/canvas/helpers';

function useHeroMovement(initialPosition) {

  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

  useEventListener('keydown', (event) => {

    const direction = event.key

    const nextPosition = handleNextPosition(direction, positionState)
    updateDirectionState(direction)
    updatePositionState(nextPosition)
  })

  return {
    position: positionState,
    direction: direction
  }

}

export default useHeroMovement