import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import logic from './logic'
import { FIRST_FETCH, LOAD_SUCCESS } from './actions'
import initialState from './constants/initial-state'
import endpoints from './endpoints'


describe('the app', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<App />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
describe('data fetching', () => {
    beforeAll(() => {
        global.axios = {
            get: jest.fn(() => (
                new Promise(resolve => (
                    resolve({
                        status: 200,
                        data: {},
                    })
                ))
            ))
        }
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
