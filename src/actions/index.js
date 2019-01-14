
/* Do not use action types in tests */
/* Use action creators instead */
export const FETCH_ATTEMPT = 'FETCH_ATTEMPT'
export const CANCEL_FETCH = 'CANCEL_FETCH'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_FAILURE = 'LOAD_FAILURE'
export const CHANGE_SUBREDDIT = 'CHANGE_SUBREDDIT'
/* Do not use action types in tests */
/* Use action creators instead */


export const fetchAttempt = () => ({
    type: FETCH_ATTEMPT,
})
export const cancelFetch = () => ({
    type: CANCEL_FETCH,
})
export const loadSuccess = (data) => ({
    type: LOAD_SUCCESS,
    data,
})
export const loadFailure = (message) => ({
    type: LOAD_FAILURE,
    message,
})
export const changeSubreddit = (newSubreddit) => ({
    type: CHANGE_SUBREDDIT,
    subreddit: newSubreddit,
})
