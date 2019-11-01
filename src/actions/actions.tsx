export enum ActionTypes {
    START_MOVING = 'START_MOVING',
    STOP_MOVING = 'STOP_MOVING',
}

export const startMoving = color => dispatch => {
  dispatch({
    type: ActionTypes.START_MOVING,
    payload: color,
  })
}

export const stopMoving = color => dispatch => {
  dispatch({
    type: ActionTypes.STOP_MOVING,
    payload: color,
  })
}
