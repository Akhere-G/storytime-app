import { actionTypes } from "../actions/posts";

const reducer = (posts = [], action) => {
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
      console.log("liked post in here", action.payload.likeCount);
      return posts.map(post =>
        post._id === action.payload._id
          ? { ...post, likeCount: action.payload.likeCount }
          : post
      );

    default:
      return posts;
  }
};

export default reducer;
