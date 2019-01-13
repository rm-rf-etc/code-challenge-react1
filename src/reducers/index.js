import { FIRST_FETCH } from 'actions'
import initialState from 'constants/initial-state'


export default (state = initialState, action = {}) => {
    
    // alternative to switch statement
    const fn = ({

        [FIRST_FETCH]: () => {
            return state
        },

    })[action.type]

    // default to initialState
    return !!fn ? fn() : state
}
