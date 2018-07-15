import { TOGGLE_MESSAGES, CLEAR_MESSAGES } from "../constants/messages";

export const toggleMessages = data => ({
  type: TOGGLE_MESSAGES,
  data
});


export const clearMessages = data => ({
  type: CLEAR_MESSAGES
});