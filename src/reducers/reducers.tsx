import { ActionTypes } from 'actions/actions'
import { Color, Direction, Train } from 'constants/types'
import { getCollisionTrain, getLineByColor, moveTrain } from 'utils/utils'

const initialState: ReadonlyArray<Train> = [
  {
    color: Color.green,
    moving: false,
    coordinates: { x: 1, y: 4 },
    nextCoordinates: { x: 2, y: 4 },
    passengers: 100,
    direction: Direction.forward,
  },
  {
    color: Color.blue,
    moving: false,
    coordinates: { x: 3, y: 6 },
    nextCoordinates: { x: 3, y: 5 },
    passengers: 200,
    direction: Direction.forward,
  },
  {
    color: Color.red,
    moving: false,
    coordinates: { x: 5, y: 7 },
    nextCoordinates: { x: 5, y: 6 },
    passengers: 300,
    direction: Direction.forward,
  },
]

export const moveTrainReducer = (state = initialState, action) => {
  const currentTrain = state.find(train => train.color === action.payload)
  switch (action.type) {
    case ActionTypes.START_MOVING:
      const collisionTrain = getCollisionTrain(state, currentTrain)
      const currentLine = getLineByColor(action.payload)

      // check train collision
      const shouldStop =
        collisionTrain && collisionTrain.passengers > currentTrain.passengers
      const shouldStopCollision =
        collisionTrain && collisionTrain.passengers < currentTrain.passengers

      if (shouldStopCollision) {
        collisionTrain.moving = false
      }
      if (shouldStop) {
        currentTrain.moving = false
      } else {
        currentTrain.moving = true
        moveTrain(currentTrain, currentLine)
      }

      return [...state]
    case ActionTypes.STOP_MOVING:
      currentTrain.moving = false
      return [...state]
    default:
      return state
  }
}
