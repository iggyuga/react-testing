import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => next => action => {
    // we really want to pass along this action to the next set of middlewares
    // to be able to hit the reducers, we are check state last here
    next(action);

    if (!tv4.validate(getState(), stateSchema)) {
        console.warn('Invalid state schema detected');
    }
};