export const REQUEST_DATA = 'REQUEST_DATA';
const requestData = () => ({
  type: REQUEST_DATA,
});

export const RECEIVE_DATA = 'RECEIVE_DATA';
const receiveData = json => ({
  type: RECEIVE_DATA,
  data: json.value,
});

export const fetchData = () => (dispatch) => {
  dispatch(requestData());
  return fetch('http://api.icndb.com/jokes/random/3')
    .then(res => res.json())
    .then(json => dispatch(receiveData(json)));
};
