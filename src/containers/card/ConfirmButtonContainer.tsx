import React from 'react';
import ConfirmButton from 'components/card/ConfirmButton';
import { INPUT } from '../../constants';
import { useAppState } from 'hooks/hooks';

type Props = {
  children: React.ReactNode;
};

function ConfirmButtonContainer({ children }: Props) {
  const {
    firstInputCardNumber,
    secondInputCardNumber,
    thirdInputCardNumber,
    fourthInputCardNumber,
    expiredPeriodMonth,
    expiredPeriodYear,
    cvc,
    firstPassword,
    secondPassword,
  } = useAppState();

  let _disabled = true;
  if (
    firstInputCardNumber.length === INPUT.MAX_CARD_NUMBER_PART_LENGTH &&
    secondInputCardNumber.length === INPUT.MAX_CARD_NUMBER_PART_LENGTH &&
    thirdInputCardNumber.length === INPUT.MAX_CARD_NUMBER_PART_LENGTH &&
    fourthInputCardNumber.length === INPUT.MAX_CARD_NUMBER_PART_LENGTH &&
    expiredPeriodMonth.length === INPUT.MAX_EXPIRED_PERIOD_MONTH_LENGTH &&
    expiredPeriodYear.length === INPUT.MAX_EXPIRED_PERIOD_YEAR_LENGTH &&
    cvc.length === INPUT.MAX_CVC_LENGTH &&
    firstPassword.length === INPUT.MAX_FIRST_PASSWORD_LENGTH &&
    secondPassword.length === INPUT.MAX_SECOND_PASSWORD_LENGTH
  ) {
    _disabled = false;
  }

  const handleSubmitCard = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log('카드 등록완료!');
  };

  return (
    <ConfirmButton type="submit" onClick={handleSubmitCard} disabled={_disabled}>
      {children}
    </ConfirmButton>
  );
}

export default ConfirmButtonContainer;
