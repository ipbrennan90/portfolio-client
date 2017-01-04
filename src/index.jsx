import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {Voting} from './components/Voting';
import App from './components/App';
import {Results} from './components/Results'

const pair = ['Trainspotting', '28 Days Later'];

const store = createStore(reducer);
store.dispatch({
	type: 'SET_STATE',
	state: {
		vote: {
			pair: ['Sunshine', '28 Days Later'],
			tally: {Sunshine: 2}
		}
	}
})

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route component={App}>
				<Route path="/results" component={Results}/>
				<Route path="/" component={Voting}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
)
