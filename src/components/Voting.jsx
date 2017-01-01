import React, {Component, PropTypes} from 'react';
import Winner from './Winner';
import Vote from './Vote'

export default class Voting extends Component {

	static propTypes = {
		winner: PropTypes.string,
		pair: PropTypes.array,
		hasVoted: PropTypes.string,
		vote: PropTypes.function
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.winner ?
					<Winner winner={this.props.winner}/> : <Vote {...this.props}/>
				}
				<Vote {...this.props}/>
			</div>
		)
	}
}
