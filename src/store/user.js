const initialUser = {
  id: null,
  token: null
};

const reducer = (state = initialUser, action) => {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token
      };
    }
    case "REMOVE_USER": {
      return {
        ...state,
        id: null,
        token: null
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
