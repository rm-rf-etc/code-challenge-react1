import {
    FETCH_ATTEMPT,
    CHANGE_SUBREDDIT,
    LOAD_SUCCESS,
    LOAD_FAILURE,
} from '@actions/'
import initialState from '@constants/initial-state'
import update from 'immutability-helper'


export default (state = initialState, action = {}) => {
    
    // alternative to switch statement
    const fn = ({

        [FETCH_ATTEMPT]: () => (
            state
        ),
        [CHANGE_SUBREDDIT]: () => (
            update(state, {
                subreddit: { $set: action.subreddit },
            })
        ),
        [LOAD_SUCCESS]: () => {
            const { data } = action
            return update(state, {
                data: { $set: data },
            })
        },
        [LOAD_FAILURE]: () => (
            update(state, {
                data: { $set: [] },
            })
        )

    })[action.type]

    // default to initialState
    return !!fn ? fn() : state
}
