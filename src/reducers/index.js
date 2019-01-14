import {
    FIRST_FETCH,
    CHANGE_SUBREDDIT,
    LOAD_SUCCESS,
} from 'actions/'
import initialState from 'constants/initial-state'
import update from 'immutability-helper'


export default (state = initialState, action = {}) => {
    
    // alternative to switch statement
    const fn = ({

        [FIRST_FETCH]: () => {
            return state
        },
        [CHANGE_SUBREDDIT]: () => {
            return update(state, {
                subreddit: { $set: action.subreddit },
            })
        },
        [LOAD_SUCCESS]: () => {
            const { data } = action
            return update(state, {
                data: { $set: data },
            })
        },

    })[action.type]

    // default to initialState
    return !!fn ? fn() : state
}
