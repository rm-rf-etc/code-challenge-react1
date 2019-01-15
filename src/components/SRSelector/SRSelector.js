import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const SRSelector = withRouter(({ match, history, subreddit, setSubreddit }) => (
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
			onChange={({ target }) => setSubreddit(target.value)}
		/>
		<Link to={`/subreddit/${subreddit}`}>
			<button>Load</button>
		</Link>
	</div>
))

export default SRSelector

