import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { cardDataService } from '../domains/cardDataService';
import { CardViewer } from './CardViewer';
import { CardNumberInput } from './input/CardNumberInput';
import { ExpirationDateInput } from './input/ExpirationDateInput';
import { OwnerNameInput } from './input/OwnerNameInput';
import { SecurityCodeInput } from './input/SecurityCodeInput';
import { PasswordInput } from './input/PasswordInput';
import { useCardRegisterForm } from '../hooks/useCardRegisterForm';
import { CardSelectModal } from './Modal/CardSelect/CardSelectModal';
import { Button } from './Button/Button';

export function CardRegisterForm() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    id,
    alias,
    cardCompany,
    cardNumber,
    expirationDate,
    ownerName,
    securityCode,
    password,
    setCardCompany,
    setCardNumber,
    setExpirationDate,
    setOwnerName,
    setSecurityCode,
    setPassword,
    isValidCardForm,
  } = useCardRegisterForm();

  const monthInputRef = useRef<HTMLInputElement>(null);
  const ownerNameInputRef = useRef<HTMLInputElement>(null);
  const securityCodeInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleCardInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    cardDataService.addNewCard({
      id,
      alias,
      cardCompany,
      cardNumber,
      expirationDate,
      ownerName,
      securityCode,
      password,
    });

    navigate('/add-alias');
  };

  const moveFocusToExpirationDate = () => {
    monthInputRef.current?.focus();
  };

  const moveFocusToOwnerName = () => {
    ownerNameInputRef.current?.focus();
  };

  const moveFocusToSecurityCode = () => {
    securityCodeInputRef.current?.focus();
  };

  const moveFocusToPassword = () => {
    passwordInputRef.current?.focus();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Style.Wrapper onSubmit={handleCardInfoSubmit}>
      <CardSelectModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        setCardCompany={setCardCompany}
      />
      <Style.CardCompanySelectButton type={'button'} onClick={openModal}>
        <CardViewer
          cardCompany={cardCompany}
          cardNumber={cardNumber}
          expirationDate={expirationDate}
          ownerName={ownerName}
        />
        카드사를 선택해주세요.
      </Style.CardCompanySelectButton>
      <Style.InputContainer>
        <CardNumberInput
          moveFocusToExpirationDate={moveFocusToExpirationDate}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
        />
        <ExpirationDateInput
          monthInputRef={monthInputRef}
          moveFocusToOwnerName={moveFocusToOwnerName}
          expirationDate={expirationDate}
          setExpirationDate={setExpirationDate}
        />
        <OwnerNameInput
          ownerNameInputRef={ownerNameInputRef}
          moveFocusToSecurityCode={moveFocusToSecurityCode}
          ownerName={ownerName}
          setOwnerName={setOwnerName}
        />
        <SecurityCodeInput
          securityCodeInputRef={securityCodeInputRef}
          moveFocusToPassword={moveFocusToPassword}
          securityCode={securityCode}
          setSecurityCode={setSecurityCode}
        />
        <PasswordInput
          passwordInputRef={passwordInputRef}
          password={password}
          setPassword={setPassword}
        />
      </Style.InputContainer>
      <Style.ButtonContainer>
        <Button designType={'text'} disabled={!isValidCardForm}>
          다음
        </Button>
      </Style.ButtonContainer>
    </Style.Wrapper>
  );
}

const Style = {
  Wrapper: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: max-content;

    gap: 19px;
  `,

  CardCompanySelectButton: styled.button`
    all: unset;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: #9a9a9a;

    cursor: pointer;
    &:hover {
      transition: all 0.2s linear;
      transform: scale(1.01);
    }
  `,

  InputContainer: styled.div`
    display: flex;
    flex-direction: column;

    width: max-content;

    gap: 19px;
  `,

  ButtonContainer: styled.div`
    display: flex;
    justify-content: flex-end;

    width: 100%;
  `,
};
