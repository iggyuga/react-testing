import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducers from 'reducers';

// The purpose of this file is to provide a way
// to generate a Provider and redux store for
// testing and the main application

export default (props) => {
	return (
		<Provider store={createStore(reducers, {})}>
			{props.children}
		</Provider>
	);
};