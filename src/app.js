import React from 'react'
import Header from '@components/Header'
import HomeView from '@components/Home'
import ThreadView from '@components/Thread'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


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
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomeView} />
				<Route exact path="/thread/:threadId" component={ThreadView} />
				<Route component={Notfound} />
			</Switch>
		</BrowserRouter>
	</div>
)

export default App
