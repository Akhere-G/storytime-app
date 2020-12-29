import * as api from "../api";
export const actionTypes = {
  CREATE: "CREATE",
  FETCH_ALL: "FETCH_ALL",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  LIKE_POST: "LIKE_POST",
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

export const getPosts = () => async dispatch => {
  try {
    const { data } = await api.fetchPosts();
    const action = { type: actionTypes.FETCH_ALL, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async dispatch => {
  try {
    await api.updatePost(id, post);
    const action = { type: actionTypes.UPDATE, payload: post };

    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = id => async dispatch => {
  try {
    await api.deletePost(id);

    const action = { type: actionTypes.DELETE, payload: { _id: id } };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const likePost = id => async dispatch => {
  try {
    const { data } = await api.likePost(id);

    const action = { type: actionTypes.LIKE_POST, payload: data };

    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
