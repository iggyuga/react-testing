import React, { Component } from 'react';
import { connect } from 'react-redux';

// higher order component boilerplate,
// we are injecting an additional component
// so that we can add additional reusable functionality
export default (ChildComponent) => {
    class ComposedComponent extends Component {

        // our component just got rendered
        componentDidMount() {
            this.shouldNavigateAway();
        }

        // our component just received a new set of props
        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if (!this.props.auth) {
                ////console.log('I need to leave!!');
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent />;
        }
    }

    function mapStateToProps(state) {
        return { auth: state.auth };
    }

    return connect(mapStateToProps)(ComposedComponent);
};

// // Imagine we are in CommentBox.js

// import requireAuth from 'components/requrieAuth';

// class CommentBox {

// }

// // CommentBox is the ChildComponent
// export default requireAuth(CommentBox);

// import CommentBox from 'components/CommentBox';