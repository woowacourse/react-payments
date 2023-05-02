import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { InputBox } from './common';
import { PATH } from '../constants/path';
import { useCardRegisterForm } from '../hooks/useCardRegisterForm';
import { Card } from '../type/card';
import { isCardInfoOption } from '../utils/checkType';

export function CardRegisterForm() {
  const naviagte = useNavigate();

  const {
    cardRegisterForm,
    company,
    isRequiredInputValid,
    isOptionalInputValid,
  } = useCardRegisterForm();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const submittedCardInfo: Card = {
      cardNumber: '',
      expiredDate: '',
      code: '',
      password: '',
      company: '',
    };

    for (const [key, inputs] of Object.entries(cardRegisterForm)) {
      if (isCardInfoOption(key, submittedCardInfo)) {
        submittedCardInfo[key] = Object.values(inputs)
          .map((input) => input.value)
          .join('');
      }
    }

    if (company.clicked.value) {
      submittedCardInfo.company = company.clicked.value;
      moveAddCardNamePage(submittedCardInfo);

      return;
    }

    alert('카드 회사를 선택해주세요!');
  }

  function moveAddCardNamePage(formState: Card) {
    naviagte(PATH.ADD_CARD_NAME, { state: { ...formState } });
  }

  return (
    <_Form onSubmit={handleSubmit}>
      {Object.entries(cardRegisterForm).map(([key, inputs], index) => (
        <InputBox key={index} id={key} inputs={Object.values(inputs)} />
      ))}
      {isRequiredInputValid && isOptionalInputValid && (
        <_ButtonWrapper>
          <_CompleteButton type='submit'>다음</_CompleteButton>
        </_ButtonWrapper>
      )}
    </_Form>
  );
}

const _Form = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  gap: 1rem;
`;

const _ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const _CompleteButton = styled.button`
  width: 5rem;
  padding: 0.5rem 0.1rem;
  color: black;
  background-color: White;
  font-weight: bold;

  cursor: pointer;
`;
