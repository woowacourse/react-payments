import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { CardNumberInput } from './cardInfoInputs/CardNumberInput';
import { ExpirationDateInput } from './cardInfoInputs/ExpirationDateInput';
import { OwnerNameInput } from './cardInfoInputs/OwnerNameInput';
import { SecurityCodeInput } from './cardInfoInputs/SecurityCodeInput';
import { PasswordInput } from './cardInfoInputs/PasswordInput';
import { useNavigate } from 'react-router-dom';
import {
  useCardInfoActionContext,
  useCardInfoValueContext,
} from '../../hooks/cardInfoContext';
import { v4 } from 'uuid';
import { useCardList } from '../../hooks/useCardList';
import { useFormValidation } from '../../hooks/useFormValidation';
import { useModalStateContext } from '@kyw0716/woowacourse-scent-modal';

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
  const canSubmit = useFormValidation();

  const { isOpen } = useModalStateContext();

  const [inputOrder, setInputOrder] = useState(0);

  const viewNextInput = useCallback(() => {
    setInputOrder((current) => current + 1);
  }, []);

  const handleSubmitNewCardInfo: React.FormEventHandler = (e) => {
    e.preventDefault();

    const newCardInfo = {
      cardNumber,
      expirationDate,
      ownerName,
      securityCode,
      password,
      companyId,
      cardId,
    };

    if (cardList.some((card) => card.cardId === cardId)) {
      modifyCardInfo(cardId, newCardInfo);
      navigate('/register/nickName');
      return;
    }

    addNewCard(newCardInfo);
    navigate('/register/nickName');
  };

  useEffect(() => {
    if (cardId === '') setCardId(v4());
  }, [cardId]);

  return (
    <Style.Wrapper onSubmit={handleSubmitNewCardInfo}>
      {companyId ? (
        <>
          {inputOrder > 3 && (
            <Style.SubmitButton disabled={!canSubmit} autoFocus={true}>
              {canSubmit ? '제출' : '❌'}
            </Style.SubmitButton>
          )}

          {inputOrder > 2 && <PasswordInput viewNextInput={viewNextInput} />}

          {inputOrder > 1 && (
            <>
              <SecurityCodeInput viewNextInput={viewNextInput} />
              <OwnerNameInput viewNextInput={viewNextInput} />
            </>
          )}

          {inputOrder > 0 && (
            <ExpirationDateInput viewNextInput={viewNextInput} />
          )}

          <CardNumberInput viewNextInput={viewNextInput} />
        </>
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
  Caption: styled.span`
    width: 241px;

    display: flex;
    justify-content: center;

    font-size: 20px;
    margin-top: 5px;
    color: grey;
  `,
  SubmitButton: styled.button`
    all: unset;

    width: 100%;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #646464;
    opacity: ${(props) => (props.disabled ? '0.3' : '1')};
    color: white;
    font-size: 18px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
  `,
};
