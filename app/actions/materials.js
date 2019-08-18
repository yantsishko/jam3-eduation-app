import { GET_ALL_MATERIALS, ADD_COUNTER, GET_USER_LIST, GET_MATERIAL_BY_ID, GET_TAGS } from '../constants';

export function getAllMaterials() {
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

export function getAuthorMaterials(id) {
  return async (dispatch) => {
    const tasks = await (await fetch(`https://ejam3.acarica.com/api/task/author/${id}`, {
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

export function voteMaterial(taskId) {
  return async () => {
    await fetch(`https://ejam3.acarica.com/api/task/upvote/${taskId}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export function addNotyficationCounter() {
  return async (dispatch) => {
    dispatch({
      type: ADD_COUNTER,
    });
  }
}
