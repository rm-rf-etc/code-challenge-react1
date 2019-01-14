// boilerplate for redux-logic, based on:
// https://github.com/zalmoxisus/redux-devtools-extension
// https://github.com/jeffbski/redux-logic/blob/master/examples/search-async-fetch/src/configureStore.js

import axios from 'axios'
import { compose, createStore, applyMiddleware } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import rootReducer from '@reducers/'
import logic from '@logic/'
import initialState from '@constants/initial-state'

const logicDeps = {
	httpClient: axios,
}
const logicMiddleware = createLogicMiddleware(
	[logic],
	logicDeps,
)
const middleware = applyMiddleware(
	logicMiddleware,
)
const _compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancers = _compose(middleware)

export default () => createStore(
	rootReducer,
	initialState,
	enhancers,
)
