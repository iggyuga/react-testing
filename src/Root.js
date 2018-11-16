import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducers from 'reducers';

// The purpose of this file is to provide a way
// to generate a Provider and redux store for
// testing and the main application

// we can optionally provide an initialState to use throughout the application
// it will be defined from the props, as long as redux is hooked up
export default ({ children, initialState = {} }) => {
	return (
		<Provider store={createStore(reducers, initialState)}>
			{children}
		</Provider>
	);
};