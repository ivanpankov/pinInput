import {
  TOGGLE_MESSAGES,
  CLEAR_MESSAGES,
  PIN_SAVE_SUCCESS,
  PIN_IS_NOT_VALID,
  PIN_DOES_NOT_MATCH
} from "../constants/messages";

const initialState = {
  [PIN_SAVE_SUCCESS]: false,
  [PIN_IS_NOT_VALID]: false,
  [PIN_DOES_NOT_MATCH]: false
};

const messages = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MESSAGES:
      return { ...initialState, ...action.data };

    case CLEAR_MESSAGES:
      return { ...initialState };

    default:
      return state;
  }
};

export default messages;
