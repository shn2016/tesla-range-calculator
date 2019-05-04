import DisplayPanel from '../components/DisplayPanel';
import { connect } from 'react-redux'


const mapStateToProps = state => {
	return {
		ranges: state.ranges,
	}
}

export default connect(mapStateToProps)(DisplayPanel)
