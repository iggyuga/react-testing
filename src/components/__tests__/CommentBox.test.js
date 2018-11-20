import React from "react";
import { mount } from "enzyme";
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;
beforeEach(() => {
	wrapped = mount(
	<Root>
		<CommentBox />
	</Root>
	);
});

afterEach(() => {
	wrapped.unmount();
});

it('has a text area and 2 buttons', () => {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(2);
});

//describe can be used to group sets of tests that have common setup
// and or tear down
// best used to create new scope for a set of tests
describe('the textarea', () => {
	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: { value: 'new comment'}
		});
		wrapped.update();
	});
	// change, mock, we need to simulate a change event
	// event.target.value where we specify a test value
	it('has a text area that users can type in', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
	});

	it('when form is submitted, text area gets emptied', () => {
		// this is extra assurance that the textarea got updated
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

		wrapped.find('form').simulate('submit');
		// again after we submit we need to force our component to rerender
		wrapped.update();

		expect(wrapped.find('textarea').prop('value')).toEqual('');

	});
})
