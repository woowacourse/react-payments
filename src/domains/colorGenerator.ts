import { COLOR } from '../constants/card';
import { COMPANY_LIST } from '../constants/company';

export const generateFontColor = (backgroundColor: string | null) => {
  return backgroundColor === COMPANY_LIST[2].BACKGROUND_COLOR
    ? COLOR.BLACK
    : COLOR.WHITE;
};
