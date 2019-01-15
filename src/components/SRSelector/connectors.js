import {changeSubreddit, fetchAttempt} from 'src/actions'

export const mapDispatchToProps = (dispatch) => ({
    fetch: () => dispatch(fetchAttempt()),
})
