import { useState } from 'react';

import {
  CardPreviewInfoContext,
  defaultInput,
  optionalInput,
  passwordInput,
} from './cardPreviewInfoContext';
import { useInput } from '../hooks/useInput';
import { cardRegisterValidator } from '../validation/cardRegister';

export default function CardPreviewInfoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [company, setCompany] = useState('');

  function handleClick(e: React.MouseEvent<HTMLImageElement>) {
    if (e.target instanceof HTMLImageElement) {
      setCompany(e.target.id);
    }
  }

  const previewInfo = {
    cardNumber: {
      first: {
        ...defaultInput,
        ...useInput(cardRegisterValidator.cardNumber),
      },
      second: {
        ...defaultInput,
        ...useInput(cardRegisterValidator.cardNumber),
      },
      third: {
        ...passwordInput,
        ...useInput(cardRegisterValidator.cardNumber),
      },
      fourth: {
        ...passwordInput,
        ...useInput(cardRegisterValidator.cardNumber),
      },
    },
    expiredDate: {
      month: {
        ...defaultInput,
        ...useInput(cardRegisterValidator.month),
      },
      year: {
        ...defaultInput,
        ...useInput(cardRegisterValidator.year),
      },
    },
    username: {
      first: {
        ...optionalInput,
        ...useInput(cardRegisterValidator.username),
      },
    },
    company: {
      clicked: { value: company, handleClick: handleClick },
    },
  };

  return (
    <CardPreviewInfoContext.Provider value={previewInfo}>
      {children}
    </CardPreviewInfoContext.Provider>
  );
}
