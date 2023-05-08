import { CardType, Page } from '../../types';
import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import PageTemplate from '../template/PageTemplate';
import Card from '../common/Card';

import { useCardForm } from '../../context/CardFormContext';
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
  }, []);

  return (
    <PageTemplate>
      <Title>카드등록이 완료되었습니다.</Title>
      <CardArea>
        <Card
          cardCompany={cardCompany}
          cardNumber={cardNumber}
          ownerName={ownerName}
          expireDate={expireDate}
        />
      </CardArea>
      <CardNameInput
        ref={inputRef}
        value={cardName}
        onChange={onChangeCardNameInput}
        onKeyDown={onKeyDownEnter}
        placeholder="카드 별칭을 입력해주세요! (선택)"
      />
      <ButtonWrapper>
        <SubmitButton onClick={submitCardForm}>확인</SubmitButton>
      </ButtonWrapper>
    </PageTemplate>
  );
};

export default CardNamePage;

const titleMove = keyframes`
  from  { top: -30vh; }
  30%   { top: -30vh; }
  to    { top: 0; }
`;

const Title = styled.h2`
  position: absolute;
  top: 0;

  margin-top: 10vh;
  margin-bottom: 40px;

  text-align: center;
  font-weight: 400;
  font-size: 26px;
  color: #383838;

  animation: ${titleMove} 1.5s;
`;

const cardMove = keyframes`
  from  { top: 64px; }
  20%   { top: 64px; }
  to    { top: 28vh; }
`;

const CardArea = styled.div`
  position: absolute;
  top: 28vh;

  animation: ${cardMove} 1.5s;
`;

const fadeIn = keyframes`
  from  { opacity: 0; }
  to  { opacity: 1; }
`;

const CardNameInput = styled.input`
  position: absolute;
  top: 40vh;

  width: 240px;
  height: 34px;
  margin-top: 20vh;
  border: none;
  border-bottom: 1.5px solid #737373;
  padding: 6px 0;
  outline: none;

  background-color: transparent;

  text-align: center;
  font-size: 18px;
  color: #383838;

  animation: ${fadeIn} 1s;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  margin-top: auto;
  margin-bottom: 24px;
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
