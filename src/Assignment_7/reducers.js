const initialState = {
  userId: '',
  posts: [],
  comments: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_ID':
      return {
        ...state,
        userId: action.payload,
      };
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.payload,
      };
    case 'SET_COMMENTS':
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
