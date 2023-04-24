import CreditCard from 'components/CreditCard';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Type from 'types';
import { useCreditCard } from 'hooks/useCreditCard';
import CreditCardNumberInput from './inputs/CreditCardNumberInput';
import CreditCardExpiryInput from './inputs/CreditCardExpiryInput';
import CreditCardOwnerInput from './inputs/CreditCardOwnerInput';
import CreditCardCVCInput from './inputs/CreditCardCVCInput';
import CreditCardPasswordInput from './inputs/CreditCardPasswordInput';
import * as S from './style';
import {
  validateCVC, validateExpiry, validateNumber, validatePassword
} from './validations';

function CreditCardRegister() {
  const navigate = useNavigate();
  const { saveCreditCard } = useCreditCard();

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

  const isValidCVC = validateCVC(creditCard.cvc);
  const isValidExpiry = validateExpiry(creditCard.expiry);
  const isValidCardNumber = validateNumber(creditCard.number);
  const isValidCardPassword = validatePassword(
    creditCard.password.first,
    creditCard.password.second
  );

  const isError = [
    isValidCVC,
    isValidExpiry,
    isValidCardNumber,
    isValidCardPassword
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
    saveCreditCard(newCreditCard);
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
