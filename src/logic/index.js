import {createLogic} from 'redux-logic'
import endpoint from 'src/endpoints/'
import {
	SET_SUBREDDIT,
	CANCEL_FETCH,
	loadSuccess,
	loadFailure,
} from 'src/actions/'
import {dataPreprocess} from 'src/helpers/'

export default createLogic({
	type: SET_SUBREDDIT,
	cancelType: CANCEL_FETCH,
	latest: true,
	process: ({ httpClient, getState, action }, dispatch, done) => {

		const { after } = getState()
		const { subreddit } = action

		return httpClient
		.get(endpoint(subreddit, after))
		.then((resp) => {
			const data = dataPreprocess(resp)
			dispatch(loadSuccess(data))
			done()
		})
		.catch((err) => {
			dispatch(loadFailure(err.message))
			done()
		})
	}
})
