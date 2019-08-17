import { GET_ALL_MATERIALS, ADD_NEW_MATERIAL, GET_USER_LIST, GET_MATERIAL_BY_ID, GET_TAGS } from '../constants';

export async function getAllMaterials() {
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

  const tasks = await (await fetch('https://ejam3.acarica.com/api/task/all', {
    method: 'GET',
  })).json();

  return (dispatch) => {
    dispatch({
      type: GET_ALL_MATERIALS,
      data: tasks,
    });
  };
}

export async function addNewMaterial(data) {
  await (await fetch('https://ejam3.acarica.com/api/save', {
    method: 'POST',
    body: JSON.stringify(data),
    // headers:{
    //   'Content-Type': 'application/json'
    // }
  })).json();
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

export function getTags() {
  // post to save data
  return async (dispatch) => {
    let tags = await (await fetch('https://ejam3.acarica.com/api/tag/all')).json();

    tags = tags.map(i => ({name: i}));

    dispatch({
      type: GET_TAGS,
      data: tags,
    });
  };
}
