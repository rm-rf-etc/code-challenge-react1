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

        newConfig.resolve.alias = {
            ...newConfig.resolve.alias,
            constants: absPath('./src/constants'),
            endpoints: absPath('./src/endpoints'),
            logic: absPath('./src/logic'),
            actions: absPath('./src/actions'),
            reducers: absPath('./src/reducers'),
            helpers: absPath('./src/helpers'),
        }

        return newConfig
    }
}
