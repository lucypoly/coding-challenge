import React from 'react'
import { XYPlot, MarkSeries, LineMarkSeries } from 'react-vis'

import { Train, Line } from 'constants/types'

interface Props {
  lines: ReadonlyArray<Line>;
  currentTrainPositions: ReadonlyArray<Train>;
}

export class Lines extends React.PureComponent<Props> {
  render() {
    const { lines, currentTrainPositions } = this.props

    return (
      <XYPlot height={500} width={500}>
        {lines.map(line => (
          <LineMarkSeries
            key={line.color}
            color={line.color}
            data={line.stations}
          />
        ))}
        {currentTrainPositions.map(train => (
          <MarkSeries
            color="black"
            data={[train.coordinates]}
            strokeWidth={5}
          />
        ))}
      </XYPlot>
    )
  }
}
