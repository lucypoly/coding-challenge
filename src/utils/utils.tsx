import { Train, Line } from 'constants/types'

export const getStartTrainPosition = (
  lines: ReadonlyArray<Line>
): ReadonlyArray<Train> =>
  lines.map(line => ({
    coordinates: line.stations[0],
    color: line.color,
    passengers: line.passengers,
  }))
