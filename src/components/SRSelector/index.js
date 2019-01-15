import {connect} from 'react-redux'
import {compose} from 'recompose'
import {withState} from 'recompose'
import SRSelector from './SRSelector'
import {mapStateToProps, mapDispatchToProps} from './connectors'

export default compose(
    withState('subreddit', 'setSubreddit', 'reactjs'),
    connect(mapStateToProps, mapDispatchToProps),
)(SRSelector)
