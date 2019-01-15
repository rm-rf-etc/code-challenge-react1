import {createLogic} from 'redux-logic'
import endpoint from 'src/endpoints'
import {
	SET_SUBREDDIT,
	CANCEL_FETCH,
	GO_FORWARD,
	GO_BACKWARD,
	loadSuccess,
	loadFailure,
} from 'src/actions'
import {dataPreprocess} from 'src/helpers'


export default [

	createLogic({
		type: SET_SUBREDDIT,
		cancelType: CANCEL_FETCH,
		latest: true,
		process: ({httpClient, getState, action}, dispatch, done) => {

			const {subreddit} = action

			return httpClient
			.get(endpoint(subreddit, null))
			.then((resp) => {
				const {data, markerNext} = dataPreprocess(resp, '')
				const newMarkers = [''].concat(markerNext)
				dispatch(loadSuccess(subreddit, data, 0, newMarkers))
				done()
			})
			.catch((err) => {
				dispatch(loadFailure(err.message))
				done()
			})
		}
	}),

	createLogic({
		type: GO_FORWARD,
		cancelType: CANCEL_FETCH,
		latest: true,
		process: ({httpClient, getState, action}, dispatch, done) => {

			const state = getState()
			const {subreddit, markers, position: oldPosition} = state

			let newPosition = oldPosition + 1
			const newMarker = markers[newPosition]
			httpClient
			.get(endpoint(subreddit, newMarker))
			.then((resp) => {
				const {data, markerNext} = dataPreprocess(resp, '')
				const newMarkers = markers.concat(markerNext)
				dispatch(loadSuccess(subreddit, data, newPosition, newMarkers))
				done()
			})
			.catch((err) => {
				dispatch(loadFailure(err.message))
				done()
			})
		}
	}),

	createLogic({
		type: GO_BACKWARD,
		cancelType: CANCEL_FETCH,
		latest: true,
		process: ({httpClient, getState, action}, dispatch, done) => {

			const state = getState()
			const {subreddit, markers, position: oldPosition} = state

			let newPosition = oldPosition
			if (oldPosition < 1 || markers[oldPosition] === '') {
				done()
			}

			newPosition = Math.max(0, oldPosition - 1)

			const newMarker = markers[newPosition]
			httpClient
			.get(endpoint(subreddit, newMarker))
			.then((resp) => {
				const {data} = dataPreprocess(resp, '')
				dispatch(loadSuccess(subreddit, data, newPosition, markers))
				done()
			})
			.catch((err) => {
				dispatch(loadFailure(err.message))
				done()
			})
		}
	}),

]
