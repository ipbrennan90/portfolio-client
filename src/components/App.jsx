import React, {Component} from 'react' ;
import {List} from 'immutable';

const pair = ['Trainspotting', '28 Days Later'];
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

export default class App extends Component {
	render() {
		return (
			React.cloneElement(this.props.children, {pair: pair, tally: tally})
		)
	}
}
