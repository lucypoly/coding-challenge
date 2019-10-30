import React from 'react'
import { LineMarkSeries } from 'react-vis'

import { Color, Station } from 'constants/types'

interface Props {
  stations: ReadonlyArray<Station>;
  color: Color;
}

export class Line extends React.Component<Props> {
  render() {
    const { color, stations } = this.props

    return <LineMarkSeries color={color} data={stations} />
  }
}
