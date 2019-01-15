import { connect } from 'react-redux'
import { mapStateToProps } from './connectors'
import SRIndex from './SRIndex'

export default connect(mapStateToProps)(SRIndex)
