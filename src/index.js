import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {setSubreddit} from 'src/actions'
import getStore from 'src/store'
import {subredditFromPathString} from 'src/helpers'

import 'src/index.css'
import App from 'src/app'
import * as serviceWorker from 'src/serviceWorker'

const store = getStore()
const subreddit = subredditFromPathString(window.location.pathname)
store.dispatch(setSubreddit(subreddit))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
