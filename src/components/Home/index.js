import { connect } from 'react-redux'
import { mapStateToProps } from './connectors'
import Home from './Home'

export default connect(mapStateToProps)(Home)
