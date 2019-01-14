import React from 'react'
import SRSelector from '@components/SubredditSelector'
import { Link } from 'react-router-dom'

const Home = ({ subreddit, data }) => (
    <div id="home">
        <style jsx>{`
            #home {
                text-align: left;
            }
            #threads {
                width: 100%;
                text-align: left;
            }
            .link {
                color: white;
            }
        `}</style>
        <SRSelector />
        <ul id="threads">
            {data.map(({ data }) => (
                <li>
                    <Link className="link" to={`/thread/${data.name}`}>
                        {data.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)

export default Home
