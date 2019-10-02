import api from '../../api';

import {
  GET_ELEMENTS_SUCCESS,
  GET_ELEMENTS_FAILURE,
  GET_ELEMENTS_REQUEST,
} from './elementsConstants';


function getElementsRequest() {
  return {
    type: GET_ELEMENTS_REQUEST,
  };
}

function getElementsSuccess(data) {
  return {
    type: GET_ELEMENTS_SUCCESS,
    payload: data,
  };
}

function getElementsFailure(data) {
  return {
    type: GET_ELEMENTS_FAILURE,
    payload: data,
  };
}

function getElements() {
  getElementsRequest();
  return dispatch => (api.elements.getAll().then((response) => {
    const responseData = response.data;
    if (responseData.status) {
      const elementsData = responseData.data;
      dispatch(getElementsSuccess(elementsData));
    } else {
      dispatch(getElementsFailure(responseData.statusText));
    }
  }).catch(error => dispatch(getElementsFailure(error))));
}


export default {
  getElements,
};
