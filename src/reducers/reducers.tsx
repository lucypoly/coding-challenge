import { ActionTypes } from 'actions/actions'
import { Color } from 'constants/types'

const initialState = [
  {
    color: Color.red,
    moving: false,
    coordinates: { x: 0, y: 0 },
    passengers: 0,
  },
  {
    color: Color.green,
    moving: false,
    coordinates: { x: 0, y: 0 },
    passengers: 0,
  },
  {
    color: Color.blue,
    moving: false,
    coordinates: { x: 0, y: 0 },
    passengers: 0,
  },
]

export const setTrains = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_MOVING:
      const currentTrain = state.find(train => train.color === action.payload)
      currentTrain.moving = !currentTrain.moving
      debugger
      return { ...state }
    default:
      return state
  }
}
