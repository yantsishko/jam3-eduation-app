import {
  USER_GET,
  USER_IS_MOBILE_CHECK,
} from '../constants';

const initialState = {
  phone: '',
  isTabletDevice: false,
  isPhoneDevice: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_GET:
      return {
        ...state,
        phone: action.phone,
      };
    case USER_IS_MOBILE_CHECK:
      return {
        ...state,
        isTabletDevice: window.screen.availWidth <= 1024 && window.screen.availWidth >= 768,
        isPhoneDevice: window.screen.availWidth < 768,
      };
    default:
      return state;
  }
};
