import {connect} from 'react-redux'
import ThreadView from './ThreadView'
import {mapStateToProps} from './connectors'

export default connect(mapStateToProps)(ThreadView)
