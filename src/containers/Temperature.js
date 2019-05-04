import { Temperature } from '../components/ControlPanel/Controls';
import { connect } from 'react-redux'
import { changeTemperature, getRanges } from '../store/actions';

const mapStateToProps = state => {
	return {
		temperature: state.temperature
	}
};

const mapDispatchToProps = dispatch => {
	return {
    onChange(type, temperature) {
      dispatch(
        changeTemperature(type, temperature)
			);
			dispatch(
        getRanges()
      );
    }
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(Temperature)
