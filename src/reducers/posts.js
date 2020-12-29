import { actionTypes } from "../actions/posts";

const reducer = (posts = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL:
      return action.payload;
    case actionTypes.CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default reducer;
