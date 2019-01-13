import React from 'react'
import logo from './logo.svg'

const App = () => (
	<div className="app-root">
		<style jsx>{`
			.app-root {
				text-align: center;
			}
			.app-root-logo {
				animation: app-root-logo-spin infinite 20s linear;
				height: 40vmin;
			}
			.app-root-header {
				background-color: #282c34;
				min-height: 100vh;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-size: calc(10px + 2vmin);
				color: white;
			}
			.app-root-link {
				color: #61dafb;
			}
			@keyframes app-root-logo-spin {
				from {
					transform: rotate(0deg);
				}
				to {
					transform: rotate(360deg);
				}
			}`}
		</style>
		<header className="app-root-header">
			<img src={logo} className="app-root-logo" alt="logo" />
			<p>
				Edit <code>src/app.js</code> and save to reload.
			</p>
			<a
				className="app-root-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		</header>
	</div>
)

export default App
