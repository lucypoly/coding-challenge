import React from 'react'

import Lines from 'Lines'
import { LINES } from 'constants/lines'
import { getStartTrainPosition } from 'utils/utils'

export default class App extends React.PureComponent {
  state = {
    currentTrainPositions: getStartTrainPosition(LINES),
  }

  render() {
    const { currentTrainPositions } = this.state

    return (
      <div className="App">
        <Lines lines={LINES} currentTrainPositions={currentTrainPositions} />
      </div>
    )
  }
}
