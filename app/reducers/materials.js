import {
  GET_ALL_MATERIALS,
} from '../constants';

const initialState = {
  list: [],
  cardList: [{
    title: 'Title',
    text: 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext text text texttexttexttext',
    status: true,
    author: 'auth',
    tag: 'tag',
    id: 12313123,
    showAuthor: false,
  }],
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
