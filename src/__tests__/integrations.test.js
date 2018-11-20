import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from "moxios";

let wrapped;
// Setup moxios, intercept any request from axios
beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetch #1'}, { name: 'Fetched #2' }]
    });
});

afterEach(() => {
    moxios.uninstall();
    wrapped.unmount();
});

// jest callback 'done' a self check to ensure completeness
it('can fetch a list of comments and display them', (done) => {
    // Attempt to render the *entire* app
    wrapped = mount(
        <Root>
            <App />
        </Root>
    );


    // find the 'fetchComments' button and click it to 
    // kick off the action creator request, axios will make the request,
    // it will get intercepted by moxios and respond
    wrapped.find('.fetch-comments').simulate('click');

    // we need to create a pause for moxios to react,
    // also we need to update our mocked components from when the simulate is called
    moxios.wait(() => {
        wrapped.update();
        // expect to find a list of comments
        expect(wrapped.find('li').length).toEqual(2);
        done();
        //wrapped.unmount();
    });


});