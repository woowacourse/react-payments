/* eslint-disable max-len */
import CreditCard from 'components/CreditCard';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Type from 'types';
import CreditCardNumberInput from './inputs/CreditCardNumberInput';
import CreditCardExpiryInput from './inputs/CreditCardExpiryInput';
import CreditCardOwnerInput from './inputs/CreditCardOwnerInput';
import CreditCardCVCInput from './inputs/CreditCardCVCInput';
import CreditCardPasswordInput from './inputs/CreditCardPasswordInput';
import * as S from './style';

function CreditCardRegister() {
  const navigate = useNavigate();

  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [creditCardExpiry, setCreditCardExpiry] = useState('');
  const [creditCardOwner, setCreditCardOwner] = useState('');
  const [creditCardCVC, setCreditCardCVC] = useState('');
  const [creditCardPassword, setCreditCardPassword] = useState<Type.CreditCardPasswordType>({ first: '', second: '' });

  const isValidCVC = creditCardCVC === '' || creditCardCVC.length < 3;
  const isValidExpiry = creditCardExpiry === '' || creditCardExpiry.length < 5;
  const isValidCardNumber = creditCardNumber === '' || creditCardNumber.length < 16;
  const isValidCardPassword = creditCardPassword.first === '' || creditCardPassword.second === '';

  const isError = [
    isValidCVC,
    isValidExpiry,
    isValidCardNumber,
    isValidCardPassword,
  ].some((v) => v);

  const handleSubmit = () => {
    if (isError) return;

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
    const existCreditCard = JSON.parse(localStorage.getItem('creditCards') || '[]');
    localStorage.setItem('creditCards', JSON.stringify([...existCreditCard, newCreditCard]));
    navigate('/');
  };

  return (
    <S.CreditCardRegisterLayout>
      <S.CreditCardRegisterTopSheet>
        <S.HomeButton type="button" onClick={() => navigate('/')}>{`${'<'}`}</S.HomeButton>
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
        />
        <CreditCardExpiryInput
          creditCardExpiry={creditCardExpiry}
          setCreditCardExpiry={setCreditCardExpiry}
        />
        <CreditCardOwnerInput
          creditCardOwner={creditCardOwner}
          setCreditCardOwner={setCreditCardOwner}
        />
        <CreditCardCVCInput
          creditCardCVC={creditCardCVC}
          setCreditCardCVC={setCreditCardCVC}
        />
        <CreditCardPasswordInput
          creditCardPassword={creditCardPassword}
          setCreditCardPassword={setCreditCardPassword}
        />
        <S.ButtonWrapper>
          <S.RegisterButton
            disabled={isError}
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
