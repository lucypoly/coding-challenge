import { combineReducers } from 'redux'

import { moveTrainReducer } from './reducers'

export default combineReducers({ trains: moveTrainReducer })
