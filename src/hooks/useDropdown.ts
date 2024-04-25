import { useState } from 'react';
import { ERROR_MESSAGES } from '../constants/errorMessages';

// 커스텀 드롭다운을 위한 훅
const useDropdown = <T>() => {
  const [selected, setSelected] = useState<T | null>(null);
  const [errorMessage, setErrorMessages] = useState<string>('');

  // 드롭다운을 선택하지 않으면 오류가 난다.
  const handleSelect = (selected: T | null) => {
    if (selected === null) {
      setErrorMessages(ERROR_MESSAGES.NO_SELECT);
      return;
    }

    setErrorMessages('');
    setSelected(selected);
  };

  return {
    selected,
    handleSelect,
    errorMessage,
  };
};

export default useDropdown;
