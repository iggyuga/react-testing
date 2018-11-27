// 1. object with props (only care about) 'dispatch'
//      dispatch is the catalyst to send off the action to the middleware chain
//      down to the reducers
// 2. next, reference to the next middleware
// 3. action, the actual action being invoked from the actioncreator
// export default function ({ dispatch }) {
//     return function (next) {
//         return function (action) {
            
//         }
//     }
// }

// boilerplate for creating middleware
export default ({ dispatch }) => next => action => {
    // Check to see if the action has a promise
    // on it's 'payload' property if it does,
    // then wait for it to resolve, it not, then send
    // the action to the next middleware

    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    // We want to wait for the promise to resolve
    // then create a new action with that data and dispatch it

    action.payload.then(function (response) {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    })


}