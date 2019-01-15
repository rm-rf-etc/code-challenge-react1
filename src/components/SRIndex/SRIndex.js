import React from 'react'
import SRSelector from 'src/components/SRSelector'
import {Link} from 'react-router-dom'

const SRIndex = ({ subreddit, data = [] }) => (
    <div id="home">
        <style jsx>{`
            #home {
                text-align: left;
            }
            #threads {
                width: 100%;
                text-align: left;
            }`}
        </style>
        <SRSelector />
        <ul id="threads">
            {data.map(({ data }, id) => (
                <li key={id}>
                    <Link to={`/code-challenge-react1/subreddit/${subreddit}/thread/${data.id}`}>
                        {data.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)

export default SRIndex
