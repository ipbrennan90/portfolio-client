import React, {PureComponent, PropTypes} from 'react';
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';
import * as actionCreators from '../action_creators';

// @connect((state) => ({ pair: state.getIn(['vote', 'pair']), winner: state.get('winner')}))
class Voting extends PureComponent {

	static propTypes = {
		winner: PropTypes.string,
		pair: PropTypes.object,
		hasVoted: PropTypes.string,
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.winner ?
					<Winner ref={(winner) => this.winner = winner}
									winner={this.props.winner}/> :
					<Vote {...this.props}/>
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		pair: state.getIn(['vote', 'pair']),
		winner: state.get('winner'),
		hasVoted: state.get('hasVoted')
	}
}

export {Voting};
export default connect(mapStateToProps, actionCreators)(Voting);
