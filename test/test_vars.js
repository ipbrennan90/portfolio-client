import {Voting} from '../src/components/Voting';
import React from 'react';
import {List} from 'immutable';
import {renderIntoDocument} from 'react-addons-test-utils';


export default function votingComponent(props) {
	return renderIntoDocument(
		<Voting {...props}/>
	)
}

export const pairOne = List.of('Trainspotting', '28 Days Later')
