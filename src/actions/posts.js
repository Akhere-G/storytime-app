import * as api from "../api";
export const actionTypes = {
  FETCH_ALL: "FETCH_ALL",
  CREATE: "CREATE",
};

export const getPosts = () => async dispatch => {
  try {
    const response = await api.fetchPosts();
    const data = response.data;
    const action = { type: actionTypes.FETCH_ALL, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
