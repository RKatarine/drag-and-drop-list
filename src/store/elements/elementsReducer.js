import createReducer from '../createReducer';

import {
  GET_ELEMENTS_SUCCESS,
  GET_ELEMENTS_FAILURE,
  GET_ELEMENTS_REQUEST,
} from './elementsConstants';

const initialState = {
  statusText: '',
  elements: [],
};


export default createReducer(initialState, {
   [GET_ELEMENTS_SUCCESS]: (state, payload) => Object.assign({}, state, {
    elements: payload,
  }),
  [GET_ELEMENTS_FAILURE]: (state, payload) => Object.assign({}, state, {
    elements: [],
    statusText: payload,
  }),
  [GET_ELEMENTS_REQUEST]: (state, payload) => Object.assign({}, state, {
    statusText: 'Запрос на получение элементов списка',
  }),
});

