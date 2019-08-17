import {
  USER_GET,
  USER_IS_MOBILE_CHECK,
} from './../constants';

export function isMobileCheck() {
  return (dispatch) => {
    dispatch({
      type: USER_IS_MOBILE_CHECK,
    });
  };
}
