import REGEX from '../constants/regex';

export const secureNumber = (number: string) => {
  return number.replace(REGEX.allNumbers, '∙');
};
