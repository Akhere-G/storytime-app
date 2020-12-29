import { actionTypes } from "../actions/posts";

const reducer = (posts = [], action) => {
  console.log("in reducer");
  switch (action.type) {
    case actionTypes.CREATE:
      return [...posts, action.payload];

    case actionTypes.FETCH_ALL:
      return action.payload;

    case actionTypes.UPDATE:
      return posts.map(post =>
        post._id === action.payload._id ? action.payload : post
      );

    case actionTypes.DELETE:
      return posts.filter(post => {
        return post._id !== action.payload._id;
      });
    case actionTypes.LIKE_POST:
      console.log("In like case in reducer");

      return posts.map(post =>
        post._id === action.payload._id ? action.payload : post
      );

    default:
      return posts;
  }
};

export default reducer;
