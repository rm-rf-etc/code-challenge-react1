import createHistory from 'history/createBrowserHistory'
import getStore from 'src/store'
import {setSubreddit} from 'src/actions'
import {subredditFromPathString} from 'src/helpers'

const history = createHistory()
const store = getStore()

// Get current route pathname
let oldPathname = history.location

// Redux actions can dispatch upon route changes from here
history.listen((location, action) => {

    const newPathname = location.pathname

    if (action === 'PUSH' && newPathname !== oldPathname) {
        oldPathname = newPathname

        // extract 2nd segment from route pathname
        const subreddit = subredditFromPathString(newPathname)

        // gotta dispatch setSubreddit() action to trigger data loading
        store.dispatch(setSubreddit(subreddit))
    }
})

export default history
