import { useState } from 'react';

import { CardCompany, InputStatus } from '../type';

const useSelectCardCompany = (
  statusDispather: (str: CardCompany) => InputStatus,
  init: CardCompany = '카드사 선택'
) => {
  const [value, setValue] = useState<CardCompany>(init);
  const [status, setStatus] = useState<InputStatus>('INIT');

  const changeCardCompany = (str: CardCompany) => {
    setStatus(statusDispather(str));
    setValue(str);
  };

  return { value, status, changeCardCompany };
};

export default useSelectCardCompany;
