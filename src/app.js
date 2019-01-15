import React from 'react'
import Header from 'src/components/Header'
import SRIndex from 'src/components/SRIndex'
import ThreadView from 'src/components/ThreadView'
import LandingPage from 'src/components/LandingPage'
import {Router, Route, Switch} from 'react-router-dom'
import history from 'src/logic/router-events'
import {QueryParamHOC} from 'src/components/HOC'


const Notfound = () => (
	<div>
		<h1>Page Not Found</h1>
	</div>
)

const App = () => (
	<div className="app-root">
		<style jsx>{`
			.app-root {
				text-align: left;
				background-color: #282c34;
			}`}
		</style>
		<Header />
		<Router history={history}>
			<Switch>
				<Route
					exact
					path="/"
					component={LandingPage}
				/>
				<Route
					exact
					path="/subreddit/:subreddit"
					component={QueryParamHOC(['subreddit'], SRIndex)}
				/>
				<Route
					exact
					path="/subreddit/:subreddit/thread/:threadId"
					component={QueryParamHOC(['subreddit', 'threadId'], ThreadView)}
				/>
				<Route
					component={Notfound}
				/>
			</Switch>
		</Router>
	</div>
)

export default App
