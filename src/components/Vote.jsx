import React, {Component, PropTypes} from 'react';

export default class Vote extends Component {
	static PropTypes = {
		pair: PropTypes.array,
		hasVoted: PropTypes.string,
	}

	_getPair() {
		return this.props.pair || []
	}

	_isDisabled() {
		return !!this.props.hasVoted;
	}

	_hasVotedFor(entry) {
		return this.props.hasVoted === entry;
	}

	render() {
		return (
			<div className="voting">
				{this._getPair().map(entry =>
					<button key={entry}
									disabled={this._isDisabled()}
									onClick={() => this.props.vote(entry)}>
						<h1>{entry}</h1>
						{this._hasVotedFor(entry) ?
							<div className="label">Voted</div> :
							null}
					</button>
				)}
			</div>
		)
	}
}
