import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import { CardItem, ErrorMessage, Loading } from '../components/common';
import { ERROR_MESSAGE } from '../constants/errors';
import { PATH } from '../constants/path';
import { cardList } from '../data/localStorage';
import { useInput } from '../hooks/useInput';
import { cardRegisterValidator } from '../validation/cardRegister';

export function AddCardName() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const currentCardInfo = location.state;

  const { value, isError, handleChange } = useInput(
    cardRegisterValidator.nickname
  );

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  function moveAddCardNamePage() {
    navigate(PATH.CARD_LIST);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    currentCardInfo.nickname = value;

    cardList.updateData(currentCardInfo);

    setLoading(!loading);
    setTimeout(() => {
      setLoading(!loading);
      setShow(!show);
      moveAddCardNamePage();
    }, 2000);
  }

  if (loading)
    return (
      <_AddCardNameContainer>
        <_Section>
          <Loading /> <_Direction>카드 등록중입니다.</_Direction>
        </_Section>
      </_AddCardNameContainer>
    );

  return (
    <_AddCardNameContainer>
      {!show && (
        <_Section>
          <_Direction>카드 등록이 완료되었습니다.</_Direction>
          {currentCardInfo ? (
            <CardItem
              cardNumberFirst={currentCardInfo.cardNumber.slice(0, 4)}
              cardNumberSecond={currentCardInfo.cardNumber.slice(4, 8)}
              cardNumberThird={currentCardInfo.cardNumber.slice(8, 12)}
              cardNumberFourth={currentCardInfo.cardNumber.slice(12, 16)}
              month={currentCardInfo.expiredDate.slice(0, 2)}
              year={currentCardInfo.expiredDate.slice(2, 4)}
              username={currentCardInfo.username}
              company={currentCardInfo.company}
            />
          ) : (
            <Navigate to='/' replace={true} />
          )}
          <_Form onSubmit={handleSubmit}>
            <_InputWithErrorMessage>
              <_Input
                type='text'
                value={value}
                onChange={handleChange}
                placeholder='카드 별명을 지어주세요.(10자 이하)'
                maxLength={10}
              />
              <ErrorMessage>
                {isError && ERROR_MESSAGE['NICKNAME']}
              </ErrorMessage>
            </_InputWithErrorMessage>
            <_ButtonWrapper>
              <_CompleteButton type='submit'>확인</_CompleteButton>
            </_ButtonWrapper>
          </_Form>
        </_Section>
      )}
    </_AddCardNameContainer>
  );
}

const _AddCardNameContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin: 2rem;
`;

const _Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 7rem;
  gap: 5rem;
`;

const _Direction = styled.p`
  font-weight: 500;
  font-size: 2rem;
`;

const _Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  align-items: center;
`;

const _Input = styled.input`
  width: 25rem;
  padding: 1.2rem;

  border-bottom: 0.2rem solid gray;

  text-align: center;
`;

const _ButtonWrapper = styled.div`
  width: 45%;
  display: flex;
  justify-content: end;

  margin-top: 10rem;
  margin-left: 20rem;
`;

const _CompleteButton = styled.button`
  width: 5rem;
  padding: 0.5rem 0.1rem;
  color: black;
  background-color: White;
  font-weight: bold;

  cursor: pointer;
`;

const _InputWithErrorMessage = styled.div`
  position: relative;
  display: flex;
  justify-content: start;

  gap: 0.7rem;
`;
