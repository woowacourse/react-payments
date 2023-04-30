import useCardFormValue from './useCardFormValue';
import { isValidExpiredDate } from '../utils/validation';

const useCardFormValidation = () => {
  const { company, number, expiredDate, cvc, password } = useCardFormValue();

  const isValidCardData =
    number.first.length === 4 &&
    number.second.length === 4 &&
    number.third.length === 4 &&
    number.fourth.length === 4 &&
    expiredDate.month.length === 2 &&
    expiredDate.year.length === 2 &&
    cvc.length === 3 &&
    password.first.length === 1 &&
    password.second.length === 1;

  const validateCompany = () => {
    if (!company) {
      throw new Error(
        '현재 카드사를 선택하지 않았습니다. 카드사를 선택해주세요.',
      );
    }
  };

  const validateExpiredDate = () => {
    if (
      !isValidExpiredDate(Number(expiredDate.month), Number(expiredDate.year))
    ) {
      throw new Error('유효한 만료일이 아닙니다. 다시 입력해주세요.');
    }
  };

  return { isValidCardData, validateCompany, validateExpiredDate };
};

export default useCardFormValidation;
