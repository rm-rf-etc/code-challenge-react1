import React from 'react'
import {compose, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {createLogicMiddleware} from 'redux-logic'
import ReactDOM from 'react-dom'

import App from './app'
import logicArray from './logic/'
import {
	setSubreddit,
	loadSuccess,
	loadFailure,
	cancelFetch,
} from './actions/'
import initialState from './constants/initial-state'
import endpoint from './endpoints/'
import rootReducer from './reducers/'
import {dataPreprocess} from './helpers/'
import salesJSON from './fixtures/sales.json'


const exampleResponse = {
	status: 200,
	data: salesJSON,
}
const makeFakeAxios = () => {
	const get = jest.fn(() => (
		new Promise(resolve => (
			// Needs to match response object with payload data under `data`
			resolve(exampleResponse)
		))
	))
	global.axios = { get }
}
const killFakeAxios = () => {
	global.axios = undefined
}

describe('the app', () => {
	it('renders without crashing', () => {

		const div = document.createElement('div')
		const store = createStore(rootReducer, initialState)

		ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>,
			div,
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
describe('endpoint function', () => {
	it('has expected forms', () => {
		expect(endpoint('sales')).toBe('https://www.reddit.com/r/sales.json?limit=24')
		expect(endpoint('sales', 'name_here')).toBe('https://www.reddit.com/r/sales.json?limit=24&after=name_here')
	})
})
describe('data fetching', () => {
	beforeAll(makeFakeAxios)
	it('makes get request to endpoint', async () => {

		const logicDeps = {
			action: setSubreddit(),
			httpClient: axios,
			getState: () => initialState,
		}
		const _dispatch = jest.fn()
		const _done = jest.fn()

		await logic.process(logicDeps, _dispatch, _done)

		expect(axios.get).toBeCalledWith(endpoint(initialState.subreddit))
		const action = loadSuccess(
			exampleResponse.data.data.children,
			[exampleResponse.data.data.after],
		)

		expect(_dispatch).toBeCalledWith(action)
		expect(_done.mock.calls.length).toBe(1)
	})
	afterAll(killFakeAxios)
})
describe('action creators', () => {
	it('have correct type', () => {
		// type here is string to catch condition where type is undefined
		expect(cancelFetch().type).toBe('CANCEL_FETCH')
		expect(loadSuccess({}).type).toBe('LOAD_SUCCESS')
		expect(loadFailure('invalid data').type).toBe('LOAD_FAILURE')
		expect(setSubreddit('sales').type).toBe('SET_SUBREDDIT')
	})
})
describe('root reducer', () => {
	it('changes to new subreddit', () => {

		const action = setSubreddit('sales')
		expect(action.type).toBe('SET_SUBREDDIT')
		expect(action.subreddit).toBe('sales')
	})
	it('preprocesses payload data', () => {

		const {data, markerNext} = dataPreprocess(exampleResponse)
		const action = loadSuccess(initialState.subreddit, data, 0, [''])

		expect(action.data.length).toBe(25)
	})
	it('updates state with new results from payload', () => {

		const {data, markerNext} = dataPreprocess(exampleResponse)
		const action = loadSuccess(initialState.subreddit, data, 0, [''])
		const newState = rootReducer(initialState, action)

		expect(newState.data.length).toBe(25)
	})
})
describe('logic end-to-end', () => {
	it('calls httpClient when setSubreddit() is dispatched', async () => {

		const get = jest.fn(() => (
			new Promise((resolve) => resolve(exampleResponse))
		))
		const logicDeps = {
			httpClient: { get },
			getState: () => initialState,
		}
		const logicMiddleware = createLogicMiddleware(
			logicArray,
			logicDeps,
		)
		const middleware = applyMiddleware(
			logicMiddleware,
		)
		const enhancers = compose(middleware)

		const store = createStore(
			rootReducer,
			initialState,
			enhancers,
		)

		await store.dispatch(setSubreddit())

		expect(get).toBeCalledWith(endpoint(initialState.subreddit))
	})
})
