import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// As the function name indicates before each test
// we are going to initialze our 'wrapped' component
let wrapped;
beforeEach(() => {
	wrapped = shallow(<App />);
});

it('Shows a comment box', () => {
	// const div = document.createElement('div');

	// ReactDOM.render(<App />, div)

	// // Looks inside the div and
	// // checks to see if the CommentBox is there
	// console.log(div.innerHTML);


	// ReactDOM.unmountComponentAtNode('div');
	// can use component
	expect(wrapped.find(CommentBox).length).toEqual(1);

});

// Here using enzyme helps create an expectation
// that our App contains an instance of a specificed component
it('Shows a comment list', () => {
	expect(wrapped.find(CommentList).length).toEqual(1);
})