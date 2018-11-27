import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import reducers from 'reducers';

// The purpose of this file is to provide a way
// to generate a Provider and redux store for
// testing and the main application

// we can optionally provide an initialState to use throughout the application
// it will be defined from the props, as long as redux is hooked up

// we can now use async action creators

// Side note: Middleware: allows us to inspect actions
// that have been returned from a 'action creator'
export default ({ children, initialState = {} }) => {
	const store = createStore(reducers,
		initialState,
		applyMiddleware(stateValidator, async)
	);
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};