import { getDistinctColor } from './getDistinctColor.js';

const getCardInnerContentColor = (cardCompany) => {
  const companyMainColor = getComputedStyle(document.documentElement)
    .getPropertyValue(`--${cardCompany?.toLowerCase()}-color`)
    .trim();

  return getDistinctColor(companyMainColor);
};

export default getCardInnerContentColor;
