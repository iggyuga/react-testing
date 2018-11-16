import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
beforeEach(() => {

    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    };

    // This initial state is optional and comes from Root,
    // but for this test it will use the above initialState
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});


it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

// wrapped.render() will return the cheerio element
it('shows the text for each comment', () => {
    //console.log(wrapped.render().text())
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
});