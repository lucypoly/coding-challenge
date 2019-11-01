import React from 'react'
import { Provider } from 'react-redux'

import Lines from 'Lines'
import { LINES } from 'constants/lines'
import configureStore from 'store'
import Navigation from 'Navigation'

const App: React.FC = () => (
  <Provider store={configureStore()}>
    <div className="App">
      <Navigation />
      <Lines lines={LINES} />
    </div>
  </Provider>
)

export default App