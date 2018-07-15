import { SAVE_PIN_NUMBER } from "../constants/pinNumber";

export const savePinNumber = data => ({
    type: SAVE_PIN_NUMBER,
    data
});
