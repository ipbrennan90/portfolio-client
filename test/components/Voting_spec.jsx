import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag,
	Simulate
} from 'react-addons-test-utils';
import {expect} from 'chai';
import Voting from '../../src/components/Voting';
import Vote from '../../src/components/Vote';

describe('Voting', () => {
	it('renders a pair of buttons', () => {
		let votedWith;
		const vote = (entry) => votedWith = entry;
		const component = renderIntoDocument(
			<Vote pair={["Trainspotting", "28 Days Later"]} vote={vote} />
		);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		expect(buttons.length).to.equal(2);
		expect(buttons[0].textContent).to.equal('Trainspotting');
		expect(buttons[1].textContent).to.equal('28 Days Later');
	});

	it('invokes a callback when button is clicked', () => {
		let votedWith;
		const vote = (entry) => votedWith = entry;
		const component = renderIntoDocument(
			<Voting pair={["Trainspotting", "28 Days Later"]}
							vote={vote}/>
		);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		Simulate.click(buttons[0]);

		expect(votedWith).to.equal('Trainspotting');
	})
});