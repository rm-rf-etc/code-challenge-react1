import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import logic from './logic/'
import {
    firstFetch,
    loadSuccess,
    loadFailure,
    changeSubreddit,
    cancelFirstFetch,
} from './actions/'
import initialState from './constants/initial-state'
import endpoints from './endpoints/'
import rootReducer from './reducers/'
import { dataPreprocess } from './helpers/'
import salesJSON from './fixtures/sales.json'

const exampleResponse = {
    status: 200,
    data: salesJSON,
}


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
                // Needs to match response object with payload data under `data`
                resolve({
                    status: 200,
                    data: {
                        data: {
                            children: [{}],
                        },
                    },
                })
            ))
        ))
        global.axios = { get }
    })
    it('makes get request to endpoint', async () => {

        const logicDeps = {
            action: firstFetch(),
            httpClient: axios,
        }
        const _dispatch = jest.fn()
        const _done = jest.fn()

        await logic.process(logicDeps, _dispatch, _done)

        expect(axios.get).toBeCalledWith(endpoints.root)
        expect(_dispatch).toBeCalledWith(loadSuccess([{}]))
        expect(_done.mock.calls.length).toBe(1)
    })
})
describe('action creators', () => {
    it('have correct type', () => {
        // type here is string to catch condition where type is undefined
        expect(firstFetch().type).toBe('FIRST_FETCH')
        expect(cancelFirstFetch().type).toBe('CANCEL_FIRST_FETCH')
        expect(loadSuccess({}).type).toBe('LOAD_SUCCESS')
        expect(loadFailure('invalid data').type).toBe('LOAD_FAILURE')
        expect(changeSubreddit('sales').type).toBe('CHANGE_SUBREDDIT')
    })
})
describe('root reducer', () => {
    it('changes to new subreddit', () => {

        const action = changeSubreddit('sales')
        expect(action.type).toBe('CHANGE_SUBREDDIT')
        expect(action.subreddit).toBe('sales')

        const newState = rootReducer(initialState, action)
        expect(newState.subreddit).toBe('sales')
    })
    it('preprocesses payload data', () => {

        const data = dataPreprocess(exampleResponse)
        const action = loadSuccess(data)

        expect(action.data.length).toBe(25)
    })
    it('updates state with new results from payload', () => {

        const data = dataPreprocess(exampleResponse)
        const action = loadSuccess(data)
        const newState = rootReducer(initialState, action)

        expect(newState.data.length).toBe(25)
    })
})
describe.skip('logic', () => {
    it('', () => {
    })
})
