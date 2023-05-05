import useCardFormValue from './useCardFormValue';
import { isValidExpiredDate } from '../utils/validation';

const useCardFormValidation = () => {
  const { company, expiredDate } = useCardFormValue();

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

  return { validateCompany, validateExpiredDate };
};

export default useCardFormValidation;
