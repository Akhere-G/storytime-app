const actionTypes = {
  FETCH_ALL: "FETCH_ALL",
  CREATE: "CREATE",
};

const reducer = (state = { actionTypes, posts: [] }, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL:
      return state;
    case actionTypes.CREATE:
      return state;
    default:
      return state;
  }
};

export default reducer;
