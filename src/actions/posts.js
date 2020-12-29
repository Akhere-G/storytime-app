import * as api from "../api";
export const actionTypes = {
  FETCH_ALL: "FETCH_ALL",
  CREATE: "CREATE",
  UPDATE: "UPDATE",
};

export const getPosts = () => async dispatch => {
  try {
    const { data } = await api.fetchPosts();
    const action = { type: actionTypes.FETCH_ALL, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = post => async dispatch => {
  try {
    const { data } = await api.createPost(post);
    const action = { type: actionTypes.CREATE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async dispatch => {
  try {
    console.log("trying");

    const { data } = await api.updatePost(id, post);
    console.log("did it");

    const action = { type: actionTypes.UPDATE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log("Failed");

    console.log(error.message);
  }
};
