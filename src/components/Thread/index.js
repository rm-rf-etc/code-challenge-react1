import ThreadView from './ThreadView'
import { connect } from 'react-redux'
import { mapStateToProps } from './connectors'

export default connect(mapStateToProps)(ThreadView)
