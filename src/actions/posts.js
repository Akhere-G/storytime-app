import * as api from "../api";
export const actionTypes = {
  FETCH_ALL: "FETCH_ALL",
  CREATE: "CREATE",
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
