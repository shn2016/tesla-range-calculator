import { Speed } from '../components/ControlPanel/Controls';
import { connect } from 'react-redux'
import { changeSpeed, getRanges } from '../store/actions';

const mapStateToProps = state => {
	return {
		speed: state.speed,
	}
};

const mapDispatchToProps = dispatch => {
	return {
    onSpeedChange(type, speed) {
      dispatch(
        changeSpeed(type, speed)
      );
      dispatch(
        getRanges()
      );
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Speed);
