const INITIAL_STATE = {};

function RootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "":
      return {};

    default:
      return state;
  }
}

export default RootReducer;
