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
    console.log(error);
  }
};

export const createPost = post => async dispatch => {
  try {
    const { data } = await api.createPost(post);
    const action = { type: actionTypes.CREATE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async dispatch => {
  try {
    console.log("In updateAction");

    const res = await api.updatePost(id, post);
    console.log(res);
    const data = await res?.data;
    console.log("about in patch in actions");
    const action = { type: actionTypes.UPDATE, payload: data };
    console.log("fetched, about to dispatch");

    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
