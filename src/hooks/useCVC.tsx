import { ChangeEvent, FocusEvent, useCallback, useState } from 'react';

import { ERROR_MESSAGE } from 'constants/index';

export default function useCVC(initialValue: string) {
  const [CVC, setCVC] = useState(initialValue);

  const handleCVC = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    // 정규식: 숫자로 구성된 문자열이 아니면
    if (!/^$|^[0-9]{0,3}$/.test(target.value)) return;

    target.setCustomValidity('');

    setCVC(target.value);
  }, []);

  const showCVCValidation = ({ target }: FocusEvent<HTMLInputElement>) => {
    if (target.validity.tooShort) {
      target.setCustomValidity(ERROR_MESSAGE.INVALID_CVC);
      target.reportValidity();
    }
  };

  return { CVC, handleCVC, showCVCValidation };
}
