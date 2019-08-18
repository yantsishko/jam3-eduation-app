import { GET_ALL_MATERIALS, ADD_NEW_MATERIAL, GET_USER_LIST, GET_MATERIAL_BY_ID, GET_TAGS } from '../constants';

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

  return async (dispatch) => {
    const tasks = await (await fetch('https://ejam3.acarica.com/api/task/all', {
      method: 'GET',
      credentials: 'include'
    })).json();
    dispatch({
      type: GET_ALL_MATERIALS,
      data: tasks,
    });
  };
}

export function addNewMaterial(data) {
  // post to save data
  return async (dispatch) => {
    await (await fetch('https://ejam3.acarica.com/api/task/save', {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers:{
        'Content-Type': 'application/json'
      }
    })).json();
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

export function getTags() {
  // post to save data
  return async (dispatch) => {
    let tags = await (await fetch('https://ejam3.acarica.com/api/tag/all', {
      credentials: 'include'
    })).json();

    tags = tags.map(i => ({name: i}));

    dispatch({
      type: GET_TAGS,
      data: tags,
    });
  };
}
