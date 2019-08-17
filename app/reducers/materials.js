import {
  GET_ALL_MATERIALS,
  GET_USER_LIST,
  GET_MATERIAL_BY_ID,
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
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MATERIALS:
      return {
        ...state,
        list: action.data,
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
    default:
      return state;
  }
};
