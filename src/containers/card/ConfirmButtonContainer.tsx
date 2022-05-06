import React from 'react';
import axios from 'axios';
import ConfirmButton from 'components/card/ConfirmButton';
import { useAppState } from 'hooks/hooks';

type CardType = {
  firstInputCardNumber: string;
  secondInputCardNumber: string;
  thirdInputCardNumber: string;
  fourthInputCardNumber: string;
  name: string;
  expiredPeriodMonth: string;
  expiredPeriodYear: string;
  cvc: string;
  firstPassword: string;
  secondPassword: string;
  cardType: string;
  cardAlias: string;
};

function ConfirmButtonContainer() {
  const {
    firstInputCardNumber,
    secondInputCardNumber,
    thirdInputCardNumber,
    fourthInputCardNumber,
    name,
    expiredPeriodMonth,
    expiredPeriodYear,
    cvc,
    firstPassword,
    secondPassword,
    cardType,
    cardAlias,
  } = useAppState();
  const handleConfirmCard = async () => {
    const response = await axios('http://localhost:4004/cards', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        firstCardNumber: firstInputCardNumber,
        secondCardNumber: secondInputCardNumber,
        thirdCardNumber: thirdInputCardNumber,
        fourthCardNumber: fourthInputCardNumber,
        ownerName: name,
        month: expiredPeriodMonth,
        year: expiredPeriodYear,
        cvcNum: cvc,
        firstPasswordNum: firstPassword,
        secondPasswordNum: secondPassword,
        type: cardType,
        alias: cardAlias,
      }),
    });
    // 에러처리
    console.log(response);

    window.location.pathname = '/';
  };

  let _disabled = true;
  if (cardAlias !== '') {
    _disabled = false;
  }

  return (
    <ConfirmButton type="button" onClick={handleConfirmCard} disabled={_disabled}>
      확인
    </ConfirmButton>
  );
}

export default ConfirmButtonContainer;
