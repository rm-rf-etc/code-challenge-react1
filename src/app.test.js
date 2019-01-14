import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import logic from './logic'
import {
    FIRST_FETCH,
    LOAD_SUCCESS,
    changeSubreddit,
    loadSuccess,
} from './actions'
import initialState from './constants/initial-state'
import endpoints from './endpoints'
import rootReducer from './reducers'
import { dataPreprocess } from './helpers'
import salesJSON from './fixtures/sales.json'


describe('the app', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<App />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
describe('data fetching', () => {
    beforeAll(() => {
        const get = jest.fn(() => (
            new Promise(resolve => (
                resolve({
                    status: 200,
                    data: {},
                })
            ))
        ))
        global.axios = { get }
    })
    it('makes get request to endpoint', async () => {

        const logicDeps = {
            action: { type: FIRST_FETCH },
            getState: () => initialState,
            httpClient: axios,
        }
        const _dispatch = jest.fn()
        const _done = jest.fn()

        await logic.process(logicDeps, _dispatch, _done)

        expect(axios.get).toBeCalledWith(endpoints.root)
        expect(_dispatch).toBeCalledWith({ type: LOAD_SUCCESS, data: {} })
        expect(_done.mock.calls.length).toBe(1)
    })
})
describe('reducers', () => {
    it('changes to new subreddit', () => {

        const action = changeSubreddit('sales')
        const newState = rootReducer(initialState, action)

        expect(action.type).toBe('CHANGE_SUBREDDIT')
        expect(action.subreddit).toBe('sales')

        expect(Array.isArray(newState.data)).toBe(true)
        expect(newState.data.length).toBe(0)
        expect(newState.subreddit).toBe('sales')
    })
    it('preprocesses payload data', () => {

        const data = dataPreprocess(salesJSON)
        const action = loadSuccess(data)

        expect(action.data.length).toBe(25)
    })
    it('updates state with new results from payload', () => {

        const data = dataPreprocess(salesJSON)
        const action = loadSuccess(data)
        const newState = rootReducer(initialState, action)

        expect(newState.data.length).toBe(25)
    })
})
