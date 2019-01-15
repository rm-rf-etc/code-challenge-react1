import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const SRSelector = withRouter(({
	match,
	subreddit,
	setSubreddit,
	position,
	goBackward,
	goForward,
}) => (
	<div>
		<style jsx>{`
			input {
				margin-left: 20px;
			}`}
		</style>
		<input
			id="picker"
			type="text"
			defaultValue={match.params.subreddit}
			onChange={({target}) => setSubreddit(target.value)}
		/>
		<Link to={`/code-challenge-react1/subreddit/${subreddit}`}>
			<button>Load</button>
		</Link>
		<button onClick={goBackward}>&larr;</button>
		<span>{position}</span>
		<button onClick={goForward}>&rarr;</button>
	</div>
))

export default SRSelector

