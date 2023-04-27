import { useState } from 'react';

import { CARD_COMPANY } from '../constants/cardCompany';
import { CompanyDetail } from '../type/card';

export function useCompany() {
  const [value, setValue] = useState('');

  function handleClick(e: React.MouseEvent<HTMLImageElement>) {
    if (e.target instanceof HTMLImageElement) {
      console.log(e.target.id);
      // const clickedCompanyInfo = CARD_COMPANY[e.target.id];
      setValue(e.target.id);
      // COMPANY = e.target.id;
    }
  }

  return { value, handleClick };
}
