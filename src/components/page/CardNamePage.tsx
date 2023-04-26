import { CardType, Page } from '../../types';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import PageTemplate from '../template/PageTemplate';
import Card from '../common/Card';

import { useCardForm } from '../../context/cardForm';
import { pushList } from '../../utils/localStorageUtils';
import { LOCAL_STORAGE_KEY } from '../../constants';

interface Props {
  navigate: (page: Page) => void;
}

const CardNamePage = ({ navigate }: Props) => {
  const [cardForm, dispatch] = useCardForm();
  const { cardCompany, cardNumber, expireDate, ownerName, securityCode, cardPassword, cardName } = cardForm;
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeCardNameInput = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_VALUE', key: 'cardName', value });
  };

  const submitCardForm = () => {
    pushList<CardType>(LOCAL_STORAGE_KEY.cardList, {
      id: Date.now(),
      cardCompany,
      cardNumber,
      expireDate,
      ownerName,
      securityCode,
      cardPassword,
      cardName,
    });
    dispatch({ type: 'INIT' });
    navigate(Page.list);
  };

  const onKeyDownEnter = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') submitCardForm();
  };

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <PageTemplate>
      <Title>카드등록이 완료되었습니다.</Title>
      <Card cardCompany={cardCompany} cardNumber={cardNumber} ownerName={ownerName} expireDate={expireDate} />
      <CardNameInput
        ref={inputRef}
        value={cardName}
        onChange={onChangeCardNameInput}
        onKeyDown={onKeyDownEnter}
      />
      <ButtonWrapper>
        <SubmitButton onClick={submitCardForm}>확인</SubmitButton>
      </ButtonWrapper>
    </PageTemplate>
  );
};

export default CardNamePage;

const Title = styled.h2`
  margin-top: 130px;
  margin-bottom: 40px;

  text-align: center;
  font-weight: 400;
  font-size: 26px;
  color: #383838;
`;

const CardNameInput = styled.input`
  outline: none;

  width: 240px;
  height: 34px;
  margin-top: 124px;
  border: none;
  border-bottom: 1.5px solid #737373;
  padding: 6px 0;

  background-color: transparent;

  text-align: center;
  font-size: 18px;
`;

const ButtonWrapper = styled.div`
  margin-top: auto;

  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;

  height: 34px;
  border: none;

  background-color: transparent;

  text-align: right;
  font-weight: 700;
  font-size: 14px;
  color: #000000;
`;
