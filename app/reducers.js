/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import reducerUser from './reducers/user';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = {
  location: null,
};

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  const appReducer = combineReducers({
    user: reducerUser,
    ...injectedReducers,
  });
// eslint-disable-next-line arrow-body-style
  return (state, action) => {
    // TODO: clear after login
    // if (action.type === USER_LOGOUT) {
    //   // eslint-disable-next-line no-param-reassign
    //   state = undefined;
    // }

    return appReducer(state, action);
  };
}
