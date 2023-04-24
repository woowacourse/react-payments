import { useState } from 'react';
import type { CardInformation } from '../../Common/Card/types';

function useCardForm() {
  const [cardNumber, setCardNumber] = useState<string[]>(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState<string[]>(['MM', 'YY']);
  const [owner, setOwner] = useState<string[]>(['NAME']);
  const [securityCode, setSecurityCode] = useState<string[]>(['']);
  const [password, setPassword] = useState<string[]>(['', '']);

  return {
    card: { cardNumber, expirationDate, owner, securityCode, password } as unknown as CardInformation,
    setCardNumber,
    setExpirationDate,
    setOwner,
    setSecurityCode,
    setPassword,
  };
}

export default useCardForm;
