import { Wheel } from '../components/ControlPanel/Controls';
import { connect } from 'react-redux';
import { changeWheel, getRanges } from '../store/actions';

const mapStateToProps = state => {
	return {
		selectedWheel: state.wheel
	}
};

const mapDispatchToProps = dispatch => {
	return {
    onWheelClick(size) {
      dispatch(
				changeWheel(size)
			);
			dispatch(
        getRanges()
      );
    },
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(Wheel);
