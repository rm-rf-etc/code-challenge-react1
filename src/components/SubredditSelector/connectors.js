import { changeSubreddit, fetchAttempt } from '@actions/'

export const mapStateToProps = ({ subreddit }) => ({
    subreddit,
})

export const mapDispatchToProps = (dispatch) => ({
    changeHandler: (val) => dispatch(changeSubreddit(val)),
    loadHandler: () => dispatch(fetchAttempt()),
})
