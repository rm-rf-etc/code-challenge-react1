const { override, addBabelPlugin } = require('customize-cra')
const path = require('path')

const absPath = relativePath => (
    path.join(__dirname, relativePath)
)

module.exports = {

	webpack: (config) => {
        const newConfig = override(
    		addBabelPlugin('styled-jsx/babel'),
            addBabelPlugin('styled-jsx/babel-test'),
    	)(config)

        /*
        For these to work in Jest, be sure that package.json options
        under "jest" are kept matching.
        */
        newConfig.resolve.alias = {
            ...newConfig.resolve.alias,
            "src": absPath('./src'),
        }

        return newConfig
    }
}
