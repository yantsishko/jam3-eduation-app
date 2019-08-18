import {
  GET_ALL_MATERIALS,
  GET_USER_LIST,
  GET_MATERIAL_BY_ID,
  GET_TAGS, ADD_COUNTER,
} from '../constants';

const initialState = {
  list: [],
  cardList: [{
    title: 'Title',
    text: 'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext text text texttexttexttext',
    status: true,
    author: 'auth',
    tag: 'tag',
    id: '12313123',
    showAuthor: false,
  }],
  tags: [],
  counter: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MATERIALS:
      return {
        ...state,
        list: action.data,
      };
    case GET_TAGS:
      return {
        ...state,
        tags: action.data,
      };
    case GET_USER_LIST:
      return {
        ...state,
        cardList: action.data
      };
    case GET_MATERIAL_BY_ID:
      return {
        ...state,
        material: action.data
      }
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      }
    default:
      return state;
  }
};
