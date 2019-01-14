
export default (subreddit = 'reactjs', after = null) => {

    after = !!after ? `&after=${after}` : ''
    return `https://www.reddit.com/r/${subreddit}.json?limit=24${after}`
}
