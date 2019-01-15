
/* Do not use action types in tests */
/* Use action creators instead */
export const CANCEL_FETCH = 'CANCEL_FETCH'
export const GO_FORWARD = 'GO_FORWARD'
export const GO_BACKWARD = 'GO_BACKWARD'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_FAILURE = 'LOAD_FAILURE'
export const SET_SUBREDDIT = 'SET_SUBREDDIT'
/* Do not use action types in tests */
/* Use action creators instead */


export const cancelFetch = () => ({
    type: CANCEL_FETCH,
})
export const loadSuccess = (
    subreddit = 'reactjs',
    data = [],
    position = 0,
    markers = [''],
) => ({
    type: LOAD_SUCCESS,
    subreddit,
    data,
    position,
    markers,
})
export const loadFailure = (message) => ({
    type: LOAD_FAILURE,
    message,
})
export const setSubreddit = (subreddit) => ({
    type: SET_SUBREDDIT,
    subreddit,
    position: 0,
})
export const goForward = () => ({
	type: GO_FORWARD,
})
export const goBackward = () => ({
	type: GO_BACKWARD,
})
