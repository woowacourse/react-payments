import styled from 'styled-components';

import { InputBox } from './common';

import { useCardRegisterForm } from '../hooks/useCardRegisterForm';

import { cardList } from '../data/localStorage';

import { joinValues } from '../utils/infoKey';
import { getFormFields } from '../utils/formData';

import { Card } from '../type/card';
import { useNavigate } from 'react-router-dom';
import { checkInputValdiation } from '../utils/checkInputValidation';
import { InputInfo } from '../type/input';

export function CardRegisterForm() {
  const naviagte = useNavigate();

  const inputList = useCardRegisterForm();

  const allInputs = [
    ...inputList.CARD_NUMBER,
    ...inputList.DATE,
    ...inputList.USERNAME,
    ...inputList.CODE,
    ...inputList.CARD_PASSWORD,
  ];

  const { isRequiredInputValid, isOptionalInputValid } = checkInputValdiation(
    allInputs as InputInfo[]
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fields = getFormFields(e.target as HTMLFormElement);
    const submittedCardInfo = {
      ...joinValues(fields, 'CARD_NUMBER'),
      ...joinValues(fields, 'DATE'),
      ...joinValues(fields, 'USERNAME'),
      ...joinValues(fields, 'CODE'),
      ...joinValues(fields, 'CARD_PASSWORD'),
    };

    cardList.updateData(submittedCardInfo as unknown as Card);

    moveCardListPage();
  }

  function moveCardListPage() {
    naviagte('/');
  }

  return (
    <_Form onSubmit={handleSubmit}>
      {Object.entries(inputList).map(([key, inputs]) => (
        <InputBox id={key} inputs={inputs as unknown as InputInfo[]}></InputBox>
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
