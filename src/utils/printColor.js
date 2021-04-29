import { COLOR } from '../constants/color';

export const printColorBasedOnBoolean = boolean => {
  return boolean ? COLOR.GREEN_400 : COLOR.RED_700;
};
