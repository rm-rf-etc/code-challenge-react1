import {goForward, goBackward} from 'src/actions'

export const mapDispatchToProps = (dispatch) => ({
	goForward: () => dispatch(goForward()),
	goBackward: () => dispatch(goBackward()),
})
export const mapStateToProps = ({position}) => ({
    position,
})
