import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { CardNumberInput } from './cardInfoInputs/CardNumberInput';
import { ExpirationDateInput } from './cardInfoInputs/ExpirationDateInput';
import { OwnerNameInput } from './cardInfoInputs/OwnerNameInput';
import { SecurityCodeInput } from './cardInfoInputs/SecurityCodeInput';
import { PasswordInput } from './cardInfoInputs/PasswordInput';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import {
  useCardInfoActionContext,
  useCardInfoValueContext,
} from '../../hooks/cardInfoContext';
import { useModalStateContext } from '../../hooks/useModalContext';
import { v4 } from 'uuid';
import { useCardList } from '../../hooks/useCardList';

export const AddNewCardForm = () => {
  const navigate = useNavigate();

  const { addNewCard, modifyCardInfo, cardList } = useCardList();

  const { setCardId } = useCardInfoActionContext();

  const {
    cardNumber,
    expirationDate,
    ownerName,
    securityCode,
    password,
    companyId,
    cardId,
  } = useCardInfoValueContext();

  const { isOpen } = useModalStateContext();

  const [inputOrder, setInputOrder] = useState(0);

  const viewNextInput = useCallback(() => {
    setInputOrder((current) => current + 1);
  }, []);

  const viewPreviousInput = useCallback(() => {
    setInputOrder((current) => current - 1);
  }, []);

  const handleSubmitNewCardInfo = () => {
    const newCardInfo = {
      cardNumber,
      expirationDate,
      ownerName,
      securityCode,
      password,
      companyId,
      cardId,
    };

    if (cardList.find((card) => card.cardId === cardId)) {
      modifyCardInfo(cardId, newCardInfo);
      navigate('/register/nickName');
      return;
    }

    addNewCard(newCardInfo);
    navigate('/register/nickName');
  };

  useEffect(() => {
    if (cardId === '') setCardId(v4());
  }, [cardId, setCardId]);

  return (
    <Style.Wrapper onSubmit={(e) => e.preventDefault()}>
      {companyId ? (
        <Style.InputContainer>
          {inputOrder === 0 && (
            <CardNumberInput viewNextInput={viewNextInput} />
          )}

          {inputOrder === 1 && (
            <ExpirationDateInput
              viewNextInput={viewNextInput}
              viewPreviousInput={viewPreviousInput}
            />
          )}

          {inputOrder === 2 && (
            <OwnerNameInput
              viewNextInput={viewNextInput}
              viewPreviousInput={viewPreviousInput}
            />
          )}

          {inputOrder === 3 && (
            <SecurityCodeInput
              viewNextInput={viewNextInput}
              viewPreviousInput={viewPreviousInput}
            />
          )}

          {inputOrder === 4 && (
            <PasswordInput
              viewPreviousInput={viewPreviousInput}
              handleSubmitNewCardInfo={handleSubmitNewCardInfo}
            />
          )}
        </Style.InputContainer>
      ) : (
        <Style.Caption>{isOpen || '카드 클릭!'}</Style.Caption>
      )}
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 19px;

    width: max-content;
  `,
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;

    width: max-content;

    gap: 19px;
  `,
  Caption: styled.span`
    width: 241px;

    display: flex;
    justify-content: center;

    font-size: 20px;
    margin-top: 5px;
    color: grey;
  `,
};
