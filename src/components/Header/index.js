import React from 'react'
import logo from './logo.svg'

const myLink = (
    <a
        href="https://robertchristian.me"
        target="_blank"
        rel="noopener noreferrer"
    >
        Made by Robert Christian
    </a>
)

export default () => (
    <header className="app-root-header">
        <style jsx>{`
            #header-text {
                margin-left: 20px;
            }
            .app-root-logo {
                position: fixed;
                top: 0;
                right: 0;
                animation: app-root-logo-spin infinite 20s linear;
                height: 10vmin;
            }
            .app-root-header {
                display: flex;
                flex-direction: column;
                font-size: calc(10px + 1vmin);
                color: white;
            }
            @keyframes app-root-logo-spin {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }`}
        </style>
        <p id="header-text">RedditLite: The Subreddit viewer for React fans. {myLink}.</p>
        <img src={logo} className="app-root-logo" alt="logo" />
    </header>
)
