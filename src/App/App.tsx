import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'store'

import { LINES } from 'constants/lines'
import Navigation from 'Navigation'
import Lines from 'Lines'

const App: React.FC = () => (
  <Provider store={configureStore()}>
    <div className="App">
      <Navigation />
      <Lines lines={LINES} />
    </div>
  </Provider>
)

export default App