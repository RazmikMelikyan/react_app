import {
  CREATE_NOTE_SUCCESS, GET_NOTES_SUCCESS, DELETE_NOTE_SUCCESS, UPDATE_NOTE_SUCCESS,
} from '../actions/notes';

const initialState = {
  data: {},
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE_NOTE_SUCCESS: {
      console.log(action.payload, 'SET_DATA_SUCCESS');
      console.log(state, 'stststststststststst');
      return {
        ...state,
        data: action.payload,
        dataStatus: 'ok',
      };
    }
    case GET_NOTES_SUCCESS: {
      console.log(action.payload, 'GET_DATA_SUCCESS');
      return {
        ...state,
        data: action.payload.data,
        dataStatus: 'ok',
      };
    }
    case DELETE_NOTE_SUCCESS: {
      console.log(action.payload, 'DELETE_DATA_SUCCESS');
      return {
        ...state,
        data: action.payload.data,
        dataStatus: 'ok',
      };
    }
    case UPDATE_NOTE_SUCCESS: {
      console.log(action.payload, 'UPDATE_DATA_SUCCESS');
      return {
        ...state,
        data: action.payload.data,
        dataStatus: 'ok',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
