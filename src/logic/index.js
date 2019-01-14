import { createLogic } from 'redux-logic'
import endpoint from '@endpoints/'
import {
    FETCH_ATTEMPT,
    CANCEL_FETCH,
    loadSuccess,
    loadFailure,
} from '@actions/'
import { dataPreprocess } from '@helpers/'

export default createLogic({
    type: FETCH_ATTEMPT,
    cancelType: CANCEL_FETCH,
    latest: true,
    process: ({ httpClient, getState, action }, dispatch, done) => {

        const { subreddit, after } = getState()

        return httpClient
        .get(endpoint(subreddit, after))
        .then((resp) => {
            const data = dataPreprocess(resp)
            dispatch(loadSuccess(data))
            done()
        })
        .catch((err) => {
            dispatch(loadFailure(err.message))
            done()
        })
    }
})
