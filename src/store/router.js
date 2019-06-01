const initialState = {
  publicRoutes: {},
  privateRoutes: {}
};

const routerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PUBLIC_ROUTES": {
      return {
        ...state,
        publicRoutes: action.payload
      };
    }
    case "SET_PRIVATE_ROUTES": {
      return {
        ...state,
        privateRoutes: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default routerReducer;
