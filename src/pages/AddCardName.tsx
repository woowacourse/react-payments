import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { CardItem, ErrorMessage } from '../components/common';
import { ERROR_MESSAGE } from '../constants/errors';
import { cardList } from '../data/localStorage';
import { useInput } from '../hooks/useInput';
import { cardRegisterValidator } from '../validation/cardRegister';

export function AddCardName() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentCardInfo = location.state;

  const { value, isError, handleChange } = useInput(
    cardRegisterValidator.nickname
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    currentCardInfo.nickname = value;

    cardList.updateData(currentCardInfo);

    moveAddCardNamePage();
  }

  function moveAddCardNamePage() {
    navigate('/');
  }

  return (
    <_AddCardNameContainer>
      <_Section>
        <_Direction>카드 등록이 완료되었습니다.</_Direction>
        <CardItem info={currentCardInfo}></CardItem>
        <_Form onSubmit={handleSubmit}>
          <_Input
            type='text'
            value={value}
            onChange={handleChange}
            placeholder='카드 별명을 지어주세요.(10자 이하)'
            maxLength={10}
          />
          <ErrorMessage>{isError && ERROR_MESSAGE['NICKNAME']}</ErrorMessage>
          <_ButtonWrapper>
            <_CompleteButton type='submit'>확인</_CompleteButton>
          </_ButtonWrapper>
        </_Form>
      </_Section>
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
`;

const _Direction = styled.p`
  font-weight: 500;
  font-size: 2rem;

  margin-bottom: 5rem;
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
  margin-top: 10rem;

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
function naviagte(arg0: string) {
  throw new Error('Function not implemented.');
}
