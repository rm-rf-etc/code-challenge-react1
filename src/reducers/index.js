import {
    LOAD_SUCCESS,
    LOAD_FAILURE,
} from 'src/actions'
import initialState from 'src/constants/initial-state'
import update from 'immutability-helper'


export default (state = initialState, action = {}) => {
    
    // alternative to switch statement
    const fn = ({

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
