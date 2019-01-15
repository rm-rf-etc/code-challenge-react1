// boilerplate for redux-logic, based on:
// https://github.com/zalmoxisus/redux-devtools-extension
// https://github.com/jeffbski/redux-logic/blob/master/examples/search-async-fetch/src/configureStore.js

import axios from 'axios'
import {compose, createStore, applyMiddleware} from 'redux'
import {createLogicMiddleware} from 'redux-logic'
import rootReducer from 'src/reducers/'
import logicArr from 'src/logic/'
import initialState from 'src/constants/initial-state'

const logicDeps = {
	httpClient: axios,
}
const logicMiddleware = createLogicMiddleware(
	logicArr,
	logicDeps,
)
const middleware = applyMiddleware(
	logicMiddleware,
)
const _compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancers = _compose(middleware)

const store = createStore(
	rootReducer,
	initialState,
	enhancers,
)
export default () => store
