import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { connect } from 'react-redux';
import * as actions from 'actions';


// typically we define our routes in src/index.js
// but are doing it here for testing sake
class App extends Component {

    renderButton() {
        if (this.props.auth) {
            return (
                <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
            );
        }
        else {
            return (
                <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
            );
        }
    };

    renderHeader() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/post">Post a Comment</Link></li>
                    <li>{this.renderButton()}</li>                    
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox} />
                <Route path="/" exact component={CommentList} />
            </div>
        );
    };
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);