import React from 'react'
import {withRouter} from 'react-router-dom'
import {compose, withProps} from 'recompose'

/*
	HOC components to provide query param as prop
*/
export const QueryParamHOC = (propNames, Child) => (
	withRouter((props) => {

		let params = {}
		propNames.forEach(propName => {
			params[propName] = props.match.params[propName]
		})

		const NewChild = compose(
			withProps(params)
		)(Child)

		return <NewChild />
	})
)
