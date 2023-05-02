import { useState } from 'react';

import { CardCompany, InputStatus } from '../type';

const useSelectCardCompany = (
  statusDispather: (str: CardCompany) => InputStatus,
  init: CardCompany = '카드사 선택'
) => {
  const [cardCompany, setCardCompany] = useState<CardCompany>(init);
  const [status, setStatus] = useState<InputStatus>('INIT');

  const changeCardCompany = (str: CardCompany) => {
    setStatus(statusDispather(str));
    setCardCompany(str);
  };

  return { cardCompany, status, changeCardCompany };
};

export default useSelectCardCompany;
