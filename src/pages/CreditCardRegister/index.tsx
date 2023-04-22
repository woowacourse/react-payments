import * as Type from '@Types/index';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CreditCard from '@Components/CreditCard';

import creditCard from '@Domains/creditCard';

import useInput from '@Hooks/useInput';

import localStorageHelper from '@Utils/localStorageHelper';

import CreditCardCVCInput from './components/CreditCardCVCInput';
import CreditCardExpiryInput from './components/CreditCardExpiryInput';
import CreditCardNumberInput from './components/CreditCardNumberInput';
import CreditCardOwnerInput from './components/CreditCardOwnerInput';
import CreditCardPasswordInput from './components/CreditCardPasswordInput';
import * as S from './style';

function CreditCardRegister() {
  const navigate = useNavigate();

  const { numberValidationFns, expiryValidationFns, ownerValidationFns, cvcValidationFns, passwordValidationFns } =
    creditCard.getValidationFns();

  const [creditCardNumber, setCreditCardNumber, numberErrorMessage] = useInput<string>('', numberValidationFns);
  const [creditCardExpiry, setCreditCardExpiry, expiryErrorMessage] = useInput<string>('', expiryValidationFns);
  const [creditCardOwner, setCreditCardOwner, ownerErrorMessage] = useInput<string>('', ownerValidationFns);
  const [creditCardCVC, setCreditCardCVC, CVCErrorMessage] = useInput<string>('', cvcValidationFns);
  const [creditCardPassword, setCreditCardPassword, passwordErrorMessage] = useInput<Type.CreditCardPasswordType>(
    { first: '', second: '' },
    passwordValidationFns,
  );

  const [isFullFilled, setIsFullFilled] = useState(false);

  const handleSubmit = () => {
    if (!isFullFilled) return;

    const newCreditCard: Type.CreditCard = {
      number: creditCardNumber,
      expiry: creditCardExpiry,
      owner: creditCardOwner,
      cvc: creditCardCVC,
      password: {
        first: creditCardPassword.first,
        second: creditCardPassword.second,
      },
    };

    const existCreditCard = localStorageHelper.getValue('creditCard', []);
    localStorageHelper.setValue('creditCard', [...existCreditCard, newCreditCard]);

    navigate('/');
  };

  useEffect(() => {
    if (creditCardNumber.length !== 16) return setIsFullFilled(false);
    if (creditCardExpiry.length !== 5) return setIsFullFilled(false);

    if (numberErrorMessage || expiryErrorMessage || ownerErrorMessage || CVCErrorMessage || passwordErrorMessage) {
      return setIsFullFilled(false);
    }

    return setIsFullFilled(true);
  }, [numberErrorMessage, expiryErrorMessage, ownerErrorMessage, CVCErrorMessage, passwordErrorMessage]);

  useEffect(() => {
    if (creditCardNumber.length !== 16) return setIsFullFilled(false);
    if (creditCardExpiry.length !== 5) return setIsFullFilled(false);
    if (creditCardCVC.length !== 3) return setIsFullFilled(false);
    if (creditCardPassword.first.length !== 1 || creditCardPassword.second.length !== 1) {
      return setIsFullFilled(false);
    }

    return setIsFullFilled(true);
  }, [creditCardNumber, creditCardExpiry, creditCardCVC, creditCardPassword]);

  return (
    <S.CreditCardRegisterLayout>
      <S.CreditCardRegisterTopSheet>
        <S.HomeButton type="button" onClick={() => navigate('/')}>
          {`${'<'}`}
        </S.HomeButton>
        <S.CreditCardRegisterHeader>카드 추가</S.CreditCardRegisterHeader>
      </S.CreditCardRegisterTopSheet>
      <S.PreviewCreditCard>
        <CreditCard
          fullFilled={false}
          creditCard={{
            number: creditCardNumber,
            expiry: creditCardExpiry,
            owner: creditCardOwner,
          }}
        />
      </S.PreviewCreditCard>
      <S.CreditCardRegisterForm>
        <CreditCardNumberInput
          creditCardNumber={creditCardNumber}
          setCreditCardNumber={setCreditCardNumber}
          errorMessage={numberErrorMessage}
        />
        <CreditCardExpiryInput
          creditCardExpiry={creditCardExpiry}
          setCreditCardExpiry={setCreditCardExpiry}
          errorMessage={expiryErrorMessage}
        />
        <CreditCardOwnerInput
          creditCardOwner={creditCardOwner}
          setCreditCardOwner={setCreditCardOwner}
          errorMessage={ownerErrorMessage}
        />
        <CreditCardCVCInput
          creditCardCVC={creditCardCVC}
          setCreditCardCVC={setCreditCardCVC}
          errorMessage={CVCErrorMessage}
        />
        <CreditCardPasswordInput
          creditCardPassword={creditCardPassword}
          errorMessage={passwordErrorMessage}
          setCreditCardPassword={setCreditCardPassword}
        />
        <S.ButtonWrapper>
          <S.RegisterButton
            isFullFilled={isFullFilled}
            disabled={!isFullFilled}
            type="button"
            onClick={() => handleSubmit()}
          >
            확인
          </S.RegisterButton>
        </S.ButtonWrapper>
      </S.CreditCardRegisterForm>
    </S.CreditCardRegisterLayout>
  );
}
export default CreditCardRegister;
