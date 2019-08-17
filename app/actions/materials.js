import { GET_ALL_MATERIALS, ADD_NEW_MATERIAL, GET_USER_LIST, GET_MATERIAL_BY_ID } from '../constants';

export function getAllMaterials() {
  const list = [
    {
      title: "Title",
      text: "Some text about math",
      tag: "math",
      author: "Yan T",
      status: false,
      id: 2312323
    },
    {
      title: "Title",
      text: "Some text about math",
      tag: "math",
      author: "Yan T",
      status: true,
      id: 233332
    },
    {
      title: "Title",
      text: "Some text about math",
      tag: "math",
      author: "Ivan P",
      status: true,
      id: 223132130,
    }
  ];

  return (dispatch) => {
    dispatch({
      type: GET_ALL_MATERIALS,
      data: list,
    });
  };
}

export function addNewMaterial(data) {
  // post to save data
  return (dispatch) => {
    dispatch({
      type: ADD_NEW_MATERIAL,
      data: list,
    });
  };
}

export const getUserList = (data) => ((dispatch) => 
  dispatch({
    type: GET_USER_LIST,
    data,
  }))

export const getMaterialById = (id) => ((dispatch) => 
dispatch({
  type: GET_MATERIAL_BY_ID,
  data: id,
}))
