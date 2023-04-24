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

  const [creditCard, setCreditCard] = useState<Type.CreditCard>({
    number: '',
    expiry: '',
    owner: '',
    cvc: '',
    password: {
      first: '',
      second: '',
    },
  });

  const isValidCVC = creditCard.cvc === '' || creditCard.cvc.length < 3;
  const isValidExpiry = creditCard.expiry === '' || creditCard.expiry.length < 5;
  const isValidCardNumber = creditCard.number === '' || creditCard.number.length < 16;
  const isValidCardPassword = creditCard.password.first === '' || creditCard.password.second === '';

  const isError = [
    isValidCVC,
    isValidExpiry,
    isValidCardNumber,
    isValidCardPassword,
  ].some((v) => v);

  const handleSubmit = () => {
    if (isError) return;

    const newCreditCard: Type.CreditCard = {
      number: creditCard.number,
      expiry: creditCard.expiry,
      owner: creditCard.owner,
      cvc: creditCard.cvc,
      password: {
        first: creditCard.password.first,
        second: creditCard.password.second,
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
            number: creditCard.number,
            expiry: creditCard.expiry,
            owner: creditCard.owner,
          }}
        />
      </S.PreviewCreditCard>
      <S.CreditCardRegisterForm>
        <CreditCardNumberInput
          name="number"
          creditCard={creditCard}
          setCreditCard={setCreditCard}
        />
        <CreditCardExpiryInput
          name="expiry"
          creditCard={creditCard}
          setCreditCard={setCreditCard}
        />
        <CreditCardOwnerInput
          name="owner"
          creditCard={creditCard}
          setCreditCard={setCreditCard}
        />
        <CreditCardCVCInput
          name="cvc"
          creditCard={creditCard}
          setCreditCard={setCreditCard}
        />
        <CreditCardPasswordInput
          name="password"
          creditCard={creditCard}
          setCreditCard={setCreditCard}
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
