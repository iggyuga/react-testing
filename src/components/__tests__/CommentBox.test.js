import React from "react";
import { mount } from "enzyme";
import CommentBox from 'components/CommentBox';

let wrapped;
beforeEach(() => {
	wrapped = mount(<CommentBox />);
});

afterEach(() => {
	wrapped.unmount();
});

it('has a text area and a button', () => {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(1);
});

// change, mock, we need to simulate a change event
// event.target.value where we specify a test value
it('has a text area that users can type in', () => {
	wrapped.find('textarea').simulate('change', {
		target: { value: 'new comment'}
	})
})