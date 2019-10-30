import { combineReducers } from 'redux'

import { setTrains } from './reducers'

export default combineReducers({ trains: setTrains })
