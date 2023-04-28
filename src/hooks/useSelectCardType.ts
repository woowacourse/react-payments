import { useState } from 'react';
import { InputStatus } from '../type';

const useSelectCardType = (statusDispather: (str: string) => InputStatus, init = '') => {
  const [cardCompany, setCardCompany] = useState(init);
  const [status, setStatus] = useState<InputStatus>('INIT');

  const changeCardCompany = (str: string) => {
    setStatus(statusDispather(str));
    setCardCompany(str);
  };

  return { cardCompany, status, changeCardCompany };
};

export default useSelectCardType;
