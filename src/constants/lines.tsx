import { Color, Line } from 'constants/types'

export const LINES: ReadonlyArray<Line> = [
  {
    stations: [
      { x: 1, y: 4 },
      { x: 2, y: 4 },
      { x: 3, y: 4 },
      { x: 4, y: 5 },
      { x: 5, y: 5 },
      { x: 6, y: 5 },
      { x: 7, y: 5 },
    ],
    color: Color.green,
  },
  {
    stations: [
      { x: 3, y: 6 },
      { x: 3, y: 5 },
      { x: 3, y: 4 },
      { x: 4, y: 3 },
      { x: 5, y: 3 },
      { x: 6, y: 3 },
    ],
    color: Color.blue,
  },
  {
    stations: [
      { x: 5, y: 7 },
      { x: 5, y: 6 },
      { x: 5, y: 5 },
      { x: 4, y: 3 },
      { x: 3, y: 2 },
      { x: 3, y: 1 },
    ],
    color: Color.red,
  },
]
