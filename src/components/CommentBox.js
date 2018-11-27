import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
    state = { comment: '' };

    
    handleChange = (event) => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
        this.props.saveComment(this.state.comment);
        
        this.setState({ comment: '' });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
        // no fetchComments() parens, we want a callback, just give a reference for now
        // we do not want to fetch the comments when this component renders
    }
}

// Here our mapStateToProps is coming from our higher order component,
// also we need to pass our actions and history (as props)
export default connect(null, actions)(requireAuth(CommentBox));