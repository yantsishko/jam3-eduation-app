import {
  GET_ALL_MATERIALS,
} from '../constants';

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MATERIALS:
      return {
        ...state,
        list: action.data,
      };
    default:
      return state;
  }
};
