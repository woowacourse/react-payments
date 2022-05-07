import React from 'react';
import axios from 'axios';
import ConfirmButton from 'components/card/ConfirmButton';
import { useAppState } from 'hooks/hooks';
import { removePathnameCardEdit } from 'utils';

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
    const cardId = removePathnameCardEdit(window.location.pathname);
    let pathName = '';
    let methodType = '';

    if (window.location.pathname.includes('/card/add')) {
      pathName = 'http://localhost:4004/cards';
      methodType = 'post';
    } else if (window.location.pathname.includes('/card/edit/')) {
      pathName = `http://localhost:4004/cards/${cardId}`;
      methodType = 'patch';
    }

    const response = await axios(pathName, {
      method: methodType,
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
