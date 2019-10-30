import React from 'react'
import { Provider } from 'react-redux'

import Lines from 'Lines'
import { LINES } from 'constants/lines'
import { getStartTrainPosition } from 'utils/utils'
import configureStore from 'store'
import Navigation from 'Navigation'

export default class App extends React.PureComponent {
  state = {
    currentTrainPositions: getStartTrainPosition(LINES),
  }

  render() {
    const { currentTrainPositions } = this.state

    return (
      <Provider store={configureStore()}>
        <div className="App">
          <Navigation />
          <Lines lines={LINES} currentTrainPositions={currentTrainPositions} />
        </div>
      </Provider>
    )
  }
}
