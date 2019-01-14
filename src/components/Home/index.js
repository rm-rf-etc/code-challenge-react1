import { connect } from 'react-redux'
import { mapStateToProps } from './connectors'
import HomeView from './HomeView'

export default connect(mapStateToProps)(HomeView)
