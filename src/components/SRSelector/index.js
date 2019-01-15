import {compose} from 'recompose'
import {withState} from 'recompose'
import SRSelector from './SRSelector'

export default compose(
    withState('subreddit', 'setSubreddit', 'reactjs'),
)(SRSelector)
