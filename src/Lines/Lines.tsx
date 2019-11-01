import React from 'react'
import { XYPlot, MarkSeries, LineMarkSeries, Hint } from 'react-vis'
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
    {/*Can't wrap MarkSeries and Hint together because of the library bug*/}
    {trains.map(train => (
      <MarkSeries
        key={`train-${train.color}`}
        color="black"
        data={[train.coordinates]}
        strokeWidth={5}
      />
    ))}
    {trains.map(train => (
      <Hint
        key={`passengers-${train.color}`}
        value={train.coordinates}
        style={{ background: 'black', margin: '5px', padding: '5px' }}
      >
        {train.passengers}
      </Hint>
    ))}
  </XYPlot>
)

const mapStateToProps = state => ({
  trains: state.trains,
})

export default connect(mapStateToProps)(Lines)
