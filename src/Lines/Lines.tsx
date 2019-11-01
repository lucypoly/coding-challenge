import React from 'react'
import { XYPlot, MarkSeries, LineMarkSeries } from 'react-vis'
import { connect } from 'react-redux'

import { Train, Line } from 'constants/types'

interface Props {
  lines: ReadonlyArray<Line>;
  trains: ReadonlyArray<Train>;
}

const Lines: React.FC<Props> = ({ lines, trains }: Props) => (
  <XYPlot height={500} width={500}>
    {lines.map(line => (
      <LineMarkSeries
        key={`line-${line.color}`}
        color={line.color}
        data={line.stations}
      />
    ))}
    {trains.map(train => (
      <MarkSeries
        key={`train-${train.color}`}
        color="black"
        data={[train.coordinates]}
        strokeWidth={5}
      />
    ))}
  </XYPlot>
)

const mapStateToProps = state => ({
  trains: state.trains,
})

export default connect(mapStateToProps)(Lines)
