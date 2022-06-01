import React from 'react';
import useWatch from '../../../../../hooks/useForm/useWatch';
import ConfirmButton from './ConfirmButton';

type Props = {
  children: React.ReactNode;
};

function ConfirmButtonContainer({ children }: Props) {
  const [cn1, cn2, cn3, cn4] = [
    useWatch<string>('card-number-1'),
    useWatch<string>('card-number-2'),
    useWatch<string>('card-number-3'),
    useWatch<string>('card-number-4'),
  ];
  const [expiredPeriod1, expiredPeriod2] = [useWatch<string>('expired-period-1'), useWatch<string>('expired-period-2')];
  const cvc = useWatch<string>('cvc');
  const [password1, password2] = [useWatch<string>('password-1'), useWatch<string>('password-2')];
  const cardNumber = `${cn1}${cn2}${cn3}${cn4}`;
  const expiredPeriod = `${expiredPeriod1}${expiredPeriod2}`;
  const password = `${password1}${password2}`;

  const disabled = !(cardNumber.length === 16 && expiredPeriod.length === 4 && cvc.length > 2 && password.length === 2);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ConfirmButton disabled={disabled}>{children}</ConfirmButton>
  );
}

export default ConfirmButtonContainer;
