import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@Components/Button';
import CreditCard from '@Components/CreditCard';
import Header from '@Components/Header';

import useModal from '@Hooks/useModal';

import { CreditCardRegisterContext } from '@Contexts/CreditCardRegisterContext';

import CreditCardCVCInput from './CreditCardCVCInput';
import CreditCardCompanyModal from './CreditCardCompanyModal/CreditCardCompanyModal';
import CreditCardExpiryInput from './CreditCardExpiryInput';
import CreditCardNumberInput from './CreditCardNumberInput';
import CreditCardOwnerInput from './CreditCardOwnerInput';
import CreditCardPasswordInput from './CreditCardPasswordInput';
import * as S from './style';

function CreditCardRegister() {
  const navigate = useNavigate();

  const { isModalOpen, openModal, closeModal } = useModal();

  const { creditCard, update, errorMessage } = useContext(CreditCardRegisterContext);

  const [isFullFilled, setIsFullFilled] = useState(false);

  const handleSubmit = () => {
    if (!isFullFilled) return;
    if (!creditCard.company) return;

    navigate('/register/alias');
  };

  useEffect(() => {
    if (creditCard.numbers.length !== 16) return setIsFullFilled(false);
    if (creditCard.expiry.length !== 5) return setIsFullFilled(false);

    if (
      errorMessage.numbers ||
      errorMessage.expiry ||
      errorMessage.owner ||
      errorMessage.cvc ||
      errorMessage.password
    ) {
      return setIsFullFilled(false);
    }

    return setIsFullFilled(true);
  }, [errorMessage.numbers, errorMessage.expiry, errorMessage.owner, errorMessage.cvc, errorMessage.password]);

  useEffect(() => {
    if (creditCard.numbers.length !== 16) return setIsFullFilled(false);
    if (creditCard.expiry.length !== 5) return setIsFullFilled(false);
    if (creditCard.cvc.length !== 3) return setIsFullFilled(false);
    if (creditCard.password.first.length !== 1 || creditCard.password.second.length !== 1) {
      return setIsFullFilled(false);
    }

    return setIsFullFilled(true);
  }, [creditCard.numbers, creditCard.expiry, creditCard.cvc, creditCard.password]);

  useEffect(() => {
    if (!creditCard.company) {
      openModal();
    }
  }, []);

  return (
    <>
      <Header title="카드 추가" hasBackButton />
      <S.PreviewCreditCard>
        <CreditCard
          fullFilled={false}
          creditCard={{
            number: creditCard.numbers,
            expiry: creditCard.expiry,
            owner: creditCard.owner,
            company: creditCard.company,
          }}
        />
        <S.ReSelectCardCompanyButton
          onClick={() => {
            openModal();
            update.company(undefined);
          }}
        >
          {creditCard.company && '카드 재선택'}
        </S.ReSelectCardCompanyButton>
      </S.PreviewCreditCard>
      <S.CreditCardRegisterForm>
        <CreditCardNumberInput
          creditCardNumber={creditCard.numbers}
          updateNumbers={update.numbers}
          errorMessage={errorMessage.numbers}
        />
        <CreditCardExpiryInput
          creditCardExpiry={creditCard.expiry}
          updateExpiry={update.expiry}
          errorMessage={errorMessage.expiry}
        />
        <CreditCardOwnerInput
          creditCardOwner={creditCard.owner}
          updateOwner={update.owner}
          errorMessage={errorMessage.owner}
        />
        <CreditCardCVCInput creditCardCVC={creditCard.cvc} updateCVC={update.cvc} errorMessage={errorMessage.cvc} />
        <CreditCardPasswordInput
          creditCardPassword={creditCard.password}
          updatePassword={update.password}
          errorMessage={errorMessage.password}
        />
        <S.ButtonWrapper>
          <Button disabled={!isFullFilled} type="button" handleClick={handleSubmit} text="다음" />
        </S.ButtonWrapper>
      </S.CreditCardRegisterForm>
      {isModalOpen && <CreditCardCompanyModal updateCompany={update.company} closeModal={closeModal} />}
    </>
  );
}
export default CreditCardRegister;
