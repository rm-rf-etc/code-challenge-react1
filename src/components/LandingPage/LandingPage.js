import React from 'react'
import initialState from 'src/constants/initial-state'
import {Link} from 'react-router-dom'

export default (props) => (
	<div>
		<Link
			to={`/subreddit/${initialState.subreddit}`}
		>
			Click here to get started
		</Link>
	</div>
)
