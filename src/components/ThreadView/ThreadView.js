import React from 'react'

const ThreadView = ({ threadId, data = [] }) => {

	// Logic here could be implemented as a selector
	let match = data.find(thread => (
		!!thread && !!thread.data && thread.data.id === threadId
	))
	const thread = !!match && !!match.data ? match.data : {}
	// Logic here could be implemented as a selector

	return (
		<div id="thread-viewer">
			<style jsx>{`
				#thread-viewer {
					text-align: left;
					margin-left: 20px;
				}
			`}</style>
			<h2>Title:<br />{thread.title}</h2>
			<h3>Body:</h3>
			<pre>{thread.selftext}</pre>
			<h3>Raw data:</h3>
			<pre>{JSON.stringify(thread, null, '\t')}</pre>
		</div>
	)
}

export default ThreadView
