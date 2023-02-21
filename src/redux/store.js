import axios from 'axios';

const LOAD_GREETINGS = 'LOAD_GREETINGS';
const URL = 'http://localhost:3001/api/v1/greetings';

const initialState = {};

export const fetchGreetings = () => async (dispatch) => {
  try {
    axios.get(URL).then((payload) => {
      dispatch({ type: LOAD_GREETINGS, payload });
    }).catch((err) => {
      dispatch({ type: 'ERROR', err });
    });
  } catch (error) {
    dispatch({ type: 'ERROR' });
  }
};

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GREETINGS:
      return action.payload.data.data;
    default:
      return state;
  }
};

export default greetingsReducer;
