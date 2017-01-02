import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote'

@connect((state) => ({ pair: state.getIn(['vote', 'pair']), winner: state.get('winner')}))
export default class Voting extends Component {

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
