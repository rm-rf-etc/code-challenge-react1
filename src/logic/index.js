import { createLogic } from 'redux-logic'
import endpoints from 'endpoints/'
import {
    FIRST_FETCH,
    CANCEL_FIRST_FETCH,
    loadSuccess,
    loadFailure,
} from 'actions/'

export default createLogic({
    type: FIRST_FETCH,
    cancelType: CANCEL_FIRST_FETCH,
    latest: true,
    process: ({ httpClient, getState, action }, dispatch, done) => {
        return httpClient
        .get(endpoints.root)
        .then((resp) => {
            dispatch(loadSuccess(resp.data))
            done()
        })
        .catch((err) => {
            dispatch(loadFailure(err.message))
            done()
        })
    }
})
