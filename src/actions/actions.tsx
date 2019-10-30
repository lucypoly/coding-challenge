export enum ActionTypes {
    TOGGLE_MOVING = 'TOGGLE_MOVING',
}

export const toggleMoving = color => dispatch => {
  dispatch({
    type: ActionTypes.TOGGLE_MOVING,
    payload: color,
  })
}
