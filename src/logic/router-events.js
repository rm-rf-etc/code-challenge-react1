import createHistory from 'history/createBrowserHistory'
import getStore from 'src/store'
import {setSubreddit} from 'src/actions'
import {subredditFromPathString} from 'src/helpers'
import initialState from 'src/constants/initial-state'

const history = createHistory()
const store = getStore()

let lastSubreddit = initialState.subreddit

// Redux actions can dispatch upon route changes from here
history.listen((location, action) => {

	const curSubreddit = subredditFromPathString(location.pathname)
	// console.log(action, lastSubreddit, curSubreddit)

	if (['POP','PUSH'].includes(action) && curSubreddit !== lastSubreddit) {
		store.dispatch(setSubreddit(curSubreddit))
	}

	lastSubreddit = curSubreddit
})

export default history
