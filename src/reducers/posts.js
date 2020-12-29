import { actionTypes } from "../actions/posts";

const reducer = (posts = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL:
      return action.payload;
    case actionTypes.CREATE:
      return [...posts, action.payload];
    case actionTypes.UPDATE:
      return posts.map(post =>
        post._id === action.payload.id ? action.payload : post
      );
    default:
      return posts;
  }
};

export default reducer;
