import { REQUEST_DATA, RECEIVE_DATA, RANDOM_STORY } from '../actions';

const initialState = {
  isFetching: false,
  data: [],
  randomStory: 0,
};

const randomStory = length => Math.floor(Math.random() * length);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return { ...state, isFetching: true };
    case RECEIVE_DATA:
      return { ...state, isFetching: false, data: action.data };
    case RANDOM_STORY:
      return { ...state, randomStory: randomStory(state) };
    default:
      return state;
  }
};

export default reducer;
