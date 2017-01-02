import React, {PureComponent, PropTypes} from 'react';
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote'

export default class Voting extends PureComponent {

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
