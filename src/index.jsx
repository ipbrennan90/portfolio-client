import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer';
import Voting from './components/Voting';
import App from './components/App';
import Results from './components/Results'

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

const socket = io(`${location.protocol}//${location.hostname}:8090`)
socket.on('state', state => {
 	console.log('HEY SOCKET HOW ARE YA');
	store.dispatch({type: 'SET_STATE', state})
});


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
