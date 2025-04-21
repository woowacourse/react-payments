import { useState } from 'react';

function useCardInfo() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    number: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    expiration: {
      month: '',
      year: '',
    },
    cvc: '',
    passwordFront: '',
  });

  function handleCardInfo(
    field: keyof CardInfo,
    value: string,
    subfield?: keyof CardNumber | keyof Expiration
  ) {
    if ((field === 'number' || field === 'expiration') && subfield) {
      setCardInfo({
        ...cardInfo,
        [field]: {
          ...cardInfo[field],
          [subfield]: value,
        },
      });
    }

    if (field === 'cvc' || field === 'passwordFront') {
      setCardInfo({
        ...cardInfo,
        [field]: value,
      });
    }
  }

  return { cardInfo, handleCardInfo };
}

export default useCardInfo;
