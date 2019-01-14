import React from 'react'

export default ({ data, match }) => { //{ threadId, data }) => {

    const { threadId } = match.params
    const { data: threadData } = data.find(thread => (
        thread.data.id === threadId
    ))

    return (
        <div id="thread-viewer">
            <style jsx>{`
                #thread-viewer {
                    text-align: left;
                    margin-left: 20px;
                }
            `}</style>
            <h1>Thread Viewer</h1>
            <h2>Title:<br />{threadData.title}</h2>
            <h3>Body:</h3>
            <pre>{threadData.selftext}</pre>
            <h3>Raw data:</h3>
            <pre>{JSON.stringify(threadData, null, '\t')}</pre>
        </div>
    )
}
