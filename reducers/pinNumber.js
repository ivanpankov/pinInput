import { SAVE_PIN_NUMBER } from '../constants/pinNumber';

const initialState = {
  value: ''
};

const pinNumberReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case SAVE_PIN_NUMBER:
      return { ...action.data };

    default:
      return state;
  }
};

export default pinNumberReducer;
