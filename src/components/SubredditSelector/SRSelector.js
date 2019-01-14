import React from 'react'

export default ({ subreddit, changeHandler, loadHandler }) => (
    <div>
        <style jsx>{`
            input {
                margin-left: 20px;
            }
        `}</style>
        <input
            id="picker"
            type="text"
            value={subreddit}
            onChange={({ target }) => (
                changeHandler(target.value)
            )}
        />
        <button onClick={loadHandler}>Load</button>
    </div>
)
