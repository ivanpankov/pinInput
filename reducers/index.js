import { combineReducers } from "redux";
import pinNumber from "./pinNumber";
import messages from './messages';

const rootReducer = combineReducers({
  pinNumber,
  messages
});

export default rootReducer;
