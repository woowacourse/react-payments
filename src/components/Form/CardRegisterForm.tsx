import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CardViewer } from '../CardViewer';
import { CardNumberInput } from '../input/CardNumberInput';
import { ExpirationDateInput } from '../input/ExpirationDateInput';
import { OwnerNameInput } from '../input/OwnerNameInput';
import { SecurityCodeInput } from '../input/SecurityCodeInput';
import { PasswordInput } from '../input/PasswordInput';
import { CardSelectModal } from '../Modal/CardSelect/CardSelectModal';
import { Button } from '../Button/Button';
import { useCardRegisterForm } from '../../hooks/useCardRegisterForm';
import { cardDataService } from '../../domains/cardDataService';

export function CardRegisterForm() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { card, cardDispatch, isValidCardForm } = useCardRegisterForm();

  const cardNumberInputRef = useRef<HTMLInputElement>(null);
  const monthInputRef = useRef<HTMLInputElement>(null);
  const ownerNameInputRef = useRef<HTMLInputElement>(null);
  const securityCodeInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleCardInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    cardDataService.addNewCard(card);

    navigate('/add-alias', { state: { cardId: card.id } });
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

  useEffect(() => {
    if (isModalOpen) return;
    cardNumberInputRef.current?.focus();
  }, [isModalOpen]);

  return (
    <Style.Container onSubmit={handleCardInfoSubmit}>
      <CardSelectModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        setCardCompany={(input) => cardDispatch({ type: 'SET_CARD_COMPANY', cardCompany: input })}
      />
      <Style.CardCompanySelectButton type={'button'} onClick={openModal}>
        <CardViewer card={card} />
      </Style.CardCompanySelectButton>
      <Style.InputContainer>
        <CardNumberInput
          cardNumberInputRef={cardNumberInputRef}
          moveFocusToExpirationDate={moveFocusToExpirationDate}
          cardNumber={card.cardNumber}
          setCardNumber={(input) => cardDispatch({ type: 'SET_CARD_NUMBER', cardNumber: input })}
        />
        <ExpirationDateInput
          monthInputRef={monthInputRef}
          moveFocusToOwnerName={moveFocusToOwnerName}
          expirationDate={card.expirationDate}
          setExpirationDate={(input) =>
            cardDispatch({ type: 'SET_EXPIRATION_DATE', expirationDate: input })
          }
        />
        <OwnerNameInput
          ownerNameInputRef={ownerNameInputRef}
          moveFocusToSecurityCode={moveFocusToSecurityCode}
          ownerName={card.ownerName}
          setOwnerName={(input) => cardDispatch({ type: 'SET_OWNER_NAME', ownerName: input })}
        />
        <SecurityCodeInput
          securityCodeInputRef={securityCodeInputRef}
          moveFocusToPassword={moveFocusToPassword}
          securityCode={card.securityCode}
          setSecurityCode={(input) =>
            cardDispatch({ type: 'SET_SECURITY_CODE', securityCode: input })
          }
        />
        <PasswordInput
          passwordInputRef={passwordInputRef}
          password={card.password}
          setPassword={(input) => cardDispatch({ type: 'SET_PASSWORD', password: input })}
        />
      </Style.InputContainer>
      <Style.ButtonContainer>
        <Button designType={'text'} disabled={!isValidCardForm}>
          다음
        </Button>
      </Style.ButtonContainer>
    </Style.Container>
  );
}

const Style = {
  Container: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: max-content;

    gap: 15px;
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

    z-index: 1000;
  `,

  InputContainer: styled.div`
    display: flex;
    flex-direction: column;

    width: max-content;

    gap: 12px;
  `,

  ButtonContainer: styled.div`
    display: flex;
    justify-content: flex-end;

    width: 100%;
  `,
};
