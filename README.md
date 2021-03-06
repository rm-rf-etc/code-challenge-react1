
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

View it here: [https://rm-rf-etc.github.io/code-challenge-react1/](https://rm-rf-etc.github.io/code-challenge-react1/)

# Notes for Reviewer(s):

CRA = `create-react-app`

- `npm test-cover` runs tests with coverage. Best to keep `npm test` because `console.log` is squelched when using
coverage, and coverage also runs slower than standard tests.
- `"babel": {` section of package.json is needed for styled-jsx to play nice with jest.
- Import path aliases are found in `config-overrides.js`, these are webpack options we set for CRA using `customize-cra`
- All tests were done in one file because the project is minimal and short-term
- Tests were not written for routing logic as I was running short on time
- I was not able to get around to implementing the page auto-refresh feature. Because the reddit API does pagination in
a strange way, the level of effort for implementing this is higher than anticipated.
- Navigation is sometimes buggy. Some reddit API requests come back denied (I see this with /mademesmile at times)
which can cause unexpected behavior.
- In hindsight, pagination should have been implemented as part of the routing.


## Modules I Installed After `create-react-app`:
- redux
- react-redux
- redux-logic
- recompose
- axios
- react-router-dom
- styled-jsx
- immutability-helper
- customize-cra
- react-app-rewired


## Notes Leftover From `create-react-app`:

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
