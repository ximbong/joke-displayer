import { REQUEST_DATA, RECEIVE_DATA } from '../actions';

const reducer = (
  state = {
    isFetching: false,
    data: [],
  },
  action,
) => {
  switch (action.type) {
    case REQUEST_DATA:
      return { ...state, isFetching: true };
    case RECEIVE_DATA:
      return { ...state, isFetching: false, data: action.data };
    default:
      return state;
  }
};

export default reducer;
