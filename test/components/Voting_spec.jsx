import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag,
	Simulate
} from 'react-addons-test-utils';
import {expect} from 'chai';
import Voting from '../../src/components/Voting';
import Vote from '../../src/components/Vote'
import votingComponent, {pairOne} from '../test_vars';



describe('Voting', () => {
	it('renders a pair of buttons', () => {
		let votedWith;
		const props = {
			vote: (entry) => votedWith = entry,
			pair: pairOne
		}
		const component = votingComponent(props);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		expect(buttons.length).to.equal(2);
		expect(buttons[0].textContent).to.equal('Trainspotting');
		expect(buttons[1].textContent).to.equal('28 Days Later');
	});

	it('invokes a callback when button is clicked', () => {
		let votedWith;
		const props = {
			vote: (entry) => votedWith = entry,
			pair: ["Trainspotting", "28 Days Later"]
		}
		const component = votingComponent(props);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		Simulate.click(buttons[0]);

		expect(votedWith).to.equal('Trainspotting');
	});

	it('disables buttons when user has voted', () => {
		let votedWith;
		const props = {
			pair: pairOne,
			vote: (entry) => votedWith = entry,
			hasVoted: pairOne[0]
		}
		const component = votingComponent(props)
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		expect(buttons.length).to.equal(2);
		expect(buttons[0].hasAttribute('disabled')).to.equal(true);
		expect(buttons[1].hasAttribute('disabled')).to.equal(true);
	});

	it('adds label to the voted entry', () => {
		const props = {
			pair: pairOne,
			hasVoted: pairOne[0]
		}
		const component = votingComponent(props);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		expect(buttons[0].textContent).to.contain('Voted');
	});

	it('renders winner component when there is one', () => {
		const props = {winner: "Trainspotting"};
		const component = votingComponent(props);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		const winner = ReactDOM.findDOMNode(component.winner);

		expect(buttons.length).to.equal(0);
		expect(winner).to.be.ok;
		expect(winner.textContent).to.contain('Trainspotting');
	})
});
