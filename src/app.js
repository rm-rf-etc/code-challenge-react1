import React from 'react'
import Header from '@components/Header'
import Home from '@components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const Thread = (props) => (
	<div>
		<h1>Thread</h1>
		<pre>{JSON.stringify(props, null, '\t')}</pre>
	</div>
)
const Notfound = () => (
	<div>
		<h1>Page Not Found</h1>
	</div>
)

const App = () => (
	<div className="app-root">
		<style jsx>{`
			.app-root {
				text-align: center;
				background-color: #282c34;
			}`}
		</style>
		<Header />
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/thread/:id" component={Thread} />
				<Route component={Notfound} />
			</Switch>
		</BrowserRouter>
	</div>
)

export default App
