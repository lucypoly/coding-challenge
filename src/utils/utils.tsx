import { Color, Direction, Line, Station, Train } from 'constants/types'
import { LINES } from 'constants/lines'

export const getLineByColor = (color: Color): Line => {
  return LINES.find(line => line.color === color)
}

export const getNextPosition = (
  currentLine: Line,
  direction: Direction,
  x: number,
  y: number
): { coordinates: Station, direction: Direction } => {
  const lineLength = currentLine.stations.length
  const currentIndex = currentLine.stations.findIndex(
    station => station.x === x && station.y === y
  )
  // every position when going forward
  let nextIndex = currentIndex + 1
  let prevIndex = currentIndex - 1
  let nextDirection = direction

  // last position when going forward
  if (nextIndex === lineLength && direction === Direction.forward) {
    nextIndex = prevIndex
    nextDirection = Direction.straight
  }
  // first position when going straight
  if (prevIndex === -1 && direction === Direction.straight) {
    nextIndex = 1
    nextDirection = Direction.forward
  }
  // every position when going straight
  if (prevIndex > -1 && direction === Direction.straight) {
    nextIndex = prevIndex
  }

  return {
    coordinates: currentLine.stations[nextIndex],
    direction: nextDirection,
  }
}

export const moveTrain = (train: Train, line: Line) => {
  const trainDirection = train.direction
  const { x, y } = train.coordinates
  const position = getNextPosition(line, trainDirection, x, y)
  const nextPosition = getNextPosition(
    line,
    trainDirection,
    position.coordinates.x,
    position.coordinates.y
  )

  train.coordinates = position.coordinates
  train.nextCoordinates = nextPosition.coordinates
  train.direction = position.direction
}

export const getCollisionTrain = (state, currentTrain: Train) => {
  const collisionTrainIsStopped = train =>
    !train.moving &&
    train.coordinates.x === currentTrain.nextCoordinates.x &&
    train.coordinates.y === currentTrain.nextCoordinates.y

  const collisionTrainIsMoving = train =>
    train.moving &&
    train.nextCoordinates.x === currentTrain.nextCoordinates.x &&
    train.nextCoordinates.y === currentTrain.nextCoordinates.y

  return state.find(
    train =>
      (train.color !== currentTrain.color && collisionTrainIsMoving(train)) ||
      collisionTrainIsStopped(train)
  )
}
