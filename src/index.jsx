import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, IndexRedirect, Router, Route, hashHistory} from 'react-router';
import Voting from './components/Voting';
import App from './components/App';
import Results from './components/Results'

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
	<Router history={hashHistory}>
		<Route component={App}>
			<Route path="/results" component={Results}/>
			<Route path="/" component={Voting}/>
		</Route>
	</Router>,
	document.getElementById('app')
)
