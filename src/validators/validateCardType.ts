import { CARD_TYPE } from '../constants/cardType';
import getObjectValues from '../utils/getObjectValues';
import { IErrorStatus } from './index.d';

const validateCardType = (value: string): IErrorStatus => {
  if (!getObjectValues<string>(CARD_TYPE).includes(value)) {
    return { errorMessage: '유효하지 않은 카드입니다.', isError: true };
  }
  return { errorMessage: '', isError: false };
};

export default validateCardType;
