export function setState(state) {
	console.log('Setting State');
	return {
		type: 'SET_STATE',
		state
	}
}

export function vote(entry) {
	return {
		type: 'VOTE',
		entry
	}
}
