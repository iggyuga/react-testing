import { combineReducers } from 'redux';
import commentsReducers from 'reducers/comments';
import authReducers from 'reducers/auth';

export default combineReducers({
	comments: commentsReducers,
	auth: authReducers
});
