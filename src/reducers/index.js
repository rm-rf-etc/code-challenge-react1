import {
	LOAD_SUCCESS,
	LOAD_FAILURE,
} from 'src/actions'
import initialState from 'src/constants/initial-state'
import update from 'immutability-helper'


export default (state = initialState, action = {}) => {

	switch (action.type) {

		case LOAD_SUCCESS:
			const {subreddit, data, position, markers} = action

			const stateChanges = {
				subreddit: {$set: subreddit},
				message: {$set: null},
				data: {$set: data},
				position: {$set: position},
				markers: {$set: markers},
			}
			return update(state, stateChanges)

		case LOAD_FAILURE:
			return update(state, {
				message: {$set: 'Data loading failed'},
				data: {$set: []},
			})

		default:
			return state
	}
}
