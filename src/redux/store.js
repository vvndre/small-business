import { applyMiddleware  } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'
import state from './state'
import thunk from 'redux-thunk'


export default configureStore({ reducer: reducers}, state, applyMiddleware(thunk))