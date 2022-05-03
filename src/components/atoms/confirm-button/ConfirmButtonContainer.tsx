import React from 'react';
import { useAppState } from '../../../hooks/hooks';
import ConfirmButton from './ConfirmButton';

type Props = {
  children: React.ReactNode;
};

function ConfirmButtonContainer({ children }: Props) {
  const {
    firstInputCardNumber,
    secondInputCardNumber,
    thirdInputCardNumber,
    fourthInputCardNumber,
    expiredPeriod,
    name,
    cvc,
    firstPassword,
    secondPassword,
  } = useAppState();

  let _disabled = true;
  if (
    firstInputCardNumber.length === 4 &&
    secondInputCardNumber.length === 4 &&
    thirdInputCardNumber.length === 4 &&
    fourthInputCardNumber.length === 4 &&
    expiredPeriod.length === 4 &&
    cvc.length === 3 &&
    firstPassword.length === 1 &&
    secondPassword.length === 1
  ) {
    _disabled = false;
  }

  return (
    <ConfirmButton
      onClick={() => alert('다음으로 넘어갑니다')}
      {...(_disabled ? { disabled: true } : {})}
    >
      {children}
    </ConfirmButton>
  );
}

export default ConfirmButtonContainer;
