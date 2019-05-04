import { Climate } from '../components/ControlPanel/Controls';
import { connect } from 'react-redux';
import { clickClimate, getRanges } from '../store/actions';

const mapStateToProps = state => {
  return {
	mode: state.climateMode,
	status: state.climateButton,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClimateButtonClick(status) {
      dispatch(
        clickClimate(status)
        );
      dispatch(
        getRanges()
      );
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Climate);
