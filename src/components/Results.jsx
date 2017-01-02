import React, {PureComponent, PropTypes} from 'react';
import Winner from './Winner';

export default class Results extends PureComponent {
	static propTypes = {
		pair: PropTypes.object,
		winner: PropTypes.string
	}

	_getPair() {
		return this.props.pair || [];
	}

	_getVotes(entry) {
		if(this.props.tally && this.props.tally.has(entry)) {
			return this.props.tally.get(entry);
		}
		return 0;
	}

	render() {
		console.log('IN RESULTS');
		return (
			<div>
				{this.props.winner ?
					<Winner ref={(winner) => this.winner = winner} winner={this.props.winner} /> :
					<div className="results">
						<div className="tally">
							{this._getPair().map(entry =>
								<div key={entry} className="entry">
									<h1>{entry}</h1>
									<div className="voteCount">
										{this._getVotes(entry)}
									</div>
								</div>
							)}
						</div>
						<div className="management">
							<button ref={(next) => this.next = next} className="next" onClick={this.props.next}>
								Next
							</button>
						</div>
					</div>
				}
			</div>
		)
	}
}
