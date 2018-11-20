import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

// The purpose of this file is to provide a way
// to generate a Provider and redux store for
// testing and the main application

// we can optionally provide an initialState to use throughout the application
// it will be defined from the props, as long as redux is hooked up

// we can now use async action creators
export default ({ children, initialState = {} }) => {
	const store = createStore(reducers,
		initialState,
		applyMiddleware(reduxPromise)
	);
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};