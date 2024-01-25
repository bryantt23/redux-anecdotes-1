const initialState = { filterText: "" }

const filterReducer = (state = initialState, action) => {
  console.log('state now: ', state);
  console.log('action', action);
  switch (action.type) {
    case 'FILTER_ANECDOTE':
      return { ...state, filterText: action.payload }
    default:
      return state;
  }

};

export default filterReducer;
