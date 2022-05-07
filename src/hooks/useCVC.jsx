import { ERROR_MESSAGE } from 'constants';
import { useState, useCallback } from 'react';

export default function useCVC(initialValue) {
  const [CVC, setCVC] = useState(initialValue);

  const handleCVC = useCallback(({ target }) => {
    // 정규식: 숫자로 구성된 문자열이 아니면
    if (!/^$|^[0-9]{0,3}$/.test(target.value)) return;

    target.setCustomValidity('');

    setCVC(target.value);
  }, []);

  const showCVCValidation = ({ target }) => {
    if (target.validity.tooShort) {
      target.setCustomValidity(ERROR_MESSAGE.INVALID_CVC);
      target.reportValidity();
    }
  };

  return { CVC, handleCVC, showCVCValidation };
}
