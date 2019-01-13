
export const FIRST_FETCH = 'FIRST_FETCH'
export const CANCEL_FIRST_FETCH = 'CANCEL_FIRST_FETCH'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_FAILURE = 'LOAD_FAILURE'

export const firstFetch = () => ({
    type: FIRST_FETCH,
})
export const cancelFirstFetch = () => ({
    type: CANCEL_FIRST_FETCH,
})
export const loadSuccess = (data) => ({
    type: LOAD_SUCCESS,
    data,
})
export const loadFailure = (message) => ({
    type: LOAD_FAILURE,
    message,
})
