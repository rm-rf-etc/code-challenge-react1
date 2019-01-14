import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './connectors'
import SRSelector from './SRSelector'

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SRSelector)
