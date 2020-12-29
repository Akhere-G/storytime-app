import { actionTypes } from "../actions/posts";

const reducer = (posts = [], action) => {
  console.log("in reducer post");
  switch (action.type) {
    case actionTypes.UPDATE:
      console.log("Updating in reducer");
      return posts.map(post =>
        post._id === action.payload._id ? action.payload : post
      );
    case actionTypes.FETCH_ALL:
      return action.payload;
    case actionTypes.CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default reducer;
