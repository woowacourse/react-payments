/* eslint-disable max-len */
import CreditCard from 'components/CreditCard';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
    const existCreditCard = JSON.parse(localStorage.getItem('creditCards') || '[]');
    localStorage.setItem('creditCards', JSON.stringify([...existCreditCard, newCreditCard]));
    navigate('/');
  };

  const isValidCVC = (cvc: string): boolean => cvc === '' || cvc.length < 3;
  const isValidExpiry = (expiry: string): boolean => expiry === '' || expiry.length < 5;
  const isValidCardNumber = (number: string): boolean => number === '' || number.length < 16;
  const isValidCardPassword = (first: string, second: string): boolean => first === '' || second === '';

  useEffect(() => {
    if (isValidCVC(creditCardCVC)) return setIsFullFilled(false);
    if (isValidExpiry(creditCardExpiry)) return setIsFullFilled(false);
    if (isValidCardNumber(creditCardNumber)) return setIsFullFilled(false);
    if (isValidCardPassword(creditCardPassword.first, creditCardPassword.second)) return setIsFullFilled(false);

    return setIsFullFilled(true);
  }, [creditCardNumber, creditCardExpiry, creditCardCVC, creditCardPassword]);

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
