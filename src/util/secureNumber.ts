import REGEX from '../constants/regex';

export const secureNumber = (number: string, mask: string = '∙') => {
  return number.replace(REGEX.allNumbers, mask);
};
